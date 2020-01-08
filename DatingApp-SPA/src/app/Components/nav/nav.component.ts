import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { AlertifyService } from 'src/app/Services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService,
              private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe( netx => {
      this.alertify.success('Loggin Correct!');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.warning('logged out');
  }
}
