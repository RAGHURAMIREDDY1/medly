import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  orders: any[] = [];
  ordersPending: any[] = [];
  ordersDelivered: any[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    this.http.get(`http://localhost:5100/my-orders/${userId}`).subscribe(
      (response: any[]) => {
        this.orders = response;
        this.ordersPending = this.orders.filter(
          (order) => order.status === 'Pending'
        );
        this.ordersDelivered = this.orders.filter(
          (order) => order.status === 'Delivered'
        );
      },
      (error) => {
        console.error(error);
        // show error message to user
      }
    );
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      alert('Please log in to view the orders');
      this.router.navigate(['/login']);
    }
  }
}
