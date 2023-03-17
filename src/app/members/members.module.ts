import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    MembersComponent,
    BooksComponent,
    AuthorsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
