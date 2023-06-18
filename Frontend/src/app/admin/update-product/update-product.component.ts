import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent {
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductById();
  }

  getProductById() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http
      .get(`http://localhost:5100/products/${productId}`)
      .subscribe((product: any) => {
        this.product = product;
      });
  }

  updateProduct() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http
      .put(`http://localhost:5100/api/products/${productId}`, this.product)
      .subscribe(() => {
        alert('Product updated successfully');
        this.router.navigate(['/adminproducts']);
      });
  }
}
