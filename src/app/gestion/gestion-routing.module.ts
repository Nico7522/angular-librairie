import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebooksComponent } from './gestionbooks/createbooks/createbooks.component';
import { GestionbooksComponent } from './gestionbooks/gestionbooks.component';
import { UpdatebooksComponent } from './gestionbooks/updatebooks/updatebooks.component';
import { CreatecategoriesComponent } from './gestioncategories/createcategories/createcategories.component';
import { GestioncategoriesComponent } from './gestioncategories/gestioncategories.component';
import { GestionordersComponent } from './gestionorders/gestionorders.component';
import { GestionusersComponent } from './gestionusers/gestionusers.component';

const routes: Routes = [
  {path: 'gestionusers', component: GestionusersComponent},
  {path: 'gestionorders', component: GestionordersComponent},
  {path: 'gestionbooks', component: GestionbooksComponent},
  {path: 'gestioncategories', component: GestioncategoriesComponent},
  {path: 'gestioncategories/create', component: CreatecategoriesComponent},
  {path: 'gestionbooks/create', component: CreatebooksComponent},
  {path: 'gestionbooks/update/:id', component: UpdatebooksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
