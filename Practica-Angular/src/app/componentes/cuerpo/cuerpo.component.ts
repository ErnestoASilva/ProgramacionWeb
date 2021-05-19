import { Component } from '@angular/core';
import { PersonajeService } from 'src/app/servicios/personaje.service';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html'
})

export class CuerpoComponent {
  mostrar = true;

  personajes = [];

  informacion = {
    autor: 'Cristiano Ronaldo',
    frase: 'SIUUUUUUUU'
  };

  constructor( private servicioPersonajes: PersonajeService ) {
    console.log( this.servicioPersonajes.leerPersonajes() );
    this.personajes = this.servicioPersonajes.leerPersonajes();
  }
}