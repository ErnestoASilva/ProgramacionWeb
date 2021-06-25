import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-visualizar-informacion',
  templateUrl: './visualizar-informacion.component.html',
  styleUrls: ['./visualizar-informacion.component.css']
})
export class VisualizarInformacionComponent implements OnInit {

  formulario: FormGroup; 

  constructor( private service: UsuariosService,
              private fb: FormBuilder) { 
    this.service.getUsuarios().subscribe( res => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [],
      correo: [],
      rol: []
    });
  }

  guardar(){
    if(this.formulario.status == 'VALID'){
      console.log(this.formulario.value)
    }
  }

}
