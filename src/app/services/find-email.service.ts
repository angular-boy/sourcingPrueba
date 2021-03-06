import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class FindEmailService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {
    }

    public addContact(contact: Contact) {
      return this.http.post(this.url + '/existEmail', contact);
    }
}

