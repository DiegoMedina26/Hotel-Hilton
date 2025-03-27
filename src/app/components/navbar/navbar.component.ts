import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegistroModalComponent } from '../registro-modal/registro-modal.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, LoginModalComponent, RegistroModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  usuario: any = null;
  mostrarLogin: boolean = false;
  mostrarRegistro: boolean = false;
  loginClienteVisible: boolean = false;
  usuarioCliente: string = '';
  passwordCliente: string = '';
  clienteLogueado = false;
  nombreCliente = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.actualizarUsuario();
  }

  mostrarLoginCliente() {
    console.log('Mostrando login cliente');
    this.loginClienteVisible = true;
  }

  actualizarUsuario(): void {
    const user = this.authService.getUserFromToken();
    if (user) {
      this.usuario = user;
      console.log('Usuario desde token:', this.usuario); // Debug para verificar el token decodificado
    }
  }

  get nombreParaMostrar(): string {
    if (!this.usuario) return 'Invitado';
    return this.usuario.user_name || `${this.usuario.first_name || ''} ${this.usuario.last_name || ''}`.trim() || this.usuario.role || 'Usuario';
  }

  get puedeVerReservas(): boolean {
    return this.usuario && ['Admin', 'SuperAdmin', 'Empleado_Basic'].includes(this.usuario.role);
  }

  abrirLogin(): void {
    this.mostrarLogin = true;
  }

  cerrarLogin(): void {
    this.mostrarLogin = false;
    this.actualizarUsuario();
  }

  abrirRegistro(): void {
    this.mostrarRegistro = true;
  }

  cerrarRegistro(): void {
    this.mostrarRegistro = false;
    this.actualizarUsuario();
  }

  logout(): void {
    this.authService.logout();
    this.usuario = null;
    this.router.navigate(['/']);
  }
}
