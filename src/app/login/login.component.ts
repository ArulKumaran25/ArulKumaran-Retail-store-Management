import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = 'ArulKumaran';
  password = 'Arul25';
  loginError = false;

  constructor(private router: Router) {}

  login() {
    // Mock login validation
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/sample']); // Navigate to the retail store page
    } else {
      this.loginError = true;
    }
  }
}
