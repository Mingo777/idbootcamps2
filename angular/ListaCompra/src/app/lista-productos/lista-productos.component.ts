import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];

  @Output() productoSeleccionado: EventEmitter<number>;

  constructor() {
    this.productos = [];
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  manejarClick(indice: number) {
    this.productoSeleccionado.emit(indice);
  }

}
