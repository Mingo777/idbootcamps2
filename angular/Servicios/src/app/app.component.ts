import { Component } from '@angular/core';
import { Empleado, EmpleadosService } from './services/empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrEmpleados: Empleado[];
  nuevoEmpleado: Empleado;

  constructor(private empleadosService: EmpleadosService) {
    this.arrEmpleados = [];
    this.nuevoEmpleado = { activo: false };
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

  envioEmpleado() {
    this.empleadosService.create(this.nuevoEmpleado);
    this.nuevoEmpleado = { activo: false };
  }

  onBuscaEdad($event: any) {
    this.arrEmpleados = this.empleadosService.getMayores($event.target.value);
  }

}
