import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { TablaUsuariosComponent } from './components/tabla-usuarios/tabla-usuarios.component';
import { VisualizarInformacionComponent } from './components/visualizar-informacion/visualizar-informacion.component';

const routes: Routes = [
  {path: 'visualizar', component: VisualizarInformacionComponent},
  {path: 'tabla', component: TablaUsuariosComponent},
  {path: 'crear', component: CrearUsuarioComponent},
  {path: 'actualizar', component: ActualizarUsuarioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'visualizar' }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
