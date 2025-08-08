import { Injectable } from '@angular/core';
import {ProductModel} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }


  cartList: ProductModel[] = [];
  productList: ProductModel[] = [
    {
      id: 1,
      name: 'Quần Short Thể Thao In Chữ 4MEN ở Túi Form Relax Sport QS077 Màu Xám Nhạt',
      image: 'https://4menshop.com/cache/image/300x400/images/thumbs/2025/08/quan-short-the-thao-in-chu-4men-o-tui-form-relax-sport-qs077-mau-xanh-den-19358.jpg',
      price: 149000,
      quantity: 0,
    }
    ,
    {
      id: 2,
      name: 'Quần Short Thể Thao In Chữ 4MEN ở Túi Form Relax Sport QS077 Màu Xanh Đen',
      image: 'https://4menshop.com/cache/image/300x400/images/thumbs/2025/08/quan-short-the-thao-in-chu-4men-o-tui-form-relax-sport-qs077-mau-xam-dam-19357.jpg',
      price: 149000,
      quantity: 0,
    },
    {
      id: 3,
      name: 'Quần Short Thể Thao In Chữ 4MEN ở Túi Form Relax Sport QS077 Màu Xám Đậm',
      image: 'https://4menshop.com/cache/image/300x400/images/thumbs/2025/08/quan-short-the-thao-in-chu-4men-o-tui-form-relax-sport-qs077-mau-den_2_small-19356.jpg',
      price: 149000,
      quantity: 0,
    },
    {
      id: 4,
      name: 'Quần Short Thể Thao In Chữ 4MEN ở Túi Form Relax Sport QS077 Màu Đen',
      image: 'https://4menshop.com/cache/image/300x400/images/thumbs/2025/08/quan-short-the-thao-in-chu-4men-o-tui-form-relax-sport-qs077-19355.jpg',
      price: 149000,
      quantity: 0,
    },
    {
      id: 5,
      name: 'Quần Short Thể Thao In Chữ 4MEN ở Túi Form Relax Sport QS077 Thum 2',
      image: 'https://4menshop.com/cache/image/300x400/images/thumbs/2025/08/quan-short-jean-theu-logo-tron-4m-premium-form-straight-qs075_2_small-19354.jpg',
      price: 149000,
      quantity: 0,
    },
    {
      id: 6,
      name: 'Quần Short Jean Thêu Logo Tròn 4M Premium Form Straight QS075',
      image: 'https://4menshop.com/cache/image/300x400/images/thumbs/2025/08/quan-short-jean-theu-logo-tron-4m-premium-form-straight-qs075_2_small-19354.jpg',
      price: 149000,
      quantity: 0,
    }
  ]

  getDetailProduct(id: number): ProductModel {
    let product = this.productList.find(item => item.id === id)
    if (product) {
      return product;
    } else {
      return {} as ProductModel
    }
  }


  addProductToCart(id: number): void {
    let product = this.productList.find(item => item.id === id);
    if (product) {
      let productInCart = this.cartList.find(itemCart => product.id === itemCart.id)
      if (productInCart) {
        product.quantity += 1;
      } else {
        product.quantity += 1;
        this.cartList.push(product);
      }


    }
    console.log(this.cartList);


  }
}
