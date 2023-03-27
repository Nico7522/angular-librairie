import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-gestionusers',
  templateUrl: './gestionusers.component.html',
  styleUrls: ['./gestionusers.component.scss']
})
export class GestionusersComponent implements OnInit {
  userList: User[] = [];
  imgPath: string = 'http://localhost:8080';
  constructor(private _userService: UserService){

  }


  ngOnInit(): void {
      this._userService.getAll().subscribe({
        next: (res) => {
          this.userList = res.results       
        }
      })
  }

  deleteUser(id: number) {
    this._userService.delete(id).subscribe({

      error: (err) => {
        window.location.reload();
      },

      complete: () => {
        this._userService.getAll().subscribe((res) => {
          this.userList = res.results
        })
      }
    })
  }
}
