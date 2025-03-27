import { Routes } from '@angular/router';
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
];
