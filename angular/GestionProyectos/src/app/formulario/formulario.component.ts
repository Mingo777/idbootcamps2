import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() proyectoCreado: EventEmitter<Proyecto>;

  nuevoProyecto: Proyecto;

  constructor() {
    this.nuevoProyecto = { activo: false };
    this.proyectoCreado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  manejarClick() {
    this.proyectoCreado.emit(this.nuevoProyecto);
    this.nuevoProyecto = { activo: false };
  }

}
