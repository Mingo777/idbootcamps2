import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {

  estilosParrafo: any;

  constructor() {
    this.estilosParrafo = {
      backgroundColor: 'indigo',
      color: 'white',
      fontSize: '30px'
    }
  }

  ngOnInit(): void {
  }

  cambiaColorFondo(color: string) {
    this.estilosParrafo.backgroundColor = color;
  }

  cambiaColorTexto($event: any) {
    this.estilosParrafo.color = $event.target.value;
  }

  // Modificar el tamaño de la fuente a través de un input de tipo RANGE
  cambiaFontSize($event: any) {
    this.estilosParrafo.fontSize = `${$event.target.value}px`;
  }

}
