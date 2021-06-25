import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { CrearUsuarioModel } from  'src/app/interface/crear-usuario.model'

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  formulario: FormGroup; 

  constructor(private service: UsuariosService,
    private fb: FormBuilder) { } 

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [],
      correo: [],
      rol: [],
      password: []
    });
  }

}
