import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquetadoformatosRoutingModule } from './maquetadoformatos-routing.module';
import { DatosgeneralesComponent } from './datosgenerales/datosgenerales.component';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { ResumenComponent } from './resumen/resumen.component';
import { InfotecnicaComponent } from './infotecnica/infotecnica.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { HonorariosComponent } from './honorarios/honorarios.component';
import { RecursosmaterialesComponent } from './recursosmateriales/recursosmateriales.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BienesmueblesComponent } from './bienesmuebles/bienesmuebles.component';
import { ResumenderecursosComponent } from './resumenderecursos/resumenderecursos.component';
import { CurriculumvitaeComponent } from './curriculumvitae/curriculumvitae.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ErrorComponent } from './error/error.component';




@NgModule({
    declarations: [

    DatosgeneralesComponent,
       JustificacionComponent,
       ResumenComponent,
       InfotecnicaComponent,
       CronogramaComponent,
       HonorariosComponent,
       RecursosmaterialesComponent,
       ServiciosComponent,
       BienesmueblesComponent,
       ResumenderecursosComponent,
       CurriculumvitaeComponent,
       ErrorComponent
  ],
  exports: [
    BienesmueblesComponent,
    CronogramaComponent,
    CurriculumvitaeComponent,
    DatosgeneralesComponent,
    HonorariosComponent,
    InfotecnicaComponent,
    JustificacionComponent,
    RecursosmaterialesComponent,
    ResumenComponent,
    ResumenderecursosComponent,
    ServiciosComponent,
    ErrorComponent
  ],
    imports: [
        CommonModule,
        MaquetadoformatosRoutingModule,
        ReactiveFormsModule
    ]
})
export class MaquetadoformatosModule { }
