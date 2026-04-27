import { Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedLogin = () => redirectUnauthorizedTo('/login');
const redirectLoggedInToHome = () => redirectLoggedInTo('/carrito');

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'carrito', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login/login').then(m => m.Login),
    ...canActivate(redirectLoggedInToHome)
  },
  { 
    path: 'carrito', 
    loadComponent: () => import('./pages/carrito/carrito').then(m => m.Carrito),
    ...canActivate(redirectUnauthorizedLogin)
  }
];