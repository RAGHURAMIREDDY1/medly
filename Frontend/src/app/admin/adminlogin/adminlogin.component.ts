import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css'],
})
export class AdminloginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onAdminLogin(adminlogin: { username: string; password: string }) {
    this.http
      .post<{ token: string }>(
        'http://localhost:5100/api/admin/login',
        adminlogin
      )
      .subscribe(
        (response) => {
          localStorage.setItem('adminToken', response.token);
          alert('Logged in successfully');
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error(error);
          alert('Invalid login credentials');
        }
      );
  }
}
