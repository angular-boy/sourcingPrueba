import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../../services/register-user.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  password = '';

  constructor(
    private registerUserService: RegisterUserService
  ) { }

  ngOnInit() {
  }

  registerUser(): void {
    let nuevoContacto : Contact = new Contact( this.firstName, this.lastName, this.email, this.password );


    this.registerUserService.addContact(nuevoContacto).subscribe(
      val => {
        //asdfsdfa
        console.log('Funciona');
      },
      response => {
        //fasdfasdf
        console.log('error');
      }
    );
  }

}
