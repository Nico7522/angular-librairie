import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {
updateProfilForm: FormGroup
userId!: number
birthdateUser! : Date
bdUser!: string | string[]

constructor(private _fb: FormBuilder, private _activeRoute: ActivatedRoute, private _userService: UserService, private _router: Router) {
  this.updateProfilForm = this._fb.group({
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
  })

  this.userId = this._activeRoute.snapshot.params['id'];
}

update() {
  if (this.updateProfilForm.valid) {
    this._userService.update(this.userId, this.updateProfilForm.value).subscribe({
      next: () => {

      },

      complete: () => {
        this._router.navigateByUrl(`/profil/${this.userId}`)
      }

    })
  } else {
    console.log('error');
    
  }
}

ngOnInit(): void {
    this._userService.getById(this.userId).subscribe({
      next: (res) => {
        this.birthdateUser = res.result.birthdate
        this.bdUser = this.birthdateUser.toString()
        this.bdUser = this.bdUser.split('-');
        this.bdUser = this.bdUser[2][0]+[1]+'-'+this.bdUser[1]+'-'+this.bdUser[0]
     
        this.updateProfilForm.patchValue({
          name: res.result.name,
          surname: res.result.surname,
          birtdate: res.result.birthdate,
          adresse: res.result.adresse,
          email: res.result.email,
          phonenumber: res.result.phonenumber,
        })
 
                
      }
    })
}
}
