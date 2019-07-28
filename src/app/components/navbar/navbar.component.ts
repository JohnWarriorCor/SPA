import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  profile: any;

  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }


  login() {
    this.auth.login();
  }

  salir() {
    this.auth.logout();
  }
  ngOnInit() {

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }

  }
}
