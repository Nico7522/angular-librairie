import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _authService: AuthService){}
  title = 'angular-librairie';
  token = localStorage.getItem('token');

  ngOnInit(): void {
    
  }


}
