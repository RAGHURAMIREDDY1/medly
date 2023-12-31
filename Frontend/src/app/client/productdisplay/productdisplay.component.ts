import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css'],
})
export class ProductdisplayComponent {
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http
      .get(`http://localhost:5100/products/${productId}`)
      .subscribe((product) => {
        this.product = product;
      });
  }
  addToCart(productId: string) {
    const userId = localStorage.getItem('userId');
    const cartItem = { productId, userId };

    this.http.post('http://localhost:5100/add-to-cart', cartItem).subscribe(
      () => {
        alert('Added to cart');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
