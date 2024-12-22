import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/sample']); 
    } else {
      this.loginError = true;
    }
  }
}
