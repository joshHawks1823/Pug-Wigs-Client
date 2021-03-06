import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'products',
    pathMatch: 'full',
    loadChildren: './products/products.module#ProductsModule',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
    loadChildren: '',
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent,
    loadChildren: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
