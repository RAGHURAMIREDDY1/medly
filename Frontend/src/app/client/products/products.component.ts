import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[];
  filteredProducts: any[];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('http://localhost:5100/api/products')
      .subscribe((data: any[]) => {
        this.products = data;
        this.filteredProducts = data;
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

  onSearch(event) {
    this.searchTerm = event.target.value;
    if (this.searchTerm.trim() !== '') {
      this.filteredProducts = this.products.filter((product) =>
        product.productname
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}
