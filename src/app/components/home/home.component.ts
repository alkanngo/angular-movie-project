import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: IProduct[];

  selectedProduct: IProduct;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getDataList().subscribe(
      (data = []) => {
        this.products = data;
      }
    );
  }

  onSelect(product: IProduct): void {
    this.selectedProduct = product;
  }
}
