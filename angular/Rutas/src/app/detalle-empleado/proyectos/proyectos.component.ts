import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  empleadoId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.empleadoId = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.parent!.params.subscribe(value => {
      this.empleadoId = value.empleadoId;
    })
  }

}
