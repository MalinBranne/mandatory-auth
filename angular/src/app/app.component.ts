import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) { }

  // loggedIn = this.authService.loggedIn;
  loggedIn = false;
  friends;
  user;
  myToken;



  login(f) {
    console.log(f.value);
    this.loggedIn = true;
    this.authService.login(f);
    this.user = this.authService.user;
    this.myToken = this.authService.myToken;
    // login user using authService.
  }




  logout() {

    this.authService.logout();
    this.user = this.authService._user;
    this.myToken = this.authService.myToken;
    // logout user using authService.
  }

  testApi() {
    this.authService.getResource('friends')
    // test API access by invoking getResource on authService.
  }
}
