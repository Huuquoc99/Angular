import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../product.service";
import { IProduct } from "./../../interface/product";
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    const keyword = this.route.snapshot.queryParams['keyword'];
    console.log(keyword);
    if (keyword) {
      this.productService.Search_Product(keyword).subscribe((data) => {
        this.products = data;
      });
    };
  }
}
