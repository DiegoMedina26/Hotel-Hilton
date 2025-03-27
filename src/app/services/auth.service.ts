import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { sha256 } from 'js-sha256';

export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

<<<<<<< HEAD
  private apiUrl = 'http://localhost:8000/api/auth';
  private userUrl = 'http://localhost:8000/api/user';

  constructor(private http: HttpClient) {}
=======
  constructor(private http: HttpClient, private router: Router) {}
>>>>>>> 9a0462082af953559d73fc0c59a7989ce842568a

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
<<<<<<< HEAD

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
  
  
}
=======
}
>>>>>>> 9a0462082af953559d73fc0c59a7989ce842568a
