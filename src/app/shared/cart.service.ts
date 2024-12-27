import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
  }[] = [];

  private totalBill: number = 0;

  // Add items to the cart
  setCart(cart: any[]) {
    this.cart = cart;
  }

  // Retrieve cart items
  getCart() {
    return this.cart;
  }

  // Set the total bill
  setTotalBill(total: number) {
    this.totalBill = total;
  }

  // Get the total bill
  getTotalBill() {
    return this.totalBill;
  }
}
