import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-perfil-cliente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-cliente.component.html',
})
export class PerfilClienteComponent implements OnInit {
  usuario: any = undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCustomerProfile().subscribe({
      next: (data) => {
        this.usuario = data;
      },
    });
  }
}
