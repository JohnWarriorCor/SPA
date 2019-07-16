import { Component, OnInit } from '@angular/core';
import { InvocadoresService } from '../../services/invocadores.service';


@Component({
  selector: 'app-invocadores',
  templateUrl: './invocadores.component.html',
  styleUrls: ['./invocadores.component.css']
})
export class InvocadoresComponent {

  invocadores: any[] = [];
  loading = true;

  constructor( private _INVOCADORESSERVICE: InvocadoresService ) {
    this._INVOCADORESSERVICE.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.invocadores = data;
      }, 1000);
    });
  }

  borrarInvocador( key$: string) {
    this._INVOCADORESSERVICE.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.invocadores[key$];
      }
    });
  }

}
