import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
interface User {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css'],
})
export class UsermanagementComponent {
  users: User[] = [];

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.http.get<User[]>('http://localhost:5100/api/users').subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    );
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('please login to view admin dashboard');
      this.route.navigate(['/adminlogin']);
    }
  }
}
