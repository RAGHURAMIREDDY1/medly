import { Component } from '@angular/core';

@Component({
  selector: 'app-clientsidebar',
  templateUrl: './clientsidebar.component.html',
  styleUrls: ['./clientsidebar.component.css'],
})
export class ClientsidebarComponent {
  onLogout() {
    localStorage.removeItem('jwtToken');
    alert('logged out successfully');
  }
}
