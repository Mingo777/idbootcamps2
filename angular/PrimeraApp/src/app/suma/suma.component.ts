import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;

  // 1 - Definir el evento. Nombre y qué emite
  @Output() sumaResuelta: EventEmitter<number>;

  resultado: number;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;
    // 2 - Inicializo el evento
    this.sumaResuelta = new EventEmitter();
  }

  ngOnInit(): void {
  }

  calcularResultado() {
    this.resultado = this.num1 + this.num2;
    // 3 - Emito el dato
    this.sumaResuelta.emit(this.resultado);
  }

}