import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategorieResultArray } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private _categorieUrl = 'http://localhost:8080/api/categorie/'
  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<CategorieResultArray> {
    return this._httpClient.get<CategorieResultArray>(this._categorieUrl)
  }
}
