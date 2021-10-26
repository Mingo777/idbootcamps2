import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'despedida',
  templateUrl: './despedida.component.html',
  styleUrls: ['./despedida.component.css']
})
export class DespedidaComponent implements OnInit {

  @Input() nombre: string;

  constructor() {
    this.nombre = 'Lorena';
  }

  ngOnInit(): void {
  }

}
