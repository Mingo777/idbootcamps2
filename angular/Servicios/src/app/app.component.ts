import { Component } from '@angular/core';
import { Empleado, EmpleadosService } from './services/empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrEmpleados: Empleado[];

  constructor(private empleadosService: EmpleadosService) {
    this.arrEmpleados = [];
  }

  ngOnInit() {
    this.arrEmpleados = this.empleadosService.getAll();
  }

  recuperaActivos() {
    this.arrEmpleados = this.empleadosService.getActivesV3();
  }

  recuperaTodos() {
    this.arrEmpleados = this.empleadosService.getAll();
  }

}