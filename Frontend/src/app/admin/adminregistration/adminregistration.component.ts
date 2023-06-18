import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css'],
})
export class AdminregistrationComponent {
  constructor(private http: HttpClient, private router: Router) {}
  onAdminCreate(adminregister: { username: string; password: string }) {
    //console.log(registration);

    this.http
      .post('http://localhost:5100/api/admin/register', adminregister)
      .subscribe((response: any) => {
        alert('registered succesfully');
        this.router.navigate(['/adminlogin']);
      });
  }
}
