import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];

  constructor() {
    this.tareas = [];
    console.log('[LISTA] constructor');
    console.log(this.tareas);
  }

  ngOnInit(): void {
    console.log('[LISTA] ngOnInit');
    console.log(this.tareas);
  }

  pintarTareas() {
    let html = '<ul class="list-group">';

    for (let tarea of this.tareas) {
      html += `<li class="list-group-item">${tarea.titulo}<br>${tarea.descripcion}</li>`;
    }

    html += '</ul>';
    return html;
  }

}
