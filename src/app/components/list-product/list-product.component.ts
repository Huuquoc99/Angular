import { Router } from "@angular/router";
import { ProductService } from "../../product.service";
import { IProduct } from "./../../interface/product";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {

  products: IProduct[] = [];
  constructor(private productService: ProductService, private router: Router) {}
  
  ngOnInit() {
    this.productService.Get_All_Products().subscribe((data) => {
        this.products = data;
    });
}

onDelete(id: any) {
    if (confirm('Bạn có thật sự muốn xóa ?')) {
        this.productService.DeleteProduct(id).subscribe(() => {
            alert('Xóa thành công');
            this.products = this.products.filter((product) => product.id !== id);
            this.router.navigate(['admin/products']);
        });
    }
}
}
