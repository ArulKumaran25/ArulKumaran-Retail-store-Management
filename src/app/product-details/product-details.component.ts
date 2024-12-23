import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product: { imageUrl: string, description: string, inStock: boolean } = { 
    imageUrl: '', 
    description: '', 
    inStock: false 
  };
}
