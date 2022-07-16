import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/c2f07569-64a2-4c5e-b545-f6807885ffbc'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  //retorna lista de usuarios
  getUsers (): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)

  }

  // salva usuario no banco 

  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }

  //Exclui o usuario do banco

  deletUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  //Edita usuarios
   updateUser(id: string, user: User): Observable<User>{  
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions)
   }

   getUser(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
   }
}
