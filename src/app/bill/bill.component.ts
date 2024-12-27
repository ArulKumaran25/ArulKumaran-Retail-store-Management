import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service'; // Import the service

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  cart: any[] = [];
  totalBill: number = 0;

  constructor(private cartService: CartService) {} 

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.totalBill = this.cartService.getTotalBill();
  }
}
