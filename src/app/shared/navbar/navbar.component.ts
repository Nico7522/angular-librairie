import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  // isAdmin: boolean = false;
  // isConnected: boolean = false;
  imgPath: string = 'http://localhost:8080';
  isSwitch: boolean = false;
  name!:string | null
  role!:string | null
  token!: any | null
  userId!: number | null
  userIdToken! : string | null
  finalUserId!: string | null
  id!: number | null
  avatar!: string | null
  constructor(private _authService: AuthService, private _activateRoute: ActivatedRoute) {
    // this.userId = parseInt(this._activateRoute.snapshot.params['id'])
  }

  ngOnInit() {
   
    
    this._authService.isAdmin.subscribe((state: boolean) => {
      // this.isAdmin = state;
    });
    this._authService.isConnected.subscribe((state: boolean) => {
      // this.isConnected = state;
      this.name = localStorage.getItem('name');
      this.role = localStorage.getItem('role');
      this.token = localStorage.getItem('token');
      this.userIdToken = localStorage.getItem('id');
      this.avatar = localStorage.getItem('avatar')
      if (this.userIdToken !== null) {
        this.id = parseInt(this.userIdToken)
        console.log(this.id);
        
      }
      
    });
    
  }


  switch(): void {
    this.isSwitch === true ? false : true;
  }

  disconnect(): void {
    this.userIdToken = '';
    this.name = '';
    this.role = '';
    this.id = null
    this._authService.disconnect();
    
  }

  isActive(state: string) {
    this.whereWeAre = state;
  }
}
