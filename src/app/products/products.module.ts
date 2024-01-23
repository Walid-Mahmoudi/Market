import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProductDetalsComponent } from './Components/product-detals/product-detals.component';
import { productsoRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './Components/product/product.component';
import { RouterModule } from '@angular/router';
import { CartsModule } from '../carts/carts.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetalsComponent,
    ProductComponent,
  ],
  exports: [ProductDetalsComponent],
  imports: [
    CommonModule,
    productsoRoutingModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    CartsModule,
    AuthModule,
  ],
})
export class ProductsModule {}
