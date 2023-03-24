import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';


@Directive({
  selector: '[appGestionUserColor]',
})
export class GestionusersDirective implements OnInit {
  listUser: User[] = []
  constructor(private _el: ElementRef, private _userService: UserService) {
    this._el.nativeElement.style.border = "solid 4px black"
  }
  @Input('appGestionUserColor') borderColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._el.nativeElement.style.border = "solid 4px black"
  }
  private setBorder() {
    return this.borderColor === 'Admin' ? this._el.nativeElement.style.border = `solid 4px red` : this._el.nativeElement.style.border = `solid 4px green`

  }

  ngOnInit(): void {
      this._userService.getAll().subscribe({
        next: (res) => {
          this.listUser = res.results
        }
      })
  }
}
