import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-datosgenerales',
  templateUrl: './datosgenerales.component.html',
  styleUrls: ['./datosgenerales.component.scss']
})
export class DatosgeneralesComponent implements OnInit {
  formdatos: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formdatos = this.fb.group({
      clave: ['', Validators.required],
      nombre: ['', Validators.required],
      texto: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      cedula: [''],
      fechanacimiento: ['', Validators.required],
      telefono: [''],
    })
  }

  agregar()
  {
    console.log(this.formdatos.value)
  }

}
