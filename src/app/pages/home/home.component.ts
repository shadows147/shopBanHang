import { Component } from '@angular/core';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {ProductModel} from '../../models/product.model';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {CardComponent} from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  productsListHome: ProductModel[] = []
    constructor(
      private router:Router,
      private productService:ProductService
    ) {
      console.log(this.productService.productList)
      this.productsListHome = this.productService.productList;
    }







}
