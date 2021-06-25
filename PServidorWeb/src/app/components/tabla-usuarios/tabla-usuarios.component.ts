import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  usuarios: any[] = [];
  constructor( private service: UsuariosService) { 
    this.service.getUsuarios().subscribe( res => {
      console.log(res);
      this.usuarios = res['usuarios'];
    });
  }

  ngOnInit(): void {
  }

  actualizar(item: any){
    console.log('Actualizando');
    console.log(this.usuarios[item]);
    
  }

  eliminar( item: any){
    console.log('Eliminando');
    const _id = this.usuarios[item]._id;

    console.log(_id);
    this.service.deleteUsuarios(_id).subscribe( res => {
      console.log(res);
    });
  }

}
