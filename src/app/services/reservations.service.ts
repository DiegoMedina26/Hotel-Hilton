import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export interface Reservation {
  checkInDate: string;
  checkOutDate: string;
  reservationNumber: string;
  roomId: string;
  statusId: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservationsUrl = `${environment.apiUrl}/reservations/`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  reserve(reservation: Reservation): Observable<any> {
    const user = this.authService.getUserFromToken();
    const { checkInDate, checkOutDate, reservationNumber, roomId, statusId } =
      reservation;

    const body = {
      check_in_date: checkInDate || '',
      check_out_date: checkOutDate || '',
      customer_id: user.id || '',
      reservation_number: reservationNumber || '',
      room_id: roomId || '',
      status_id: statusId || '',
    };

    return this.http.post(this.reservationsUrl, body, {
      headers: this.authService.getAuthHeaders()
    });
  }
}
