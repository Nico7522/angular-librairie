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
  date = new Date().getFullYear();
  year!: number;
  invalidBirthdate: string = '';
  input: string = ''
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
isMajor(){
  this.registerForm.get("birtdate")?.valueChanges.subscribe(x => {
    this.year =
    this.registerForm.get('birtdate')?.value[0] +
    this.registerForm.get('birtdate')?.value[1] +
    this.registerForm.get('birtdate')?.value[2] +
    this.registerForm.get('birtdate')?.value[3];
  if (this.year > this.date - 18) {
    this.invalidBirthdate =
      'You must have at least 18 year old to register !';
    
  } else {
    this.invalidBirthdate = ''
  }
  })

}
  register(): void {
    this.year =
      this.registerForm.get('birtdate')?.value[0] +
      this.registerForm.get('birtdate')?.value[1] +
      this.registerForm.get('birtdate')?.value[2] +
      this.registerForm.get('birtdate')?.value[3];
    if (this.year > this.date - 18) {
      this.invalidBirthdate =
        'You must have at least 18 year old to register !';
      return;
    }

    if (this.registerForm.valid) {
      this._authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('id', res.result.user.id.toString());
          localStorage.setItem('name', res.result.user.name);
          localStorage.setItem('role', res.result.user.role);
          localStorage.setItem('token', res.result.token);
          localStorage.setItem('avatar', res.result.user.avatar);
          this._authService.loged();
        },
        error: (err) => {
          // console.log(err);
        },
        complete: () => {
          this._router.navigateByUrl('/books');
        },
      });
    } else {
      // console.log('ee');

      this.registerForm.markAllAsTouched();
    }
  }
}
