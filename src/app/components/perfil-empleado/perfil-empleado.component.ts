import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-perfil-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-empleado.component.html',
})
export class PerfilEmpleadoComponent implements OnInit {
  mensaje: string = '';
  usuarioId: number | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getEmployeeProfile().subscribe({
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

