import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductListComponent {
  products = [
    {
      name: 'Curd',
      imageUrl: 'assets/products/curd.jpg',
      description: 'Healthy and delicious Curd, perfect for any time of the day.',
      inStock: true
    },
    {
      name: 'Milk',
      imageUrl: 'assets/milk.jpg',
      description: 'A bottle of fresh and organic milk sourced directly from farms.',
      inStock: true
    },
    {
      name: 'Butter',
      imageUrl: 'assets/butter.jpg',
      description: 'Pure and natural butter, made from fresh cream.',
      inStock: true
    },
    {
      name: 'Ghee',
      imageUrl: 'assets/products/ghee.jpg',
      description: 'Pure and natural ghee, made from fresh cream.',
      inStock: true
    },
    {
      name: 'Cheese',
      imageUrl: 'assets/cheese.jpg',
      description: 'Premium quality cheese with a rich and creamy texture.',
      inStock: false
    },
    {
      name: 'Paneer',
      imageUrl: 'assets/products/paneer.jpg',
      description: 'Premium quality and naturally made with a rich and creamy texture.',
      inStock: true
    }
  ];

  currentPage: number = 1;
  productsPerPage: number = 3;

  // Get the products to display on the current page
  get displayedProducts() {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    return this.products.slice(startIndex, startIndex + this.productsPerPage);
  }

  // Go to the next page
  nextPage() {
    if ((this.currentPage * this.productsPerPage) < this.products.length) {
      this.currentPage++;
    }
  }

  // Go to the previous page
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
