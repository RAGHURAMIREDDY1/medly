import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      alert('Please log in to view the profile');
      this.router.navigate(['/login']);
    }
    const userId = localStorage.getItem('userId');
    this.http.get(`http://localhost:5100/users/${userId}`).subscribe(
      (response: any) => {
        this.user = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
