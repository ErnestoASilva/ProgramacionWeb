import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { CrearUsuarioModel } from  'src/app/interface/crear-usuario.model'

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

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

  guardar(){
    if(this.formulario.status == 'VALID'){
      
      const info = this.formulario.value;

      const usuario: CrearUsuarioModel = {
        nombre: info.nombre,
        correo: info.correo,
        rol: info.rol,
        password: info.password,
        no_control: '18330504'
      };

      console.log(usuario);
      this.service.postUsuarios(usuario).subscribe(res => {
        console.log(res);
      });
    }
  }

}
