import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '/Users/santi/Hotel-Hilton_front/src/app/services/auth.service';

@Component({
  selector: 'app-perfil-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-cliente.component.html',
})
export class PerfilClienteComponent implements OnInit {
  mensaje: string = '';
  usuarioId: number | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCustomerProfile().subscribe({
      next: (data) => {
        this.mensaje = data.message;
        this.usuarioId = data.usuario_id;
      },
      error: () => {
        this.mensaje = 'Error al obtener el perfil.';
      }
    });
  }
}
