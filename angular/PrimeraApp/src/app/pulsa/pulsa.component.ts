import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pulsa',
  templateUrl: './pulsa.component.html',
  styleUrls: ['./pulsa.component.css']
})
export class PulsaComponent implements OnInit {

  texto: string;
  colorSeleccionado: string;

  constructor() {
    this.texto = 'Texto a mostrar';
    this.colorSeleccionado = 'rojo';
  }

  ngOnInit(): void {
  }

  manejarClick() {
    console.log('Se pulsa!!!!');
    this.texto = 'Texto modificado';
  }

  manejarInput($event: any) {
    console.log($event.target.value);
    this.texto = $event.target.value;
  }

  cambiarColor(color: string) {
    this.colorSeleccionado = color;
  }

}