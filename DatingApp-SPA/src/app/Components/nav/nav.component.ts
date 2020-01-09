import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe( netx => {
      this.alertify.success('Loggin Correct!');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.warning('logged out');
    this.router.navigate(['/home']);
  }
}
