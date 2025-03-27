import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilClienteComponent } from './components/perfil-cliente/perfil-cliente.component';
import { PerfilEmpleadoComponent } from './components/perfil-empleado/perfil-empleado.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroClienteComponent },
  { path: 'perfil-cliente', component: PerfilClienteComponent, canActivate: [AuthGuard] },
  { path: 'perfil-empleado', component: PerfilEmpleadoComponent, canActivate: [AuthGuard] },
];
