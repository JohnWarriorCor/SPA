import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InvocadoresComponent } from './components/invocadores/invocadores.component';
import { KeysPipe } from './pipes/keys.pipe';
import { InvocadorComponent } from './components/invocadores/invocador.component';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTING } from './app.routes';
import { InvocadoresService } from './services/invocadores.service';
import { HttpClientModule } from '@angular/common/http';
import { CampeonComponent } from './components/campeon/campeon.component';
import { CampeonTarjetaComponent } from './components/campeon-tarjeta/campeon-tarjeta.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctoresComponent } from './components/doctores/doctores.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InvocadoresComponent,
    KeysPipe,
    InvocadorComponent,
    CampeonComponent,
    CampeonTarjetaComponent,
    FooterComponent,
    DoctoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    InvocadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
