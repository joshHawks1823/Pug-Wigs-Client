import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from './User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  user: User;
  userSubsciption: Subscription;
  constructor(private authService: AuthService, private router: Router) {
    this.authService.user.subscribe((user) => (this.user = user));
  }

  // title = 'e-commerce';
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  ngOnDestroy(): void {
    if (this.userSubsciption) {
      this.userSubsciption.unsubscribe();
    }
  }
}
