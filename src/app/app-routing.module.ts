import { AdminComponent } from "./layout/admin/admin.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductComponent } from "./components/product/product.component";
import { HomeComponent } from "./components/home/home.component";
import { ClientComponent } from "./layout/client/client.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from "./Guards/admin.guard";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { CategoryComponent } from "./components/category/category.component";
import { ListProductComponent } from "./components/list-product/list-product.component";
import { HomeadminComponent } from "./layout/homeadmin/homeadmin.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { SearchComponent } from "./components/search/search.component";
import { EditCategoriesComponent } from "./components/edit-categories/edit-categories.component";

const routes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'search', component: SearchComponent },
    ]
  },
  {
    path: 'admin', component: HomeadminComponent, canActivate: [adminGuard], children: [
      {path: '', component: ListProductComponent,},
      {path: 'categories',component:CategoryComponent},
      {path: 'products',component:ListProductComponent},
      {path: 'products/edit/:id',component:EditProductComponent},
      {path: 'categories/edit/:id',component:EditCategoriesComponent},
      {path: 'products/add',component:AddProductComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
