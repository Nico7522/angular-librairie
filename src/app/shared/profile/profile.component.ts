import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  isConnected = localStorage.getItem('id');
  coId!: number;
  imgPath: string = 'http://localhost:8080';
  userId!: number;
  personnalInfo!: User;
  profileImg!: string;
  user!: User;
  constructor(
    private _userService: UserService,
    private _activeRoute: ActivatedRoute
  ) {
    if (this.isConnected) {
      this.userId = parseInt(this._activeRoute.snapshot.params['id']);
      
    }
  }

  ngOnInit(): void {
    if (this.isConnected !== null) {
      this.coId = parseInt(this.isConnected);
    }
    this._userService.getById(this.userId).subscribe({
      next: (res) => {
        this.personnalInfo = res.result;
      },
      complete: () => {},
    });
  }
}
