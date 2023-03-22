import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { convertToParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatecoverService {
  private _coverUrl = "http://localhost:8080/api/book/"
  cover: FormData = new FormData()
  constructor(private _http: HttpClient) { }

  updateCover(id: number, coverB: File): Observable<any>{
    this.cover.append('cover', coverB)
    console.log(this.cover);
    
    
    return this._http.patch<any>(this._coverUrl+id + '/updatecover', this.cover)
  }
}
