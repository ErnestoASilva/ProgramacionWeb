import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  personajes = ['Chabelo','Babo','Goku', 'Kirito'];

  constructor() { }

  leerPersonajes(){
    return this.personajes;
  }
}
