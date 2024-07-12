import { ProductService } from "./../../product.service";
import { IProduct } from "./../../interface/product";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Icategory } from "../../interface/category";
import { CategoriesService } from "../../categories.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private categoryService: CategoriesService,
) {}
productform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0.1)]),
    image: new FormControl('', [Validators.required]),
});

productid = this.router.snapshot.params['id'];
categorys: Icategory[] = [];
route = new Router();
async ngOnInit() {
    this.categoryService.GetAll_Category().subscribe((data) => {
        this.categorys = data;
    });
    this.productService.Get_Products_By_ID(this.productid).subscribe((data) => {
        console.log(data);
        this.productform.controls.name.setValue(data.name);
        this.productform.controls.category.setValue(data.category);
        this.productform.controls.price.setValue(data.price);
        this.productform.controls.image.setValue(data.image);
    });
}
async onSubmit() {
    if (this.productform.valid) {
        this.productService.EditProduct(this.productid, this.productform.value as IProduct).subscribe((data) => {
            alert('Cập nhật thành công');
            this.route.navigate(['admin/products']);
        });
    }
}
}
