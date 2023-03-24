import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { GestionusersComponent } from './gestionusers/gestionusers.component';
import { GestionordersComponent } from './gestionorders/gestionorders.component';
import { GestionbooksComponent } from './gestionbooks/gestionbooks.component';
import { CreatebooksComponent } from './gestionbooks/createbooks/createbooks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatebooksComponent } from './gestionbooks/updatebooks/updatebooks.component';
import { GestioncategoriesComponent } from './gestioncategories/gestioncategories.component';
import { CreatecategoriesComponent } from './gestioncategories/createcategories/createcategories.component';
import { GestionusersDirective } from './gestionusers.directive';



@NgModule({
  declarations: [
    GestionComponent,
    GestionusersComponent,
    GestionordersComponent,
    GestionbooksComponent,
    CreatebooksComponent,
    UpdatebooksComponent,
    GestioncategoriesComponent,
    CreatecategoriesComponent,
    GestionusersDirective,
  
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GestionModule { }
