import { Component, OnInit } from '@angular/core';
import { ProbandoBackService } from "../../services/probando-back.service";
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  ProbandoBackService: any;

  constructor(
    private probandoService: ProbandoBackService
  ) { }

  ngOnInit() {
  }

  metemosDatitos(): void {
    let nuevoContacto : Contact = new Contact(54, 'asdas', 'asdaads', 'asdasd', 'asdas' );


    this.probandoService.addContact(nuevoContacto).subscribe(
      val =>{
        //asdfsdfa
        console.log("Ivan callate la boca");
      },
      response => 
      {
        //fasdfasdf
        console.log("error");
      }
    );
  }

}
