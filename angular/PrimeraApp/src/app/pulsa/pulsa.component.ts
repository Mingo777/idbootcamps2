import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pulsa',
  templateUrl: './pulsa.component.html',
  styleUrls: ['./pulsa.component.css']
})
export class PulsaComponent implements OnInit {

  texto: string;

  constructor() {
    this.texto = 'Texto a mostrar';
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

}