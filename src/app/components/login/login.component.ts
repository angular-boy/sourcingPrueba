import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { LoginUserService } from '../../services/login-user.service';
import { Contact } from '../../models/contact';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(
    private loginUserService: LoginUserService
  ) { }

  ngOnInit() {
  }

  loginUser(): void {
    let nuevoContacto  = new Contact( '', '', this.email, this.password );
    this.loginUserService.login(nuevoContacto).subscribe(
      (res: boolean) => {
        console.log(res);
        if ( res === true) {
          swal(
            'Bienvenido Majete!',
            'Logeado con Éxito',
            'success'
          ).then( () => location.href = '/');
        } else {
          swal(
            'Usuario Incorrecto',
            'Necesitas registrarte para acceder o Inténtalo de Nuevo',
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

