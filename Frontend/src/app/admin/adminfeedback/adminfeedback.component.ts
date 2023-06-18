import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminfeedback',
  templateUrl: './adminfeedback.component.html',
  styleUrls: ['./adminfeedback.component.css'],
})
export class AdminfeedbackComponent {
  feedback: any;

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5100/admin/feedback')
      .subscribe((data: any) => {
        this.feedback = data;
      });
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('please login to view admin dashboard');
      this.route.navigate(['/adminlogin']);
    }
  }
}
