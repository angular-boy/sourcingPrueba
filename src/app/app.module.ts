import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';


// Importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { ProbandoBackService } from './services/probando-back.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // cargamos el módulo en el array de imports
  ],
  providers: [
    ProbandoBackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
