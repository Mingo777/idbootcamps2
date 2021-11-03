import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  manejarClick(ruta: string) {
    // Realizar acciones previas a la navegación
    this.router.navigate([ruta]);
  }

}