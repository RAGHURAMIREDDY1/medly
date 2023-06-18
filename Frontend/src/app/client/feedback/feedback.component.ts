import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  user: string;
  message: string;
  submitted: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const feedback = { user: this.user, message: this.message };
    this.http.post('http://localhost:5100/user/feedback', feedback).subscribe(
      (res) => {
        console.log(res);
        this.submitted = true;
        alert('Thank you for your feedback!');
        this.router.navigate(['/']);
      },
      (err) => {
        console.error(err);
        alert('There was an error submitting your feedback.');
      }
    );
  }
}
