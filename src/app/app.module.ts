import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import {MaquetadoformatosModule} from "./maquetadoformatos/maquetadoformatos.module";


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,

    InicioComponent,
    ContactoComponent,
    AyudaComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaquetadoformatosModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
