import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../../services/register-user.service';
import { Contact } from '../../models/contact';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FindEmailService } from '../../services/find-email.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  repeatPassword = '';
  existeEmail = false;

  constructor(
     public registerUserService: RegisterUserService,
     public findEmailService: FindEmailService
  ) { }

  ngOnInit(): void {

    this.registerForm  = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      repeatPassword: new FormControl('', [
        Validators.required
      ])
    });
}

  registerUser(): void {

    const newUser  = new Contact( this.firstName, this.lastName, this.email, this.password );

    if (this.registerForm.valid) {
      this.registerUserService.addContact(newUser).subscribe(
        (res: boolean) => {
          console.log(res);
          if ( res === true) {
            swal(
              'Ya eres usuario',
              'Usuario registrado con éxito',
              'success'
            ).then( () => location.href = '/');
          } else {
            swal(
              'Email ya en uso!',
              'Necesitas registrarte con otro email',
              'error'
            );
          }
        },
        err  => {
          console.log('Mal');
          alert('Error en nuestro servidor. Inténtelo de nuevo');
        }
      );
    }
  }

  existEmail() {
    const newUser  = new Contact( this.firstName, this.lastName, this.email, this.password );
      this.findEmailService.addContact(newUser).subscribe(
        (res: boolean) => {
          console.log(res);
          if ( res === true) {
            console.log('no existe email');
            this.existeEmail = false;
          } else {
            console.log('ya existe email');
            this.existeEmail = true;
          }
        },
        err  => {}
      );
  }
}


