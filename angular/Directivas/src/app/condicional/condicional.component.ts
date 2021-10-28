import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent implements OnInit {

  activo: boolean;

  constructor() {
    this.activo = true;
  }

  ngOnInit(): void {
  }

  pulsarBoton() {
    // if (this.activo) {
    //   this.activo = false;
    // } else {
    //   this.activo = true;
    // }

    // this.activo = this.activo ? false : true;

    this.activo = !this.activo;
  }

}
