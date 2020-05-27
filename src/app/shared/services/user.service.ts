import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }
  /* aquí consumo la api para 15 usuarios random */
  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=15');
  }
}
