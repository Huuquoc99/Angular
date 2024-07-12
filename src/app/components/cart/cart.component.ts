import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  carts=[
    {image:'../../../assets/image/product/product_category2.svg',name:'Playgame1',price:'$299.99',color:'red',size:'23'},
    {image:'../../../assets/image/product/product_category1.svg',name:'Playgame2',price:'$399.99',color:'blue',size:'25'},
    {image:'../../../assets/image/product/product_category3.svg',name:'Playgame3',price:'$499.99',color:'black',size:'26'},
  ]
}
