import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IOrder } from 'src/app/interfaces/iorder';
import { IOrderItem } from 'src/app/interfaces/iorderitem';
import { IOrderSum } from 'src/app/interfaces/iordersum';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

import * as moment from 'moment';
import { IProduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService , 
    private fb: FormBuilder, 
    private dataService: ProductService
    ) { }

  ngOnInit() {
  }

  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  totalPrice(): number {
    return this.cartService.getCartItems().reduce((cost, movie) => cost + movie.price, 0);
  }

  totalAmount(): number {
    return this.cartService.getCartItems().length;
  }

  sendOrder() {
    const userEmail = this.profileForm.get('email').value;
    const cartItems: IProduct[] = this.cartService.getCartItems();
    const orderItems: IOrderItem[] = this.cartService.toOrderItems(cartItems);
    this.dataService.createOrder(orderItems, this.totalPrice(), 'PayPal', 7, userEmail, moment(Date.now()).format('YYYY-MM-DD'), 0)
      .subscribe(() => {

        this.cartService.clearCart();
      }, (error) => {
        alert('Something went wrong please try again in a moment' + error.toString());
      });
  }
}
