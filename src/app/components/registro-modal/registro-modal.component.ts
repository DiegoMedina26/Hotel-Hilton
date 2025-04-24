import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CityService } from '../../services/city.service';
import { sha256 } from 'js-sha256';

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

  countries: any[] = [];
  cities: any[] = [];
  error: string = '';

  constructor(
    private authService: AuthService,
    private cityService: CityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.cityService.getCountries().subscribe({
      next: (data:any) => (this.countries = data),
      error: (err) => {
        console.error('Error al cargar países', err);
        this.error = 'Error al cargar los países.';
      }
    });
  }
 
  loadCities(): void {
    if (this.user.country_id) {
      this.cityService.getCitiesByCountry(this.user.country_id).subscribe({
        next: (data) => (this.cities = data),
        error: (err) => {
          console.error('Error al cargar ciudades', err);
          this.error = 'Error al cargar las ciudades.';
        }
      });
    } else {
      this.cities = [];
    }
  }

  register(): void {
    this.error = '';
    this.user.password = sha256(this.user.password);
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
