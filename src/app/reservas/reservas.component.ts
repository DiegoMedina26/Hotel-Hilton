import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './reservas.component.html',
})
export class ReservasComponent {
  // Estructura de las ubicaciones con tipado
  hotelesHilton: Record<string, Record<string, string[]>> = {
    'América': {
      'Estados Unidos': ['Hilton New York', 'Hilton Los Angeles'],
      'Canadá': ['Hilton Toronto', 'Hilton Vancouver'],
      'México': ['Hilton Cancún', 'Hilton CDMX'],
    },
    'Europa': {
      'Reino Unido': ['Hilton London', 'Hilton Manchester'],
      'Francia': ['Hilton Paris', 'Hilton Nice'],
      'España': ['Hilton Madrid', 'Hilton Barcelona'],
    },
    'Asia': {
      'Japón': ['Hilton Tokyo', 'Hilton Osaka'],
      'China': ['Hilton Beijing', 'Hilton Shanghai'],
      'India': ['Hilton Mumbai', 'Hilton Delhi'],
    },
    'África': {
      'Sudáfrica': ['Hilton Cape Town', 'Hilton Johannesburg'],
      'Egipto': ['Hilton Cairo', 'Hilton Alexandria'],
    },
    'Oceanía': {
      'Australia': ['Hilton Sydney', 'Hilton Melbourne'],
      'Nueva Zelanda': ['Hilton Auckland', 'Hilton Wellington'],
    }
  };

  // Control de ciudades cargadas
  ciudades: string[] = [];

  // Objeto de reserva
  reserva = {
    region: '',
    pais: '',
    ciudad: '',
    nombre: '',
    correo: '',
    fechaIngreso: '',
    fechaSalida: '',
    personas: 1,
    metodoPago: ''
  };

  // Método para cargar ciudades según el país
  actualizarCiudades() {
    if (this.reserva.region && this.reserva.pais) {
      this.ciudades = this.hotelesHilton[this.reserva.region][this.reserva.pais];
    } else {
      this.ciudades = [];
    }
  }

  // Mostrar la reserva en consola o manejar el envío
  onSubmit() {
    console.log('Reserva realizada:', this.reserva);
    alert('¡Reserva realizada exitosamente!');
  }
}
