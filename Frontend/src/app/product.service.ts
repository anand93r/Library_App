import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }
  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }


  addProducts(item: any) {

    return this.http.post('http://localhost:3000/insert', { item }).subscribe(data => { console.log(data) });
  }
}
