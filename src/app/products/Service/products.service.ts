import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts() {
    return this._HttpClient.get('https://fakestoreapi.com/products');
  }

  getAllCategorys() {
    return this._HttpClient.get('https://fakestoreapi.com/products/categories');
  }

  getProductByCategoey(keyword: string) {
    return this._HttpClient.get(
      'https://fakestoreapi.com/products/category/' + keyword
    );
  }

  getSingelProductById(id: any) {
    return this._HttpClient.get('https://fakestoreapi.com/products/' + id);
  }
}
