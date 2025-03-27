import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '/Users/santi/Hotel-Hilton_front/src/app/services/auth.service';
import { CityService } from '/Users/santi/Hotel-Hilton_front/src/app/services/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-modal',
  standalone: true,
  templateUrl: './registro-modal.component.html',
  styleUrls: ['./registro-modal.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class RegistroModalComponent implements OnInit {
  @Input() mostrarModal: boolean = false;

  user: any = {
    identification_number: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city_id: '',
    password: ''
  };

  cities: any[] = [];
  error: string = '';

  constructor(
    private authService: AuthService,
    private cityService: CityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarCiudades();
  }

  cargarCiudades(): void {
    this.cityService.getCities().subscribe({
      next: (data) => {
        this.cities = data;
      },
      error: (err) => {
        console.error('Error al cargar ciudades', err);
        this.error = 'Error al cargar las ciudades. Intenta nuevamente.';
      }
    });
  }

  register(): void {
    this.error = '';
    this.authService.signupCustomer(this.user).subscribe({
      next: () => {
        alert('Usuario registrado con éxito');
        this.cerrarModal();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        this.error = 'Hubo un error al registrar el usuario.';
      }
    });
  }

  @Output() cerrar: EventEmitter<void> = new EventEmitter();
  
  cerrarModal(): void {
    this.cerrar.emit(); 
  }
}
