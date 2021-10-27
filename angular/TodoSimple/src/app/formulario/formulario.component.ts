import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() tareaCreada: EventEmitter<Tarea>;

  nuevaTarea: Tarea;

  constructor() {
    this.nuevaTarea = {};
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  manejarClick() {
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = {};
  }

}
