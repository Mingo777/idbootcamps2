import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numeros: number[];

  constructor() {
    this.numeros = [23, 4, 87, 12];
  }

  onSumaResuelta($event: number) {
    console.log(`El resultado de la suma es ${$event}`);
  }

  onCuentaTerminada($event: string) {
    console.log($event);
  }

}