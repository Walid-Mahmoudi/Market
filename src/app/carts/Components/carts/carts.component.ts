import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../Service/carts.service';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartsComponent implements OnInit {
  cartProducts: any[] = [];
  total: any = 0;
  succses: boolean = false;
  constructor(
    private CartsService: CartsService,
    private _AuthService: AuthService
  ) {}
  ngOnInit(): void {
    this.getProductToCart();
  }

  getProductToCart() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();
  }

  quentity(index: number, opr: number) {
    this.cartProducts[index].quantity += opr;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  clearAllProduct() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  addCart() {
    let product = this.cartProducts.map((item) => {
      return { productId: item.item.id, quantity: item.quantity };
    });
    let model = {
      userId: 283,
      date: new Date(),
      products: product,
    };
    this.CartsService.creatNewCart(model).subscribe((res) => {
      this.succses = true;
    });
    console.log(model);
  }
}
