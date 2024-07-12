import { IProduct } from "./interface/product";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = 'http://localhost:3000/products'
  constructor(private http:HttpClient) { }
  Get_All_Products=():Observable<any>=>{
    return this.http.get(this.API_URL)
  }
  Get_Products_By_ID=(id:string):Observable<any>=>{
    return this.http.get(this.API_URL+`/${id}`)
  }
  AddProduct=(data:IProduct):Observable<any>=>{
    return this.http.post(this.API_URL,data)
  }
  EditProduct=(id:string,data:IProduct):Observable<any>=>{
    return this.http.put(this.API_URL+`/${id}`,data)
  }
  DeleteProduct=(id:string):Observable<any>=>{
    return this.http.delete(this.API_URL+`/${id}`)
  }
  Search_Product=(keyword:string):Observable<any>=>{
    return this.http.get(this.API_URL+`?name_like=${keyword}`)
  }
}
