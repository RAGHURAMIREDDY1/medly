import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor() {
    // Check if the user is logged in
    this.isLoggedIn = localStorage.getItem('jwtToken') !== null;
  }

  onLogout() {
    localStorage.removeItem('jwtToken');
    alert('Logged out successfully');
    // Update the isLoggedIn flag
    this.isLoggedIn = false;
  }
}
