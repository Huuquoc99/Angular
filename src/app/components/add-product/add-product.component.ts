import { CategoriesService } from "./../../categories.service";
import { Icategory } from "./../../interface/category";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../interface/product';
import { Router } from "@angular/router";
import { ProductService } from "../../product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
 
    productform = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(6)]),
        category: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required, Validators.min(0.1)]),
        image: new FormControl('', [Validators.required]),
    });

    products: IProduct[] = [];
    categorys: Icategory[] = []; // Correct spelling
    route = new Router();
    constructor(
        private productService: ProductService,
        private categoryService: CategoriesService, // Inject CategoryService
    ) {}

    ngOnInit(): void {
        this.categoryService.GetAll_Category().subscribe((data: Icategory[]) => {
            this.categorys = data;
        });
    }

    onSubmit() {
        if (this.productform.valid) {
            this.productService.AddProduct(this.productform.value as IProduct).subscribe((data) => {
                this.products.push(data);
                alert('Thêm sản phẩm thành công');
                this.route.navigate(['admin/products']);
            });
        }
    }
}
