import { Injectable } from '@angular/core';

export interface Contactos{
  id: number;
  nombre: String;
  apellidos: String;
  genero: String;
  descripcion: String;
}

@Injectable({
  providedIn: 'root'
}) 
export class ContactosService {

  Contactos: Contactos[] = [
    { id: 11, 
      nombre: 'Fernando',
      apellidos: 'Ureña Gómez',
      genero: 'hombre', 
      descripcion: 'Instructor' },

    { id: 12, 
      nombre: 'María', 
      apellidos: 'Pérez Almendro', 
      genero: 'mujer', 
      descripcion: 'Amiga de la infancia' },

    { id: 13, 
      nombre: 'Federico', 
      apellidos: 'Caballero Sánchez',
      genero: 'hombre', 
      descripcion: 'Compañero de trabajo' }
      ];
  constructor() {
   }
   getContactos(){
    return this.Contactos;
  }
}
