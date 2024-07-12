import { CategoriesService } from "./../../categories.service";
import { Component } from '@angular/core';
import { Icategory } from '../../interface/category';
import { IProduct } from '../../interface/product';
import { ProductService } from '../../product.service';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchForm = new FormGroup({
    keyword: new FormControl('', [Validators.required]),
});
categorys: Icategory[] = []; // Correct spelling
products: IProduct[] = [];
constructor(
    private productService: ProductService,
    private categoryService: CategoriesService, // Inject CategoryService
    private router: Router,
) {}
ngOnInit(): void {
    this.categoryService.GetAll_Category().subscribe((data: Icategory[]) => {
        this.categorys = data;
    });
}
  onSearch = () => {
    const keyword = this.searchForm.controls.keyword.value;
    if (keyword?.trim()) {
        this.router.navigate(['search'], {
            queryParams: { keyword: keyword },
        });
    }
    if (keyword?.trim()) {
        window.location.href = `/search?keyword=${keyword}`;
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm');
    }
};
}
