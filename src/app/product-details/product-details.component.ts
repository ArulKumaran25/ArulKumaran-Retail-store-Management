import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductListComponent {
  products = [
    { name:'Curd',imageUrl: 'assets/products/curd.jpg', description: 'Healthy and delicious Curd, perfect for any time of the day.', inStock: true },
    { name: 'Milk',imageUrl: 'assets/milk.jpg', description: 'A bottle of fresh and organic milk sourced directly from farms.', inStock: true },
    { name:'Butter',imageUrl: 'assets/butter.jpg', description: 'Pure and natural butter, made from fresh cream.', inStock:true },
    { name:'Ghee', imageUrl: 'assets/products/ghee.jpg', description: 'Pure and aromatic ghee, crafted for rich flavor and health benefits.', inStock:true },
    { name:'Cheese',imageUrl: 'assets/cheese.jpg', description: 'Premium quality cheese with a rich and creamy texture.', inStock:true },
    { name:'Paneer',imageUrl: 'assets/products/paneer.jpg', description: 'Premium quality and naturally made with a rich and creamy texture.', inStock: true }
  ];

  itemsPerPage = 3;
  currentPage = 0; 

  get visibleProducts(){
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

  nextPage(){
    if (this.hasNextPage()) {
      this.currentPage++;
    }
  }
  prevPage(){
    if(this.currentPage>0) {
      this.currentPage--;
    }
  }
  hasNextPage(){
    return (this.currentPage + 1)*this.itemsPerPage <this.products.length;
  }
}
