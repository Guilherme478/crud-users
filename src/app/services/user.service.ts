import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/c2f07569-64a2-4c5e-b545-f6807885ffbc'

  constructor(private httpClient: HttpClient) { }

  //retorna lista de usuarios
  getUsers (): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)

  }
}
