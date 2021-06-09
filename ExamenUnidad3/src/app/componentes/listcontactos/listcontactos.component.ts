import { Component, OnInit } from '@angular/core';
import {Contactos, ContactosService} from 'src/app/servicios/contactos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ 
  selector: 'app-listcontactos',
  templateUrl: './listcontactos.component.html',
  styleUrls: ['./listcontactos.component.css']
})
export class ListcontactosComponent implements OnInit {

  contactos: Array<Contactos> = [];
  formulario: FormGroup;

  constructor(private servicioContactos: ContactosService, private fb: FormBuilder) { 
    this.contactos = this.servicioContactos.getContactos();
    this.crearFormulario();
  } 

  ngOnInit(): void {
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      id: [''],
      nombre: [''],
      apellido: [''],
      genero: [''],
      descripcion: ['']
    });
  }

 
  guardar(){
    console.log( this.formulario.value );
  }

}
