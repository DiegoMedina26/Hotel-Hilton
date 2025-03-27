import { Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegistroModalComponent } from './components/registro-modal/registro-modal.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilClienteComponent } from './components/perfil-cliente/perfil-cliente.component';
import { PerfilEmpleadoComponent } from './components/perfil-empleado/perfil-empleado.component';
import { AuthGuard } from './guards/auth.guard';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginModalComponent },
  { path: 'registro', component: RegistroModalComponent },
  { path: 'reservaciones', component: ReservacionesComponent },
  { path: 'perfil-cliente', component: PerfilClienteComponent, canActivate: [AuthGuard] },
  { path: 'perfil-empleado', component: PerfilEmpleadoComponent, canActivate: [AuthGuard] },
=======
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { canActivateAdmin } from './guards/admin.guard'; // (Opcional) Protección

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [canActivateAdmin] }, // Protegido
  { path: '**', redirectTo: '' } // Redirección en caso de error
>>>>>>> 9a0462082af953559d73fc0c59a7989ce842568a
];
