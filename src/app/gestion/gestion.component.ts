import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  token! : string | null
  ngOnInit(): void {
      this.token = localStorage.getItem('token')
  }

}
