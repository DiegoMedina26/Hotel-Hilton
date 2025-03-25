import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loginClienteVisible: boolean = false;
  usuarioCliente: string = '';
  passwordCliente: string = '';
  clienteLogueado = false;
  nombreCliente = '';

  

  constructor(private router: Router) {}
  

  mostrarLoginCliente() {
    console.log('Mostrando login cliente');
    this.loginClienteVisible = true;
  }
  
  cerrarLoginCliente() {
    this.loginClienteVisible = false;
  }

  loginCliente() {
    // Validación simple (puedes mejorarla)
    if (this.usuarioCliente === 'cliente' && this.passwordCliente === '1234') {
      alert('Inicio de sesión exitoso');
      this.clienteLogueado = true;
      this.nombreCliente = this.usuarioCliente;  // o un nombre por defecto
      this.loginClienteVisible = false; // Oculta el modal
      this.router.navigate(['/cliente-dashboard']); // Cambia a la ruta de tu panel cliente
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
  

  logoutCliente() {
    this.clienteLogueado = false;
    this.nombreCliente = '';
    this.usuarioCliente = '';
    this.passwordCliente = '';
  }
  
}

