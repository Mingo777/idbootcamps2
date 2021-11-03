import { Injectable } from '@angular/core';

// nombre, apellidos, edad, email, activo
export interface Empleado {
  nombre?: string;
  apellidos?: string;
  edad?: number;
  email?: string;
  activo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private arr: Empleado[];

  constructor() {
    this.arr = [
      { nombre: 'Rocío', apellidos: 'García', edad: 19, email: 'rocio@gmail.com', activo: true },
      { nombre: 'Laura', apellidos: 'González', edad: 45, email: 'laura@gmail.com', activo: false },
      { nombre: 'Ramón', apellidos: 'Díaz', edad: 23, email: 'ramon@gmail.com', activo: true },
      { nombre: 'Manuel', apellidos: 'Romero', edad: 56, email: 'manuel@gmail.com', activo: false },
      { nombre: 'Marta', apellidos: 'Robles', edad: 68, email: 'marta@gmail.com', activo: true },
    ]
  }

  getAll(): Empleado[] {
    return this.arr;
  }

  getActives(): Empleado[] {
    let res: Empleado[] = [];
    for (let empleado of this.arr) {
      if (empleado.activo) {
        res.push(empleado);
      }
    }
    return res;
  }

  getActivesV2(): Empleado[] {
    const arrFiltrado = this.arr.filter((empleado) => {
      if (empleado.activo) {
        return true;
      } else {
        return false;
      }
    });
    return arrFiltrado;
  }

  getActivesV3(): Empleado[] {
    return this.arr.filter(empleado => empleado.activo);
  }

  create(nuevoEmpleado: Empleado) {
    this.arr.push(nuevoEmpleado);
  }

  getMayores(edad: number): Empleado[] {
    return this.arr.filter((empleado) => empleado.edad && empleado.edad > edad);
  }

}