import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() proyecto: Proyecto;

  @Output() pulsaBorrar: EventEmitter<boolean>;

  constructor() {
    this.proyecto = { activo: false };
    this.pulsaBorrar = new EventEmitter();
  }

  ngOnInit(): void {
  }

  cambiaActivo() {
    this.proyecto.activo = !this.proyecto.activo;
  }

  borrarProyecto() {
    this.pulsaBorrar.emit(true);
  }

}
