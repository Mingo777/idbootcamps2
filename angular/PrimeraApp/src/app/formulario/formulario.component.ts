import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  texto: string;
  persona: Persona;

  constructor() {
    this.texto = '';
    this.persona = {
      nombre: '',
      apellidos: '',
      edad: 0
    };
  }

  ngOnInit(): void {
  }

  manejarClick() {
    this.texto = 'He pulsado el botón';
  }

}
