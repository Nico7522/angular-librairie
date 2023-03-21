import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebooksComponent } from './gestionbooks/createbooks/createbooks.component';
import { GestionbooksComponent } from './gestionbooks/gestionbooks.component';
import { GestionordersComponent } from './gestionorders/gestionorders.component';
import { GestionusersComponent } from './gestionusers/gestionusers.component';

const routes: Routes = [
  {path: 'gestionusers', component: GestionusersComponent},
  {path: 'gestionorders', component: GestionordersComponent},
  {path: 'gestionbooks', component: GestionbooksComponent},
  {path: 'gestionbooks/create', component: CreatebooksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
