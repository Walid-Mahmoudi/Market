import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/Components/all-products/all-products.component';
import { ProductDetalsComponent } from './products/Components/product-detals/product-detals.component';
import { CartsComponent } from './carts/Components/carts/carts.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  // {
  //   path: 'shared',
  //   loadChildren: () =>
  //     import('./shared/shared.module').then((m) => m.SharedModule),
  // },
  {
    path: 'product',
    canActivate: [authGuard],
    component: AllProductsComponent,
  },
  {
    path: 'detals/:id',
    canActivate: [authGuard],
    component: ProductDetalsComponent,
  },
  { path: 'cart', canActivate: [authGuard], component: CartsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'product', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
