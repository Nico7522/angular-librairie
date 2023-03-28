import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  avatar!: File;
  birthdateUser!: any;
  bdUser!: string | string[];
  constructor(
    private _userService: UserService,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {
    if (this.isConnected) {
      this.userId = parseInt(this._activeRoute.snapshot.params['id']);
    }
  }
  recupImg(e: any) {
    this.avatar = e.target.files[0];
  }

  updateAvatar(id: number) {
    this._userService.updateAvatar(id, this.avatar).subscribe({
      complete: () => {
        this._userService.getById(this.userId).subscribe({
          next: (res) => {
            console.log(res.result.avatar);
            localStorage.removeItem('avatar');
            localStorage.setItem('avatar', res.result.avatar);
          },
        });
        window.location.reload();
        this._router.navigateByUrl('/profile/:id');
      },
    });
  }

  ngOnInit(): void {
    if (this.isConnected !== null) {
      this.coId = parseInt(this.isConnected);
    }
    this._userService.getById(this.userId).subscribe({
      next: (res) => {
        this.birthdateUser = res.result.birthdate;
        this.bdUser = this.birthdateUser.toString();
        this.bdUser = this.bdUser.slice(0, 10);

        this.personnalInfo = res.result;
      },
      complete: () => {},
    });
  }
}
