import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
