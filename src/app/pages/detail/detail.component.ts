import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  productDetail!: ProductModel
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    let {id} = this.activateRoute.snapshot.params;
    console.log(id);
    this.productDetail= this.productService.getDetailProduct(+id);
  }

}
