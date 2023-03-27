import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserResult, UsersResult } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userUrl = "http://localhost:8080/api/user/"
  avatar: FormData = new FormData()
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<UsersResult> {
    return this._httpClient.get<UsersResult>(this._userUrl)
  }

  getById(id: number): Observable<any>{
    return this._httpClient.get<any>(this._userUrl+id)
  }

  update(id: number, userToUpdate: User ): Observable<any> {
    return this._httpClient.put(this._userUrl+id, userToUpdate)
  }

  delete(id: number): Observable<any> {
    return this._httpClient.delete<any>(this._userUrl+id)
  }

  updateAvatar(id: number, avatarF: File): Observable<any> {
    this.avatar.append('avatar', avatarF)
    return this._httpClient.patch(this._userUrl+id + '/updateavatar', this.avatar)
  }
}
