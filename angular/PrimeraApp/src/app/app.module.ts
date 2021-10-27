import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { PulsaComponent } from './pulsa/pulsa.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DespedidaComponent } from './despedida/despedida.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SumaComponent } from './suma/suma.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    CronometroComponent,
    PulsaComponent,
    CalculadoraComponent,
    DespedidaComponent,
    ProfileCardComponent,
    SumaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }