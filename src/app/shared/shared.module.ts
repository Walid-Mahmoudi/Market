import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpinerComponent } from './spiner/spiner.component';
import { SelectComponent } from './Components/select/select.component';
import { FormsModule } from '@angular/forms';
import { QuantityComponent } from './Components/quantity/quantity.component';

@NgModule({
  declarations: [HeaderComponent, SpinerComponent, SelectComponent, QuantityComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  exports: [HeaderComponent, SpinerComponent, SelectComponent, FormsModule],
})
export class SharedModule {}
