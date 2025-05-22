import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  Reservation,
  ReservationService,
} from '../../services/reservations.service';

@Component({
  selector: 'app-pasarela-opciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pasarela-opciones.component.html',
  styleUrls: ['./pasarela-opciones.component.css'],
})
export class PasarelaOpcionesComponent {
  reserva!: Reservation;

  constructor(
    private router: Router,
    private reservationService: ReservationService
  ) {
    const nav = this.router.getCurrentNavigation();
    this.reserva = nav?.extras.state?.['reserva'];
  }

  pagarConStatus(statusId: string) {
    const reservaFinal = { ...this.reserva, statusId };

    this.reservationService.reserve(reservaFinal).subscribe({
      next: () => alert('Reserva actualizada con status: ' + statusId),
      error: () => alert('Error al actualizar reserva.'),
    });
  }
}
