import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  // Componente que reciba un array de productos y los liste en el HTML
  @Input() arrProductos: Producto[];

  constructor() {
    this.arrProductos = [];
  }

  ngOnInit(): void {
  }

  sumaTotal() {
    let res = 0;
    for (let producto of this.arrProductos) {
      res += producto.precio;
    }
    return res;
  }

  borrarProducto(indice: number) {
    this.arrProductos.splice(indice, 1);
  }

}
