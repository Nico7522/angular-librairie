import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  whereWeAre: string = 'books';
  isAdmin: boolean = false;
  isConnected: boolean = false;
  isSwitch: boolean = false;
  name!:string | null
  role!:string | null
  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this._authService.isAdmin.subscribe((state: boolean) => {
      this.isAdmin = state;
    });
    this._authService.isConnected.subscribe((state: boolean) => {
      this.isConnected = state;
      this.name = localStorage.getItem('name')
      this.role = localStorage.getItem('role')
    });
  }

  switch(): void {
    this.isSwitch === true ? false : true;
  }

  disconnect(): void {
    this._authService.disconnect();
    this.name = '';
    this.role = '';
  }

  isActive(state: string) {
    this.whereWeAre = state;
    console.log(this.whereWeAre);
  }
}
