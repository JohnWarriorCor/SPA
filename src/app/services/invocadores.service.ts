import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Invocador } from '../interfaces/invocador.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvocadoresService {

  private campeones: Campeon[] = [
    {
      idx : 0,
      doc: 'Dra. Rostenkowski',
      nombre: 'Sophie',
      apellido: 'Rostenkowski',
      genero: 'Femenino',
      sede: 'Hospital Universitario',
      esp: 'Neuropediatra',
      img: 'assets/img/doc1.jpg',
      telefono: 'Cel. 310 456 9089',
    },
    {
      idx : 1,
      doc: 'Dr. Cooper',
      nombre: 'Sheldon',
      apellido: 'Cooper',
      genero: 'Masculino',
      sede: 'Hospital Universitario',
      esp: 'Neurologo',
      img: 'assets/img/doc2.jpg',
      telefono: 'Cel. 310 456 9089',
    },
    {
      idx : 2,
      doc: 'Dra. Fowler',
      nombre: 'Amy',
      apellido: 'Fowler',
      genero: 'Femenino',
      sede: 'Hospital Universitario',
      esp: 'Neurologa',
      img: 'assets/img/doc3.jpg',
      telefono: 'Cel. 310 456 9089',
    },
    {
      idx : 3,
      doc: 'Dr. Hofstadter',
      nombre: 'Leonard',
      apellido: 'Hofstadter',
      genero: 'Masculino',
      sede: 'Hospital Universitario',
      esp: 'Neurofisiologo clínico',
      img: 'assets/img/doc4.jpg',
      telefono: 'Cel. 310 456 9089',
    },
    {
      idx : 4,
      doc: 'Dr. Koothrappali',
      nombre: 'Rahj',
      apellido: 'Koothrappali',
      genero: 'Masculino',
      sede: 'Hospital Universitario',
      esp: 'Neurocirujano',
      img: 'assets/img/doc5.jpg',
      telefono: 'Cel. 310 456 9089',
    },
    {
      idx : 5,
      doc: 'Dr. Wolowitz',
      nombre: 'Howard',
      apellido: 'Wolowitz',
      genero: 'Masculino',
      sede: 'Hospital Universitario',
      esp: 'Neurologo',
      img: 'assets/img/doc6.jpg',
      telefono: 'Cel. 310 456 9089',
    },
    {
      idx : 6,
      doc: 'Dr. Murphy',
      nombre: 'Shawm',
      apellido: 'Murphy',
      genero: 'Masculino',
      sede: 'Hospital Universitario',
      esp: 'Neuropediatra',
      img: 'assets/img/doc7.jpg',
      telefono: 'Cel. 310 456 9089'
    },
    {
      idx : 7,
      doc: 'Dra. Browne',
      nombre: 'Browne',
      apellido: 'Emily',
      genero: 'Femenino',
      sede: 'Hospital Universitario',
      esp: 'Neurologa',
      img: 'assets/img/doc8.jpg',
      telefono: 'Cel. 310 456 9089',
    },
    {
      idx : 8,
      doc: 'Dr. Glassman',
      nombre: 'Erik',
      apellido: 'Glassman',
      genero: 'Masculino',
      sede: 'Hospital Universitario',
      esp: 'Psiquiatra',
      img: 'assets/img/doc9.jpg',
      telefono: 'Cel. 310 456 9089',
    }
  ];

  invocadoresURL = 'https://invocadoreslol-1c8df.firebaseio.com/invocadores.json';
  invocadorURL = 'https://invocadoreslol-1c8df.firebaseio.com/invocadores/';

  constructor( private http: Http) { }

  nuevoInvocador( invocador: Invocador) {
    const body = JSON.stringify(invocador);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.invocadoresURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarInvocador( invocador: Invocador, key$: string ) {
    const body = JSON.stringify(invocador);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.invocadorURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      console.log(res.json());
      return res.json();
    }));

  }
  getInvocador(key$: string) {
    const url = `${ this.invocadorURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getInvocadores() {
    return this.http.get( this.invocadoresURL ).pipe(map(res => res.json()));
  }
  borrarInvocador( key$: string) {
    const url = `${ this.invocadorURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
  getCampeones(): Campeon[] {
    return this.campeones;
  }

  getCampeon( idx: string ) {
    return this.campeones[idx];
  }

  buscarHeroes( termino: string ): Campeon[] {

    const campeonesArr: Campeon[] = [];
    termino = termino.toLowerCase();

    for ( let i = 0; i < this.campeones.length; i ++ ) {

      const campeon = this.campeones[i];

      const nombre = campeon.nombre.toLowerCase();

      if ( nombre.indexOf( termino ) >= 0  ) {
        campeon.idx = i;
        campeonesArr.push( campeon );
      }

    }

    return campeonesArr;

  }
}


export interface Campeon {
  idx?: number;
  doc: string;
  nombre: string;
  apellido: string;
  genero: string;
  sede: string;
  esp: string;
  img: string;
  telefono: string;
}
