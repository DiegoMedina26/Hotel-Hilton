import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private baseUrl = `${environment.apiUrl}/locations`; 
  constructor(private http: HttpClient) {}


  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/countries`);
  }

  getCitiesByCountry(countryId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/cities/${countryId}`);
  }

  
}

