import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResult } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = "http://localhost:8080/api/user/"
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<UserResult> {
    return this._httpClient.get<UserResult>(this.userUrl)
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete<any>(this.userUrl+id)
  }
}
