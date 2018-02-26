import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserService } from './services/register-user.service';
import { LoginUserService } from './services/login-user.service';


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
    FormsModule
  ],
  providers: [
    RegisterUserService,
    LoginUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
