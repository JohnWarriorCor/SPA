import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';

import { Invocador } from '../../interfaces/invocador.interface';
import { InvocadoresService } from '../../services/invocadores.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { of } from 'rxjs';

@Component({
  selector: 'app-invocador',
  templateUrl: './invocador.component.html',
  styleUrls: ['./invocador.component.css'],
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  `]
})
export class InvocadorComponent {
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;

  divisiones = [
    {divi: 'I'},
    {divi: 'II'},
    {divi: 'III'},
    {divi: 'IV'}
  ];
  regiones = [
    {clave: 'LAN', descripcion: 'Latinoamerica Norte'},
    {clave: 'LAS', descripcion: 'Latinoamerica Sur'},
    {clave: 'EUW', descripcion: 'Europa Este'},
    {clave: 'BR', descripcion: 'Brasil'},
    {clave: 'LCK', descripcion: 'Korea'}
  ];
  ligas = [
    { lig: 'HIERRO' },
    { lig: 'BRONCES' },
    { lig: 'PLATA' },
    { lig: 'ORO' },
    { lig: 'PLATINO' },
    { lig: 'DIAMANTE' },
    { lig: 'MAESTRO' },
    { lig: 'GRAN-MAESTRO' },
    { lig: 'RETADOR' }
  ];
  lineas = [
    { lin: 'MID' },
    { lin: 'TOP' },
    { lin: 'JG' },
    { lin: 'SUPP' },
    { lin: 'ADC' }
  ];
  invocador: Invocador = {
    nombre: '',
    username: '',
    servidor: '',
    liga: '',
    division: '',
    carriles: []
  };
  // , private formBuilder: FormBuilder, private validatorfn: ValidatorFn
  constructor( private _INVOCADORESSERVICES: InvocadoresService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( parametros => {
      this.id = parametros.id;
      if ( this.id !== 'nuevo' ) {
        this._INVOCADORESSERVICES.getInvocador( this.id ).subscribe(invocador => this.invocador = invocador);
      }
    });
    // this.forma = this.formBuilder.group({
    //   lineas: new FormArray([], this.minSelectedCheckboxes(1))
    // });
    // this.lineas = this.getLineas();
    // this.addCheckboxes();
  }
  // private addCheckboxes() {
  //   this.lineas.map((o, i) => {
  //     const control = new FormControl(i === 0); // if first item set to true, else false
  //     (this.forma.controls.lineas as FormArray).push(control);
  //   });
  // }
  // getLineas() {
  //   return [
  //     { tipo: 'MID' },
  //     { tipo: 'TOP' },
  //     { tipo: 'JG' },
  //     { tipo: 'SUPP' },
  //     { tipo: 'ADC' }
  //   ];
  // }
  guardar() {
    console.log(this.invocador);
    if ( this.id === 'nuevo' ) {
      this._INVOCADORESSERVICES.nuevoInvocador(this.invocador ).subscribe(data => {
        this.router.navigate(['/invocador', data.name]);
      },
      error => console.error(error));
    } else {
      this._INVOCADORESSERVICES.actualizarInvocador( this.invocador, this.id ).subscribe(data => {
        console.log(data);
      },
      error => console.error(error));
    }
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/invocador', 'nuevo']);
    forma.reset({});
  }
  // minSelectedCheckboxes(min = 1) {
  //   const validator: ValidatorFn = (formArray: FormArray) => {
  //     const totalSelected = formArray.controls
  //       // get a list of checkbox values (boolean)
  //       .map(control => control.value)
  //       // total up the number of checked checkboxes
  //       .reduce((prev, next) => next ? prev + next : prev, 0);
  //     // if the total is not greater than the minimum, return the error message
  //     return totalSelected >= min ? null : { required: true };
  //   };
  //   return validator;
  // }
}
