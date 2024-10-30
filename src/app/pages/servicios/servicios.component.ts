import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  constructor(private router: Router) {}

  irAContacto() {
    this.router.navigate(['/contacto']); // Cambia '/contacto' por la ruta real de tu página de contacto
  }
}
