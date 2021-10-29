import { Component } from '@angular/core';
import { Proyecto } from './interfaces/proyecto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  proyectos: Proyecto[];

  constructor() {
    this.proyectos = [];
  }

  onProyectoCreado($event: Proyecto) {
    this.proyectos.push($event);
    console.log(this.proyectos);
  }

}