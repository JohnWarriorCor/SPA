import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvocadoresService } from '../../services/invocadores.service';

@Component({
  selector: 'app-campeon',
  templateUrl: './campeon.component.html',
  styleUrls: ['./campeon.component.css']
})
export class CampeonComponent implements OnInit {

  campeon: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _INVOCADORESSERVICE: InvocadoresService) {
    this.activatedRoute.params.subscribe( params => {
      this.campeon = this._INVOCADORESSERVICE.getCampeon(params.id);
    });
  }
  ngOnInit() {
  }

}
