import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './shared/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { UpdateprofileComponent } from './shared/profile/updateprofile/updateprofile.component';
import { ShoppingComponent } from './shared/shopping/shopping.component';
import { InterceptorInterceptor } from './auth/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    UpdateprofileComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
