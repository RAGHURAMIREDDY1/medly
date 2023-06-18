import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http
      .post('http://localhost:5100/api/user/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (response: any) => {
          localStorage.setItem('jwtToken', response.jwtToken);
          localStorage.setItem('userId', response.user._id); // Set the user ID in localStorage
          // localStorage.setItem('user', JSON.stringify(response.user)); // Set the user details in localStorage
          alert('logged in successfully');
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          alert('Invalid details');
        }
      );
  }
}
