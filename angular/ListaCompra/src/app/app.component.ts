import { Component } from '@angular/core';
import { Producto } from './interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productosPendientes: Producto[];
  productosComprados: Producto[];

  constructor() {
    this.productosPendientes = [];
    this.productosComprados = [];
  }

  onProductoCreado($event: Producto) {
    this.productosPendientes.push($event);
  }

  onProductoSeleccionado($event: number) {
    const ret = this.productosPendientes.splice($event, 1);
    this.productosComprados.push(ret[0]);
  }

  onProductoPendiente($event: number) {
    const ret = this.productosComprados.splice($event, 1);
    this.productosPendientes.push(ret[0]);
  }

}
