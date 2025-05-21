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
  roomid: string = '';
  checkin: string = '';
  checkout: string = '';
  numeroHabitacion: string = '';
  precio: string = '';

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
}
