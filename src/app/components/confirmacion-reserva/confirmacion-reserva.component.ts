import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Reservation, ReservationService } from '../../services/reservations.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmacion-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirmacion-reserva.component.html',
  styleUrls: ['./confirmacion-reserva.component.css']
})
export class ConfirmacionReservaComponent implements OnInit {
  roomid: string = '';
  checkin: string = '';
  checkout: string = '';
  numeroHabitacion: string = '';
  precio: string = '';

  nombreTitular: string = '';
  numeroTarjeta: string = '';
  vencimiento: string = '';
  cvv: string = '';

  mostrandoPasarela = false;
  mensaje = '';

  constructor(private route: ActivatedRoute, private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('QueryParams:', params); 
      this.roomid = params['roomid'] || '';
      this.checkin = params['checkin'] || '';
      this.checkout = params['checkout'] || '';
      this.numeroHabitacion = params['numeroHabitacion'] || '';
      this.precio = params['precio'] || '';
    });
  }

  formularioValido(): boolean {
    return this.nombreTitular !== '' &&
           this.numeroTarjeta !== '' &&
           this.vencimiento !== '' &&
           this.cvv !== '';
  }

  confirmarYPagar() {
    this.mostrandoPasarela = true;
    this.mensaje = '';

    // Simula procesamiento del pago (3 segundos)
    setTimeout(() => {
      this.mostrandoPasarela = false;
      const current = new Date()
      // Armar payload para enviar
      const reserva: Reservation = {
        roomId: this.roomid,
        checkInDate: this.checkin,
        checkOutDate: this.checkout,
        reservationNumber: `RES-${current.getFullYear()}-${current.getMonth()}${current.getDay()}` ,
        statusId: '728d893c-d09b-4bf2-8387-6c50064774cd'
      };

      this.reservationService.reserve(reserva).subscribe({
        next: () => this.mensaje = '¡Reserva confirmada exitosamente!',
        error: () => this.mensaje = 'Error al confirmar la reserva. Intente de nuevo.'
      });
    }, 3000);
  }

}
