import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new Subject<User>();
  constructor() {}

  login(email: string, password: string) {
    const loginCredentials = { email, password };
    console.log('login credentials', loginCredentials);
    return of(loginCredentials);
  }

  logout() {
    // remove user from subject
    this.setUser(null);
    console.log(`user did logout`);
  }

  get user() {
    return this.user$.asObservable();
  }

  register(user: any) {
    // make an api call
    // update the user subject
    this.setUser(user);
    this.user$.next(user);
    console.log(`Registered Successfully`, user);
    return of(user);
  }
  private setUser(user) {
    this.user$.next(user);
  }
}
