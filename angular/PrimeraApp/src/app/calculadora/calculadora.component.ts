import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;
  resuelto: boolean;

  constructor() {
    this.resultado = '';
    this.resuelto = false;
  }

  ngOnInit(): void {
  }

  manejarClick(simbolo: string) {
    if (this.resuelto) {
      this.resultado = simbolo;
      this.resuelto = false;
    } else {
      this.resultado += simbolo;
    }
  }

  resolver() {
    this.resultado = eval(this.resultado);
    this.resuelto = true;
  }

}
