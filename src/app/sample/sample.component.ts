import { Component } from '@angular/core';
import { CartService } from '../shared/cart.service'; // Import the service

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  items = [
    { id: 5001, name: 'Curd', price: 20 },
    { id: 5002, name: 'Milk', price: 25 },
    { id: 5003, name: 'Butter', price: 30 },
    { id: 5004, name: 'Ghee', price: 40, discount: 20 },
    { id: 5005, name: 'Paneer', price: 50, discount: 20 },
  ];
  cart: {
    id: number;
    quantity: number;
    name: string;
    price: number;
    total: number;
  }[] = [];
  selectedItem: any = null;
  quantity: number = 1;
  totalBill: number = 0;

  isInvalidQuantity: boolean = false;

  constructor(private cartService: CartService) {} // Inject the service

  addToCart() {
    if (this.quantity <= 0) {
      this.isInvalidQuantity = true;
      return;
    } else {
      this.isInvalidQuantity = false;
    }

    if (this.selectedItem && this.quantity > 0) {
      const discount = this.selectedItem.discount || 0;
      const priceAfterDiscount =
        this.selectedItem.price * (1 - discount / 100);
      const total = priceAfterDiscount * this.quantity;

      this.cart.push({
        id: this.selectedItem.id,
        quantity: this.quantity,
        name: this.selectedItem.name,
        price: this.selectedItem.price,
        total: total,
      });
      this.totalBill += total;
      this.selectedItem = null;
      this.quantity = 1;
    }
  }

  resetCart() {
    this.cart = [];
    this.totalBill = 0;
  }

  navigateToBill() {
    // Set the cart and total bill in the service
    this.cartService.setCart(this.cart);
    this.cartService.setTotalBill(this.totalBill);
  }
}
