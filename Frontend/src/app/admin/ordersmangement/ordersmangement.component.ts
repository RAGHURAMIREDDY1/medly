import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Order {
  _id: string;
  firstname: string;
  lastname: string;
  user: string;
  phone: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  status: string;
  paymentMethod: string;
  address: string;
  createdAt: Date;
}

@Component({
  selector: 'app-ordersmangement',
  templateUrl: './ordersmangement.component.html',
  styleUrls: ['./ordersmangement.component.css'],
})
export class OrdersmangementComponent {
  orders: Order[] = [];
  orderStatusList: string[] = [
    'Pending',
    'Confirmed',
    'Shipped',
    'Delivered',
    'Canceled',
  ];

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    this.getOrders();
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Please login to view admin dashboard');
      this.route.navigate(['/adminlogin']);
    }
  }

  getOrders() {
    this.http.get<Order[]>('http://localhost:5100/api/admin/orders').subscribe(
      (response) => {
        this.orders = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateOrderStatus(order: Order) {
    this.http
      .put<Order>(`http://localhost:5100/api/orders/${order._id}`, {
        status: order.status,
      })
      .subscribe(
        (response) => {
          console.log(`Order ${order._id} status updated`);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
