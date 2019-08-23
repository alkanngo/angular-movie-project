import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: IProduct;

  constructor(
    private productService: ProductService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    
  }

  getProduct(id:number){
    this.productService.getData(id).subscribe(
      (data) => {
        this.product = data;
      }
    );
  }

  

}
