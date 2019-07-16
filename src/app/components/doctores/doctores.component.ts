import { Component, OnInit } from '@angular/core';
import { InvocadoresService, Campeon } from '../../services/invocadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

  campeones: Campeon[] = [];

  constructor( private _INVOCADORESSERVICE: InvocadoresService, private router: Router) {}

  ngOnInit() {
    this.campeones = this._INVOCADORESSERVICE.getCampeones();
  }

  verCampeon( idx: number ) {
    this.router.navigate(['/campeon', idx]);
  }

}
