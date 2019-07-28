import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvocadorComponent } from './components/invocadores/invocador.component';
import { InvocadoresComponent } from './components/invocadores/invocadores.component';
import { CampeonComponent } from './components/campeon/campeon.component';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'doctores', component: DoctoresComponent,
    canActivate: [ AuthGuardService ] },
    { path: 'invocador/:id', component: InvocadorComponent,
    canActivate: [ AuthGuardService ] },
    { path: 'campeon/:id', component: CampeonComponent,
    canActivate: [ AuthGuardService ] },
    { path: 'invocadores', component: InvocadoresComponent,
    canActivate: [ AuthGuardService ] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});
