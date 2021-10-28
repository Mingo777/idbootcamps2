import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];

  @Output() productoSeleccionado: EventEmitter<Producto>;

  constructor() {
    this.titulo = '';
    this.productos = [];
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  manejarClick(producto: Producto) {
    console.log(producto);
    this.productoSeleccionado.emit(producto);
  }

}
