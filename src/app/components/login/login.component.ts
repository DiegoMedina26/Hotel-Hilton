import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '/Users/santi/Hotel-Hilton_front/src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.error = '';
    this.authService.loginCustomer(this.usuario, this.password).subscribe({
      next: (res) => {
        this.authService.saveToken(res.access_token);
        this.router.navigate(['/perfil-cliente']);
      },
      error: () => {
        this.authService.loginEmployee(this.usuario, this.password).subscribe({
          next: (res) => {
            this.authService.saveToken(res.access_token);
            this.router.navigate(['/perfil-empleado']);
          },
          error: () => {
            this.error = 'Usuario o contraseña incorrectos.';
          }
        });
      }
    });
  }
}

