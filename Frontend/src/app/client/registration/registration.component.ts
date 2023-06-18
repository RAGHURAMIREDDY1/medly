import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  title = 'AngularHttpRequest';

  constructor(private http: HttpClient, private router: Router) {}
  onRegistrationCreate(registration: {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
  }) {
    //console.log(registration);

    this.http
      .post('http://localhost:5100/api/user/register', registration)
      .subscribe((res) => {
        alert('Registered Successfully');
        this.router.navigate(['/login']);
      });
  }
}
