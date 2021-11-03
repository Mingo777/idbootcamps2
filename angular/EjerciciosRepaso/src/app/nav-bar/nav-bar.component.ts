import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() envioOpcion: EventEmitter<string>;

  @Input() colorBarra: string;
  @Input() colorBotones: string;

  opciones: string[];

  constructor() {
    this.envioOpcion = new EventEmitter();
    this.colorBarra = 'dodgerblue';
    this.colorBotones = 'lightblue';

    this.opciones = ['Home', 'Projects', 'Info', 'About']
  }

  ngOnInit(): void {
  }

  manejarClick(opcion: string) {
    this.envioOpcion.emit(opcion);
  }

}
