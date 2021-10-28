import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstilosComponent } from './estilos/estilos.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { CondicionalComponent } from './condicional/condicional.component';
import { ListaEpisodiosComponent } from './lista-episodios/lista-episodios.component';

@NgModule({
  declarations: [
    AppComponent,
    EstilosComponent,
    SemaforoComponent,
    CondicionalComponent,
    ListaEpisodiosComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
