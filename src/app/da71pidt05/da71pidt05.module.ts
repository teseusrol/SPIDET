import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FolioComponent } from './folio/folio.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        CuerpoComponent,
        BusquedaComponent,
        FolioComponent
    ],
    exports: [
        CuerpoComponent,
        BusquedaComponent,
        FolioComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class Da71pidt05Module { }
