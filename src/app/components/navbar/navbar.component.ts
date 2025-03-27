import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '/Users/santi/Hotel-Hilton_front/src/app/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegistroModalComponent } from '../registro-modal/registro-modal.component';

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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.actualizarUsuario();
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
