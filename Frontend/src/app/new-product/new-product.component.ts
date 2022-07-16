import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title: String = "Add Book";
  productItem = new ProductModel(0, "", "", "", "", "");


  constructor(public productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {

  }

  NewProduct() {
    this.productService.addProducts(this.productItem);
    alert("New Product Added");
    this.router.navigate(['/']);
  }


}
