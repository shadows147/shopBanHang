import { Component } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(public productService: ProductService) {

  }



}
