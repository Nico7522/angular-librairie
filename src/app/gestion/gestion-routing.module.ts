import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionordersComponent } from './gestionorders/gestionorders.component';
import { GestionusersComponent } from './gestionusers/gestionusers.component';

const routes: Routes = [
  {path: 'gestionusers', component: GestionusersComponent},
  {path: 'gestionorders', component: GestionordersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
