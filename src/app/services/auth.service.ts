import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { sha256 } from 'js-sha256';
import { Observable } from 'rxjs';

export class AuthService {
  private apiUrl = 'http://localhost:8000/api/auth';
  private userUrl = 'http://localhost:8000/api/user';

  constructor(private http: HttpClient, private router: Router) {}

  // Login cliente
  loginCliente(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login/cliente`, {
      email: email,
      password: sha256(password)
    });
  }

  // Login empleado
  loginEmpleado(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login/empleado`, {
      email: email,
      password: sha256(password)
    });
  }

  // Logout
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // Obtener token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  loginCustomer(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', sha256(password));

    return this.http.post(`${this.apiUrl}/signin/customer`, body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    });
  }

  loginEmployee(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', sha256(password));

    return this.http.post(`${this.apiUrl}/signin/employee`, body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    });
  }

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


  getEmployeeProfile(): Observable<any> {
    return this.http.get(`${this.userUrl}/empleado/perfil`, {
      headers: this.getAuthHeaders()
    });
  }

  // Guardar token en localStorage
  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getUserFromToken(): any {
    const token = localStorage.getItem('access_token');
    if (!token) return null;
  
    const payload = token.split('.')[1];
    try {
      const decoded = JSON.parse(atob(payload));
      return decoded;
    } catch (e) {
      console.error('Error al decodificar el token:', e);
      return null;
    }
  }
  
  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
