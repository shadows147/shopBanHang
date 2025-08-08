import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {ProductModel} from '../../models/product.model';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-card',
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatCardImage,
        MatCardSubtitle,
        MatCardTitle
    ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor(
    private router: Router,
    private productService: ProductService
  ) {
  }
  @Input() product!:ProductModel

  navigatetoDetail(id: number) {
    this.router.navigate(['/detail', id]).then();
  }

  addToCart(id: number) {
    this.productService.addProductToCart(id)
  }
}
