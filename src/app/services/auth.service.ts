import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { sha256 } from 'js-sha256';

export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;

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
}