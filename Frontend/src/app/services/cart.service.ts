import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:5100/add-to-cart';

  constructor(private http: HttpClient) {}

  addToCart(productId: string, quantity: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { productId, quantity });
  }

  deleteCartItem(id: string): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:5100/api/delete-from-cart/${id}`
    );
  }

  deleteAllCartItems(): Observable<any> {
    return this.http.delete<any>('http://localhost:5100/api/delete-cart-items');
  }

  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5100/api/cart-items');
  }
}
