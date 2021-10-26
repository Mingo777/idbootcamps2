import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { PulsaComponent } from './pulsa/pulsa.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DespedidaComponent } from './despedida/despedida.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    CronometroComponent,
    PulsaComponent,
    CalculadoraComponent,
    DespedidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }