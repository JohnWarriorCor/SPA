import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvocadorComponent } from './components/invocadores/invocador.component';
import { InvocadoresComponent } from './components/invocadores/invocadores.component';
import { CampeonComponent } from './components/campeon/campeon.component';
import { DoctoresComponent } from './components/doctores/doctores.component';




const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'doctores', component: DoctoresComponent },
    { path: 'invocador/:id', component: InvocadorComponent },
    { path: 'campeon/:id', component: CampeonComponent },
    { path: 'invocadores', component: InvocadoresComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});
