import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FolioComponent} from "./da71pidt05/folio/folio.component";
import {CuerpoComponent} from "./da71pidt05/cuerpo/cuerpo.component";

const routes: Routes = [
  {
    path: 'folio',component:FolioComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
