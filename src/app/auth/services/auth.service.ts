import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  connect(): void {
    this.isAdmin.next(false);
  }

  disconnect() {
    this.isAdmin.next(true);
  }
}
