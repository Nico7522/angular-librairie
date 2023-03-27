import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResult, UsersResult } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userUrl = "http://localhost:8080/api/user/"
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<UsersResult> {
    return this._httpClient.get<UsersResult>(this._userUrl)
  }

  getById(id: number): Observable<any>{
    return this._httpClient.get<any>(this._userUrl+id)
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete<any>(this._userUrl+id)
  }
}
