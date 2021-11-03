import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { ProyectosComponent } from './detalle-empleado/proyectos/proyectos.component';
import { ReviewsComponent } from './detalle-empleado/reviews/reviews.component';
import { PremiosComponent } from './detalle-empleado/premios/premios.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    HomeComponent,
    InfoComponent,
    DetalleEmpleadoComponent,
    ProyectosComponent,
    ReviewsComponent,
    PremiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
