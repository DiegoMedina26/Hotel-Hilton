import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { canActivateAdmin } from './guards/admin.guard'; // (Opcional) Proteger el login de admin

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [canActivateAdmin] }, // Accesible solo por URL
  { path: '**', redirectTo: '' } // Redirección en caso de error
];
