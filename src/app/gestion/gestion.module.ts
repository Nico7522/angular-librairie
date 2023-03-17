import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { GestionusersComponent } from './gestionusers/gestionusers.component';
import { GestionordersComponent } from './gestionorders/gestionorders.component';


@NgModule({
  declarations: [
    GestionComponent,
    GestionusersComponent,
    GestionordersComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
