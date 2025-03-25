import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  loginAdmin() {
    if (this.usuario === 'Admin' && this.password === '1234') {
      console.log('Login correcto');
      this.router.navigate(['/admin']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
