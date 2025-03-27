import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { canActivateAdmin } from './guards/admin.guard'; // (Opcional) Protección

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [canActivateAdmin] }, // Protegido
  { path: '**', redirectTo: '' } // Redirección en caso de error
];
