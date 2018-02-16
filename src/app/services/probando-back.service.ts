import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProbandoBackService {

  private url: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public addContact(contact: Contact): Observable<any> {
    return this.http.post(this.url + "/contact", contact);
  }

}
