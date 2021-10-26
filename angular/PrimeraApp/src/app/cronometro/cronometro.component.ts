import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  contador: number;

  constructor() {
    this.contador = 10;
  }

  ngOnInit(): void {
  }

  comenzarCronometro() {
    // Con un interval restar 1 a contador cada segundo
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

}
