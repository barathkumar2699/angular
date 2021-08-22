import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import {FavoritesComponent } from '../favorites/favorites.component'
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';
import { SignupComponent } from '../signup/signup.component';
 
export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'menu',     component: MenuComponent },
    {path: 'about' , component:AboutComponent},
    { path: 'favorites',     component: FavoritesComponent, canActivate: [AuthGuard] },
    { path: 'dishdetail/:id',     component: DishdetailComponent },
    { path: 'contactus', component: ContactComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path:'signup',component:SignupComponent}
  ];