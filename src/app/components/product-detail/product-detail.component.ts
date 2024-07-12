import { ProductService } from "./../../product.service";
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../interface/product';
import axios from 'axios';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  icons = [
    { stock: '32' },
    { stock: '36' },
    { stock: '74' },
    { stock: '43' },
    { stock: '87' },
  ];
  logos = [
    { image: '../../../assets/image/icon_logo/facebook.png' },
    { image: '../../../assets/image/icon_logo/google.png' },
    { image: '../../../assets/image/icon_logo/whatsapp.png' },
  ];
  constructor(private productService: ProductService) { }
  route = inject(ActivatedRoute);
  product: IProduct = {} as IProduct
  products: IProduct[] = []
  name = 'ads'
  onClick = () => {
    console.log(this.route.snapshot.params['id']);

  }
  async ngOnInit() {
    const productid = this.route.snapshot.params['id']
    const { data } = await axios.get(`http://localhost:3000/products/${productid}`)
    this.product = data;
    const { data:datas } = await axios.get(`http://localhost:3000/products?limit=4`)
    this.products = datas.slice(0, 4);
  }
}
