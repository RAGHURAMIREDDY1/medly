import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getCartItems();
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      alert('Please log in to view the cart');
      this.router.navigate(['/login']);
    }
  }

  getCartItems() {
    const userId = localStorage.getItem('userId');
    this.http.get<Product[]>(`http://localhost:5100/cart/${userId}`).subscribe(
      (res) => {
        this.cartItems = res;
      },
      (err) => console.error(err)
    );
  }

  removeFromCart(productId: string) {
    if (confirm('Are you sure you want to remove this item from your cart?')) {
      this.http
        .delete(`http://localhost:5100/remove-from-cart/${productId}`)
        .subscribe(
          (res) => {
            console.log(res);
            this.getCartItems();
          },
          (err) => console.error(err)
        );
    }
  }

  increaseQuantity(item: Product) {
    item.quantity++;
    this.updateCartItem(item);
  }

  decreaseQuantity(item: Product) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCartItem(item);
    }
  }

  updateCartItem(item: Product) {
    this.http
      .put(`http://localhost:5100/api/update-cart/${item._id}`, item)
      .subscribe(
        (res) => {
          console.log(res);
          this.getCartItems();
        },
        (err) => console.error(err)
      );
  }

  calculateSubtotal() {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  calculateTotal() {
    return this.calculateSubtotal();
  }
}
