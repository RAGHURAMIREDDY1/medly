import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  firstname: string;
  lastname: string;
  phone: string;
  payment: string;
  address: string;
  productId: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    const userId = localStorage.getItem('userId');
    const data = {
      firstname: this.firstname,
      lastname: this.lastname,
      user: userId,
      phone: this.phone,
      productName: this.productId,
      quantity: 1,
      paymentMethod: this.payment,
      address: this.address,
      productId: this.route.snapshot.paramMap.get('id'),
    };

    this.http.post('http://localhost:5100/orders', data).subscribe(
      (response) => {
        console.log(response);
        // show success message to user
        alert('order details successfully');
        this.router.navigate(['/feedback']);
      },
      (error) => {
        console.error(error);
        // show error message to user
      }
    );
  }
}
