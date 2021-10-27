import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() contador: number;

  @Output() cuentaTerminada: EventEmitter<string>;

  constructor() {
    this.contador = 10;
    this.cuentaTerminada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  comenzarCronometro() {
    // Con un interval restar 1 a contador cada segundo
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval);
        this.cuentaTerminada.emit('La cuenta ha terminado');
      }
    }, 1000);
  }

}
