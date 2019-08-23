import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { IOrderSum } from 'src/app/interfaces/iordersum';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dataService: ProductService, private cartService: CartService) { }

  allOrders: IOrderSum[];

  ngOnInit() {
    this.fetchedOrders();
  }

  fetchedOrders() {
    this.dataService.getAllOrders().subscribe(listOfOrders => {
      this.allOrders = listOfOrders;
    });
  }
}
