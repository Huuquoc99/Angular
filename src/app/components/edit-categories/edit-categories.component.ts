import { Component } from '@angular/core';
import { Icategory } from '../../interface/category';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../categories.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrl: './edit-categories.component.css'
})
export class EditCategoriesComponent {
  categoryform = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
});
categoryid = this.router.snapshot.params['id'];
categorys: Icategory[] = []; // Correct spelling
route = new Router();
constructor(
    private categoryService: CategoriesService, // Inject CategoryService
    private router: ActivatedRoute
) {}

ngOnInit(): void {
    this.categoryService.GetAll_Category().subscribe((data: Icategory[]) => {
        this.categorys = data;
    });
    this.categoryService.Get_Category_By_ID(this.categoryid).subscribe((data) => {
      console.log(data);
      this.categoryform.controls.name.setValue(data.name);
     
  });
}
async onSubmit() {
  if (this.categoryform.valid) {
      this.categoryService.EditCategory(this.categoryid, this.categoryform.value as Icategory).subscribe((data) => {
          alert('Cập nhật thành công');
          this.route.navigate(['admin/categories']);
      });
  }
}
}
