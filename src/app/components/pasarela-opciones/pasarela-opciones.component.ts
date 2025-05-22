import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  Reservation,
  ReservationService,
} from '../../services/reservations.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pasarela-opciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pasarela-opciones.component.html',
  styleUrls: ['./pasarela-opciones.component.css'],
})
export class PasarelaOpcionesComponent {
  reserva!: Reservation;

  nombreTitular: string = '';
  numeroTarjeta: string = '';
  vencimiento: string = '';
  cvv: string = '';

  constructor(
    private router: Router,
    private reservationService: ReservationService
  ) {
    const nav = this.router.getCurrentNavigation();
    const current = new Date();

    this.reserva = nav?.extras.state?.['reserva'];
    this.reserva.reservationNumber = `RES-${current.getFullYear()}-${Math.floor(Math.random()*9999)}`
  }

  formularioValido(): boolean {
    return (
      this.nombreTitular !== '' &&
      this.numeroTarjeta !== '' &&
      this.vencimiento !== '' &&
      this.cvv !== ''
    );
  }

  pagarConStatus(statusId: string) {
    const reservaFinal = { ...this.reserva, statusId };

    this.reservationService.reserve(reservaFinal).subscribe({
      next: () => {
        alert('Reserva actualizada')
        this.router.navigate(['/'])
      },
      error: () => alert('Error al actualizar reserva.'),
    });
  }
}
