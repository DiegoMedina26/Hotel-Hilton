import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../../services/reservations.service';

@Component({
  selector: 'app-confirmacion-reserva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmacion-reserva.component.html',
  styleUrls: ['./confirmacion-reserva.component.css']
})
export class ConfirmacionReservaComponent implements OnInit {
  hotel: string = '';
  destino: string = '';
  checkin: string = '';
  checkout: string = '';
  huespedes: number = 1;
  habitaciones: number = 1;
  tipoHabitacion: string = '';
  precio: number = 0;

  constructor(private route: ActivatedRoute, private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('QueryParams:', params); 
      this.hotel = params['hotel'] || 'Hotel sin nombre';
      this.destino = params['destino'] || '';
      this.checkin = params['checkin'] || '';
      this.checkout = params['checkout'] || '';
      this.huespedes = +params['huespedes'] || 1;
      this.habitaciones = +params['habitaciones'] || 1;
      this.tipoHabitacion = params['tipoHabitacion'] || '';
      this.precio = +params['precio'] || 0;
    });
  }
}
