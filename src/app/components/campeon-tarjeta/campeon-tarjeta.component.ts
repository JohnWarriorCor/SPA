import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campeon-tarjeta',
  templateUrl: './campeon-tarjeta.component.html',
  styleUrls: ['./campeon-tarjeta.component.css']
})
export class CampeonTarjetaComponent implements OnInit {

  @Input() campeon: any = {};
  @Input() index: number;
  @Output() campeonSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
    this.campeonSeleccionado = new EventEmitter();
  }
  verCampeon() {
    this.router.navigate(['/campeon', this.index]);
  }

  ngOnInit() {
  }

}
