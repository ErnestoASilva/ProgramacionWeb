import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'https://api-pw-ith.herokuapp.com/api/usuarios';

  constructor( private http: HttpClient) {}

    public getUsuarios(){
      return this.http.get(this.apiUrl+ '/18330504');
    };

    public postUsuarios( body: any){
      return this.http.post(this.apiUrl, body);
    };

    public deleteUsuarios( _id: any){
      return this.http.delete(this.apiUrl + '/' + _id);
    };

   
}
