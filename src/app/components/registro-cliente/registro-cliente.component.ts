import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '/Users/santi/Hotel-Hilton_front/src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-cliente',
  standalone: true,
  templateUrl: './registro-cliente.component.html',
  imports: [CommonModule, FormsModule],
})
export class RegistroClienteComponent {
  datos: any = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city_id: 1,
    password: ''
  };

  mensaje = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  registrar() {
    this.error = '';
    this.mensaje = '';

    this.authService.signupCustomer(this.datos).subscribe({
      next: () => {
        this.mensaje = 'Registro exitoso. Ahora puedes iniciar sesión.';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: () => {
        this.error = 'Error al registrar cliente.';
      }
    });
  }
}
