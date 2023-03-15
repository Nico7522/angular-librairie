import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isAdmin: boolean = false
  loginForm : FormGroup
  constructor(private _authService : AuthService, private _fb : FormBuilder, private _router : Router){
    this.loginForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]]
    })

  }

  ngOnInit() {
    this._authService.isAdmin.subscribe((state: boolean) => {
      this.isAdmin = state;
    })
  }

  connect(): void {
    console.log(this.loginForm.value);
    
    if (this.loginForm.valid) {
      console.log('Form is valid');
      
      this._authService.connect(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res);
          
        },
        error: (err) => {
          console.log(err);
          
        },
        
        complete: () =>{
          this._router.navigateByUrl('/');

        }
      })
    } else {
      console.log('form is invalid');
      this._router.navigateByUrl('/')
      
    }
  }

  disconnect(): void {
    this._authService.disconnect()
  }

}

