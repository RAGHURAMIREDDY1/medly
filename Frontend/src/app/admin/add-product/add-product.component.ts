import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  product = {
    productname: '',
    description: '',
    price: '',
    brand: '',
    image: '',
    category: '',
    countInStock: '',
    rating: '',
    quantity: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('please login to view admin dashboard');
      this.router.navigate(['/adminlogin']);
    }
  }
  onSubmit() {
    this.http
      .post<any>('http://localhost:5100/api/admin/add-product', this.product)
      .subscribe(
        (data) => {
          console.log(data);
          alert('Product added successfully!');
          this.router.navigate(['/adminproducts']);
        },
        (error) => {
          console.log(error);
          alert('Error adding product!');
        }
      );
  }
}
