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
      imageUrl:'src/assets/products/curd.jpg',
      description: 'Healthy and delicious Curd, perfect for any time of the day.',
      inStock: true
    },
  
    {
      name:'Milk',
      imageUrl:'src/assets/products/milk.jpg',
      description: 'A bottle of fresh and organic milk sourced directly from farms.',
      inStock: true
    },
   
    {
      name:'Butter',
      imageUrl:'assets/butter.jpg',
      description:'Pure and natural butter, made from fresh cream.',
      inStock: true
    },
    {
      name:'Ghee',
      imageUrl:'',
      description:'',
      inStock:true
   },
    {
      name:'Cheese',
      imageUrl:'assets/cheese.jpg',
      description:'Premium quality cheddar cheese with a rich and creamy texture.',
      inStock: false
    },
    {
      
    }
  ];
}
