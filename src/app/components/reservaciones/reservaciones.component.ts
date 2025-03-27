import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss']
})
export class ReservacionesComponent {
  reservaciones = [
    {
      cliente: 'Juan Pérez',
      habitacion: '101',
      fechaEntrada: '2025-04-10',
      fechaSalida: '2025-04-15',
      estado: 'Confirmada'
    },
    {
      cliente: 'Ana Gómez',
      habitacion: '202',
      fechaEntrada: '2025-04-12',
      fechaSalida: '2025-04-17',
      estado: 'Pendiente'
    },
    {
      cliente: 'Luis Torres',
      habitacion: '303',
      fechaEntrada: '2025-04-18',
      fechaSalida: '2025-04-20',
      estado: 'Cancelada'
    }
  ];
}
