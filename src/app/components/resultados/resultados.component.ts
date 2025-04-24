import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./resultados.component.css']

})
export class ResultadosComponent implements OnInit {
  destino: string = '';
  checkin: string = '';
  checkout: string = '';
  habitaciones: number = 1;
  huespedes: number = 1;
  hotelNombre: string = '';


  hoteles: any[] = [
    {
      nombre: 'Este es el hotel seleccionado por usted',
      descripcion: 'Un hotel de lujo en que cuenta con todas las comodidades que usted necesita.',
      habitaciones: [
        {
          tipo: 'Estándar',
          capacidad: 2,
          precio: 150,
          descripcion: 'Cómoda habitación con cama queen y baño privado.',
          imagen: 'assets/img/estandar.jpg'
        },
        {
          tipo: 'Suite Ejecutiva',
          capacidad: 4,
          precio: 300,
          descripcion: 'Habitación amplia con zona de estar y vista al mar.',
          imagen: 'assets/img/suite-ejecutiva.jpg'
        },
        {
          tipo: 'Doble Deluxe',
          capacidad: 2,
          precio: 200,
          descripcion: 'Cama king, escritorio y balcón privado.',
          imagen: 'assets/img/doble-deluxe.jpg'
        },
        {
          tipo: 'Familiar',
          capacidad: 5,
          precio: 350,
          descripcion: 'Habitación grande con dos camas dobles y sofá cama.',
          imagen: 'assets/img/familiar,jpg'
        }
      ]
    }
  ];


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.destino = params['destino'] || '';
      this.checkin = params['checkin'] || '';
      this.checkout = params['checkout'] || '';
      this.habitaciones = +params['habitaciones'] || 1;
      this.huespedes = +params['huespedes'] || 1;
      const nombreHotel = params['hotel'] || 'Hotel sin nombre';

      // Actualizar el nombre del hotel en el primer objeto del array
      if (this.hoteles.length > 0) {
        this.hoteles[0].nombre = nombreHotel;
      }
    });
  }
}



