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



@NgModule({
  declarations: [
    GestionComponent,
    GestionusersComponent,
    GestionordersComponent,
    GestionbooksComponent,
    CreatebooksComponent,
    UpdatebooksComponent,
  
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GestionModule { }
