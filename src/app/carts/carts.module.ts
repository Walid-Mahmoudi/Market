import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './Components/carts/carts.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CartsComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class CartsModule {}
