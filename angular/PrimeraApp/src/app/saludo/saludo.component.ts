import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  // Declaración: Qué nombre tiene y qué tipo tiene
  nombre: string;
  identificador: string;
  tipoInput: string;

  constructor() {
    console.log('Constructor Saludo');
    this.nombre = 'Ana';
    this.identificador = 'parrafoPistachi';
    this.tipoInput = 'password';
    setTimeout(() => {
      this.nombre = 'Roberto';
      this.identificador = 'otroIdentificador';
      this.tipoInput = 'text';
    }, 3000);
  }

  ngOnInit(): void {
  }

  devuelveSaludo() {
    return 'Saludo desde el método';
  }

}
