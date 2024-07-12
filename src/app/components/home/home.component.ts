import { IProduct } from "../../interface/product";
import { ProductService } from "./../../product.service";
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slideIndex = 1;
  banners = [
    {
      title1: 'CanonRefurbished EOS',
      title2: '80D EF-S 18-135mm f/3.5-5.6',
      image: 'assets/image/product/product_banner.svg',
      status: 'Only $89'
    },
    {
      title1: 'EOS Lens Kit',
      title2: 'R5 C RF24-105mm F2.8',
      image: 'assets/image/product/product_banner1.jpg',
      status: '50% off'
    },
    {
      title1: 'Refurbished EOS Lens Kit',
      title2: 'R50 RF-S18-45mm F4.5-6.3',
      image: 'assets/image/product/product_banner2.jpg',
      status: 'New'
    }
  ];
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.showNextSlide();
    }, 3000); // Change slide every 3 seconds
    this.productService.Get_All_Products().subscribe(data=>{
      this.products = data
  })
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  showNextSlide() {
    this.slideIndex++;
    if (this.slideIndex > this.banners.length) {
      this.slideIndex = 1;
    }
  }
  constructor(private productService: ProductService){}
 
  products:IProduct[] = []
 
  
  }

