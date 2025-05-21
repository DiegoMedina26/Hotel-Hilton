import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

interface Reservation {
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

  reserve(reservarion: Reservation): Observable<any> {
    const user = this.authService.getUserFromToken()
    const {
      checkInDate,
      checkOutDate,
      reservationNumber,
      roomId,
      statusId,
    } = reservarion;

    const body = new HttpParams()
      .set('check_in_date', checkInDate)
      .set('check_out_date', checkOutDate)
      .set('customer_id', user.id)
      .set('reservation_number', reservationNumber)
      .set('room_id', roomId)
      .set('status_id', statusId);

    return this.http.post(this.reservationsUrl, body.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
  }

}
