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
  usuario: any = undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getEmployeeProfile().subscribe({
      next: (data) => {
        this.usuario = data;
      },
    });
  }
}

