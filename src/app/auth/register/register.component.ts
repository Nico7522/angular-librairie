import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.registerForm = this._fb.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      birtdate: [null, Validators.required],
      adresse: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phonenumber: [
        null,
        [
          Validators.required,
          Validators.maxLength(9),
          Validators.pattern(/^[0-9]{9}$/),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
          ),
        ],
      ],
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      this._authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.result.token);
          localStorage.setItem('id', res.result.user.id.toString());
          localStorage.setItem('name', res.result.user.name);
          localStorage.setItem('role', res.result.user.role);
          this._authService.loged();
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this._router.navigateByUrl('/books');
        },
      });
    } else {
      console.log('ee');

      this.registerForm.markAllAsTouched();
    }
  }
}
