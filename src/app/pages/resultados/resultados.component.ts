import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent implements OnInit {
  destino = '';
  checkin = '';
  checkout = '';
  habitaciones = '';
  huespedes = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.destino = params['destino'];
      this.checkin = params['checkin'];
      this.checkout = params['checkout'];
      this.habitaciones = params['habitaciones'];
      this.huespedes = params['huespedes'];
    });
  }
}
  