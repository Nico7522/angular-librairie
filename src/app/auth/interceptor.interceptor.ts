import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token : string | null = localStorage.getItem('token')
    if(token && token != '') {
      let clone = request.clone({setHeaders: { "Authorization" : `Bearer ${token}`}});
      return next.handle(clone)
    }

    return next.handle(request);
  }
}
