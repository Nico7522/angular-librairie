import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { GestionComponent } from './gestion/gestion.component';
import { GestionModule } from './gestion/gestion.module';
import { AuthorsComponent } from './members/authors/authors.component';
import { BooksComponent } from './members/books/books.component';
import { CategoriesComponent } from './members/categories/categories.component';
import { MembersComponent } from './members/members.component';
import { MembersModule } from './members/members.module';
import { ProfileComponent } from './shared/profile/profile.component';
import { UpdateprofileComponent } from './shared/profile/updateprofile/updateprofile.component';

const routes: Routes = [
  {path: '', component: MembersComponent, loadChildren: () => import('./members/members.module').then(m => MembersModule)},
  {path: 'gestion', component: GestionComponent, loadChildren: () => import('./gestion/gestion.module').then(m => GestionModule)},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profil/:id', component: ProfileComponent},
  {path: 'profil/:id/update', component: UpdateprofileComponent},
  {path: 'books', component: BooksComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'categories', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
