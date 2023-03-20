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
  isConnected: boolean = false;
  isAdmin: boolean = false;
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
    this._authService.isAdmin.subscribe((state: boolean) => {
      this.isAdmin = state;
    });

    this._authService.isConnected.subscribe((state: boolean) => {
      this.isConnected = state;
    });
  }

  connect(): void {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this._authService.connect(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('id', res.result.user.id.toString());
          localStorage.setItem('name', res.result.user.name);
          localStorage.setItem('role', res.result.user.role);
          this._authService.loged();
          if (res.result.user.role === "Admin") {
            console.log('je suis un admin');
            this._authService.admin();
            this._router.navigateByUrl('/gestion');
          } else {
            console.log('je suis un user');
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
      console.log('form is invalid');
      this._router.navigateByUrl('/');
    }
  }
}
