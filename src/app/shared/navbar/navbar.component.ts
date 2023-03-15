import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false
  constructor(private _authService : AuthService){}

  ngOnInit() {
    this._authService.isAdmin.subscribe((state: boolean) => {
      this.isAdmin = state;
    })
  }

  connect(): void {
   
  }

  disconnect(): void {
    this._authService.disconnect()
  }

}
