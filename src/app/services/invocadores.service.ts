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
      nombre: 'Dra. Rostenkowski',
      bio: 'Neuropediatra',
      img: 'assets/img/doc1.jpg',
      aparicion: 'Cel. 310 456 9089',
      casa: 'Marvel'
    },
    {
      idx : 1,
      nombre: 'Dr. Cooper',
      bio: 'Neurologo',
      img: 'assets/img/doc2.jpg',
      aparicion: 'Cel. 310 456 9089',
      casa: 'DC'
    },
    {
      idx : 2,
      nombre: 'Dra. Fowler',
      bio: 'Neurologa',
      img: 'assets/img/doc3.jpg',
      aparicion: 'Cel. 310 456 9089',
      casa: 'Marvel'
    },
    {
      idx : 3,
      nombre: 'Dr. Hofstadter',
      bio: 'Neurofisiologo clínico',
      img: 'assets/img/doc4.jpg',
      aparicion: 'Cel. 310 456 9089',
      casa: 'Marvel'
    },
    {
      idx : 4,
      nombre: 'Dr. Koothrappali',
      bio: 'Neurocirujano',
      img: 'assets/img/doc5.jpg',
      aparicion: 'Cel. 310 456 9089',
      casa: 'DC'
    },
    {
      idx : 5,
      nombre: 'Dr. Wolowitz',
      bio: 'Neurologo',
      img: 'assets/img/doc6.jpg',
      aparicion: 'Cel. 310 456 9089',
      casa: 'Marvel'
    },
    {
      idx : 6,
      nombre: 'Dr. Murphy',
      bio: 'Neuropediatra',
      img: 'assets/img/doc7.jpg',
      aparicion: 'Cel. 310 456 9089',
      casa: 'Marvel'
    },
    {
      idx : 7,
      nombre: 'Dra. Browne',
      bio: 'Neurologa',
      img: 'assets/img/doc8.jpg',
      aparicion: 'Cel. 310 456 9089',
      casa: 'Marvel'
    },
    {
      idx : 8,
      nombre: 'Dr. Glassman',
      bio: 'Psiquiatra',
      img: 'assets/img/doc9.jpg',
      aparicion: 'Cel. 310 456 9089',
      casa: 'Marvel'
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
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
