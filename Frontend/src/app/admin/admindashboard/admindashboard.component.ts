import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent {
  revenue: number = 0;
  orders: number = 0;
  users: number = 0;

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.http
      .get<{ revenue: number; orders: number; users: number }>(
        'http://localhost:5100/api/admin/dashboard'
      )
      .subscribe(
        (data) => {
          this.revenue = data.revenue;
          this.orders = data.orders;
          this.users = data.users;
        },
        (error) => {
          console.error(error);
        }
      );

    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('please login to view admin dashboard');
      this.route.navigate(['/adminlogin']);
    }
  }
  logOut() {
    localStorage.removeItem('adminToken');
    alert('logged out successfully');
  }
}
