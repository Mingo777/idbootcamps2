import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() proyecto: Proyecto;

  constructor() {
    this.proyecto = { activo: false };
  }

  ngOnInit(): void {
  }

  cambiaActivo() {
    this.proyecto.activo = !this.proyecto.activo;
  }

}
