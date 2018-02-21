import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../../services/register-user.service';
import { Contact } from '../../models/contact';
import { Observable } from 'rxjs/Observable';
import { isNull } from 'util';
import { equal } from 'assert';

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
  repeatPassword = '';
  validName  = true;
  validLastName  = true;
  validEmail  = true;
  validPassword  = true;

  constructor(
    private registerUserService: RegisterUserService
  ) { }

  ngOnInit() {
  }

  registerUser(): void {
    let nuevoContacto  = new Contact( this.firstName, this.lastName, this.email, this.password );

    this.validName  = RegExp('^[a-z]+$', 'i').test(this.firstName);
    this.validLastName  = RegExp('^[a-z]+$', 'i').test(this.lastName);
    this.validEmail = RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$', 'g').test(this.email);
    this.validPassword  = this.password !== '' && this.password === this.repeatPassword;

    if (this.validName && this.validLastName && this.validEmail && this.validPassword) {
      this.registerUserService.addContact(nuevoContacto).subscribe(
        (res: boolean) => {
          console.log(res);
          if ( res === true) {
            alert('Usuario registrado satisfactoriamente');
            location.href = '/';
          } else {
            alert('Email ya en uso');
          }
        },
        err  => {
          console.log('Mal');
          alert('Error en nuestro servidor. Inténtelo de nuevo');
        }
      );
    }
  }
}
