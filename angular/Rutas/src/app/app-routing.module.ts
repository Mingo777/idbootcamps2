import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { PremiosComponent } from './detalle-empleado/premios/premios.component';
import { ProyectosComponent } from './detalle-empleado/proyectos/proyectos.component';
import { ReviewsComponent } from './detalle-empleado/reviews/reviews.component';
import { RandomGuard } from './guards/random.guard';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  {
    path: 'informacion', component: InfoComponent,
    canActivate: [RandomGuard]
  },
  { path: 'inicio', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  {
    path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent, children: [
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'premios', component: PremiosComponent }
    ]
  },
  { path: '**', redirectTo: '/informacion' }
];

// /empleados/123

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }