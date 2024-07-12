import { ProductService } from "./../../product.service";

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Icategory } from '../../interface/category';
import { Router } from '@angular/router';
import { CategoriesService } from "../../categories.service";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categoryform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
});

categorys: Icategory[] = []; // Correct spelling
route = new Router();
constructor(
    private categoryService: CategoriesService, // Inject CategoryService
) {}

ngOnInit(): void {
    this.categoryService.GetAll_Category().subscribe((data: Icategory[]) => {
        this.categorys = data;
    });
}

onSubmit() {
    if (this.categoryform.valid) {
        this.categoryService.Add_Category(this.categoryform.value as Icategory).subscribe((data) => {
            this.categorys.push(data);
            alert('Thêm danh mục thành công');
            this.route.navigate(['admin/categories']);
        });
    }
}
onDelete(id: any) {
  if (confirm('Bạn có thật sự muốn xóa ?')) {
      this.categoryService.DeleteCategory(id).subscribe(() => {
          alert('Xóa thành công');
          this.categorys = this.categorys.filter((category) => category.id !== id);
          this.route.navigate(['admin/categories']);
      });
  }
}
}
