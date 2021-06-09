import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcontactos',
  templateUrl: './addcontactos.component.html',
  styleUrls: ['./addcontactos.component.css']
})
export class AddcontactosComponent implements OnInit {
 
  formulario: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
    
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: [''],
      apellidos: [''],
      genero: [''],
      descrpcion: [''],
      email: [''],
      telefono: ['', Validators.minLength[10]]
    });
  }

 
  guardar(){
    console.log( this.formulario.value );
  }

}
