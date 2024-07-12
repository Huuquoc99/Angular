import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icategory } from './interface/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  API_URL = 'http://localhost:3000/categorys';
  constructor(private http: HttpClient) {}
  Add_Category = (data: Icategory): Observable<any> => {
      return this.http.post(this.API_URL, data);
  };
  GetAll_Category = (): Observable<any> => {
      return this.http.get(this.API_URL);
  };
  DeleteCategory=(id:string):Observable<any>=>{
    return this.http.delete(this.API_URL+`/${id}`)
  };
  EditCategory=(id:string,data:Icategory):Observable<any>=>{
    return this.http.put(this.API_URL+`/${id}`,data)
  };
  Get_Category_By_ID=(id:string):Observable<any>=>{
    return this.http.get(this.API_URL+`/${id}`)
  }
}
