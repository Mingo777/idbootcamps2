import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() nombre: string;
  @Input() cargo: string;

  constructor() {
    this.nombre = '';
    this.cargo = '';
  }

  ngOnInit(): void {
  }

}