import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    // num aleatorio. Si es mayor de 0.4 pasas, si no, no pasas
    const randomNum = Math.random();
    console.log('RANDOM', randomNum);
    if (randomNum > 0.4) {
      return true;
    } else {
      this.router.navigate(['/empleados', 378, 'proyectos']);
      return false;
    }
  }

}
