import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class LoginModalComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  @Input() mostrarModal: boolean = false;
  @Output() cerrar: EventEmitter<void> = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.error = '';
    this.authService.loginCustomer(this.usuario, this.password).subscribe({
      next: (res) => {
        this.authService.saveToken(res.access_token);
        this.cerrarModalYRedirigir('/perfil-cliente');
      },
          error: () => {
            this.error = 'Usuario o contraseña incorrectos.';
          }
        });
      }


  cerrarModal(): void {
    this.cerrar.emit();
  }

  private cerrarModalYRedirigir(ruta: string): void {
    this.cerrar.emit();
    this.router.navigate([ruta]);
  }
}

