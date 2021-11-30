import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {AyudaComponent} from "./ayuda/ayuda.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {DatosgeneralesComponent} from "./maquetadoformatos/datosgenerales/datosgenerales.component";


const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'ayuda', component:AyudaComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'datosgenerales', component:DatosgeneralesComponent,
  loadChildren: () => import('./maquetadoformatos/maquetadoformatos.module').then(m => m.MaquetadoformatosModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
