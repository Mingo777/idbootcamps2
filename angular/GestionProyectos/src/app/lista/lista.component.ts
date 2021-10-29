import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() arrProyectos: Proyecto[];

  constructor() {
    this.arrProyectos = [];
  }

  ngOnInit(): void {
  }

}
