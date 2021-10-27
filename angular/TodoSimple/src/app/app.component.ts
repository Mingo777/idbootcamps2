import { Component } from '@angular/core';
import { Tarea } from './interfaces/tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: Tarea[];

  constructor() {
    this.arrTareas = [];
  }

  onTareaCreada($event: Tarea) {
    this.arrTareas.push($event);
    console.log(this.arrTareas);
  }

}
