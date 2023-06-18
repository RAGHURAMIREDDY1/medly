import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css'],
})
export class AdminproductsComponent implements OnInit {
  products: any[];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http
      .get('http://localhost:5100/api/products')
      .subscribe((data: any[]) => {
        this.products = data;
        const token = localStorage.getItem('adminToken');
        if (!token) {
          alert('please login to view admin dashboard');
          this.router.navigate(['/adminlogin']);
        }
      });
  }

  deleteProduct(productId: string) {
    const adminToken = localStorage.getItem('adminToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${adminToken}`,
      }),
    };

    this.http
      .delete(`http://localhost:5100/products/${productId}`, httpOptions)
      .subscribe(
        (response) => {
          console.log(response);
          // remove deleted product from this.products
          this.products = this.products.filter(
            (prod) => prod._id !== productId
          );
          alert('Product deleted');
        },
        (error) => console.error(error)
      );
  }

  updateProduct(productId: string) {
    this.router.navigate(['/updateproduct', productId]);
  }
}
