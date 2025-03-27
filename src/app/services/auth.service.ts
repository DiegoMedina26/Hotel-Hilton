import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // BASE actualizada según Swagger
  private apiUrl = 'http://localhost:8000/api/auth';
  private userUrl = 'http://localhost:8000/api/user';

  constructor(private http: HttpClient) {}

  // Login cliente
  loginCustomer(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post(`${this.apiUrl}/signin/customer`, body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    });
  }

  // Login empleado
  loginEmployee(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post(`${this.apiUrl}/signin/employee`, body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    });
  }

  // Registro cliente
  signupCustomer(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup/customer`, data);
  }

  // Registro empleado
  signupEmployee(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup/employee`, data);
  }

  // Obtener perfil de cliente autenticado
  getCustomerProfile(): Observable<any> {
    return this.http.get(`${this.userUrl}/cliente/perfil`, {
      headers: this.getAuthHeaders()
    });
  }

  // Obtener perfil de empleado autenticado
  getEmployeeProfile(): Observable<any> {
    return this.http.get(`${this.userUrl}/empleado/perfil`, {
      headers: this.getAuthHeaders()
    });
  }

  // Guardar token en localStorage
  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  // Obtener token
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Borrar token
  logout(): void {
    localStorage.removeItem('access_token');
  }

  // Encabezado con token
  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
