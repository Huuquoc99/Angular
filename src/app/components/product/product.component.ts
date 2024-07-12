import { IProduct } from "./../../interface/product";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  menus=[
    {name: 'All Categories',stock:'10',image:'../../../assets/image/icon_logo/Frame 108.png'},
    {name: 'Tablet',stock:'5',image:'../../../assets/image/icon_logo/Frame 109.png'},
    {name: 'Laptop',stock:'10',image:'../../../assets/image/icon_logo/Frame 109.png'},
    {name: 'Headphones',stock:'5',image:'../../../assets/image/icon_logo/Frame 109.png'},
    {name: 'Console',stock:'10',image:'../../../assets/image/icon_logo/Frame 109.png'},
    {name: 'Other',stock:'5',image:'../../../assets/image/icon_logo/Frame 109.png'},
  ];
  constructor(private productService: ProductService){}
 
  products:IProduct[] = []
  ngOnInit(){
    this.productService.Get_All_Products().subscribe(data=>{
      this.products = data
  })
  }
 
}
