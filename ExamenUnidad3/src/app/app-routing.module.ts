import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactosComponent } from './componentes/addcontactos/addcontactos.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ListcontactosComponent } from './componentes/listcontactos/listcontactos.component';

const routes: Routes = [
  {path: 'navbar', component: CabeceraComponent},
  {path: 'addcontactos', component: AddcontactosComponent},
  {path: 'listcontactos', component: ListcontactosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'addcontactos'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
