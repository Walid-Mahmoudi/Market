import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  productCategory: string[] = [];
  loding: boolean = false;
  cartProducts: any[] = [];
  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
  }

  getProduct() {
    this.loding = true;
    console.log(this.loding);

    this._ProductsService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loding = false;
        console.log(this.loding);
      },
      (error) => {
        this.loding = true;
      }
    );
  }

  getCategory() {
    this.loding = true;
    this._ProductsService.getAllCategorys().subscribe((res: any) => {
      this.productCategory = res;
      this.loding = false;
    });
  }

  filterCategory(event: any) {
    this.loding = true;

    let value = event.target.innerHTML;
    this._ProductsService.getProductByCategoey(value).subscribe((res: any) => {
      this.products = res;
      if (value == 'All Products') {
        this.getProduct();
      }
      this.loding = false;
    });
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find(
        (item) => item.item.id == event.item.id
      );
      if (exist) {
        alert('this item is in your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
