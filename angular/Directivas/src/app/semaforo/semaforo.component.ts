import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  colorActivo: string;

  constructor() {
    this.colorActivo = 'verde'; // rojo, amarillo, verde
  }

  ngOnInit(): void {
    // Cuando arranque el componente
    // Cada segundo, modificar el valor de colorActivo
    // rojo -> amarillo -> verde -> rojo
    setInterval(() => {
      if (this.colorActivo === 'rojo') {
        this.colorActivo = 'amarillo';
      } else if (this.colorActivo === 'amarillo') {
        this.colorActivo = 'verde';
      } else {
        this.colorActivo = 'rojo';
      }

      // this.colorActivo = (this.colorActivo === 'rojo') ? 'amarillo' : (this.colorActivo === 'amarillo') ? 'verde' : 'rojo';

    }, 1000);
  }

}
