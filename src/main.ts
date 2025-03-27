import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { ResultadosComponent } from './app/pages/resultados/resultados.component';
import { AdminDashboardComponent } from './app/admin/admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'resultados', component: ResultadosComponent },
      { path: 'admin', component: AdminDashboardComponent } 
      

    ]), 
    importProvidersFrom(FormsModule)
  ]
});
