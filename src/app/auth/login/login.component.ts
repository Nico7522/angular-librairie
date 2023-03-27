import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginForm: FormGroup;
  name!: string
  constructor(
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
          ),
        ],
      ],
    });
  }

  ngOnInit() {
   

  
  }

  connect(): void {
    if (this.loginForm.valid) {
      this._authService.connect(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('id', res.result.user.id.toString());
          localStorage.setItem('name', res.result.user.name);
          localStorage.setItem('role', res.result.user.role);
          localStorage.setItem('token', res.result.token);
          localStorage.setItem('avatar', res.result.user.avatar)
          
          this._authService.loged();
          if (res.result.user.role === "Admin") {
            this._authService.admin();
            this._router.navigateByUrl('/gestion');
          } else {
            this._router.navigateByUrl('/');           
          }
        },
        error: (err) => {
          console.log(err);
        },

        complete: () => {
         
        },
      });
    } else {
      this._router.navigateByUrl('/');
    }
  }
}
