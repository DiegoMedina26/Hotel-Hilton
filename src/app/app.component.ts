import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common'; // ✅ Importa NgIf
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NavbarComponent, FooterComponent, NgIf], // ✅ Agrega NgIf aquí
  template: `
    <app-navbar *ngIf="showNavbar"></app-navbar>
    <router-outlet></router-outlet>
    <app-footer *ngIf="showNavbar"></app-footer>
  `,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  showNavbar = true;
  private hiddenRoutes = ['/login', '/admin']; // Rutas donde NO debe aparecer la navbar

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects.split('?')[0]; // Quita parámetros
        this.showNavbar = !this.hiddenRoutes.some(route => currentUrl.startsWith(route));
      }
    });
  }
}

