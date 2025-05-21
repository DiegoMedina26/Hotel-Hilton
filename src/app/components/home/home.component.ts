import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  locations: any[] = [];

  // Variables de Login
  loginClienteVisible = false;
  usuarioCliente = '';
  passwordCliente = '';
  clienteLogueado = false;
  nombreCliente = '';

  // Variables de búsqueda de hotel
  destino: any = null;
  checkin: string = '';
  checkout: string = '';
  habitaciones: number = 1;
  huespedes: number = 1;
  hotelSeleccionado: string = '';


  constructor(private router: Router, private locationService: CityService) {}

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((data: any[]) => {
      this.locations = data;
    });
  }

  // Mostrar login
  mostrarLoginCliente() {
    this.loginClienteVisible = true;
  }

  // Cerrar login
  cerrarLoginCliente() {
    this.loginClienteVisible = false;
  }

  // Lógica de Login
  loginCliente() {
    if (this.usuarioCliente === 'cliente' && this.passwordCliente === '123') {
      this.clienteLogueado = true;
      this.nombreCliente = this.usuarioCliente;
      this.cerrarLoginCliente();
      // Redirigir después del login si quieres
      this.router.navigate(['/galeria']);
    } else {
      alert('Credenciales incorrectas');
    }
  }

  // Logout
  logoutCliente() {
    this.clienteLogueado = false;
    this.nombreCliente = '';
  }

  // Buscar hotel y navegar con los parámetros
  buscarHotel() {
    this.router.navigate(['/resultados'], { 
      queryParams: {
        destinoid: this.destino.id,
        destinoname: this.destino.name,
        checkin: this.checkin,
        checkout: this.checkout,
        habitaciones: this.habitaciones,
        huespedes: this.huespedes,
        hotel: this.hotelSeleccionado
      }
    });
  }
}
