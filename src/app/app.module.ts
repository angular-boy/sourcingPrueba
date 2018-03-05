import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserService } from './services/register-user.service';
import { LoginUserService } from './services/login-user.service';
import { FindEmailService } from './services/find-email.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // cargamos el módulo en el array de imports
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterUserService,
    LoginUserService,
    FindEmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
