import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Service/products.service';

@Component({
  selector: 'app-product-detals',
  templateUrl: './product-detals.component.html',
  styleUrls: ['./product-detals.component.scss'],
})
export class ProductDetalsComponent implements OnInit {
  id: any;
  data: any = {};
  loding: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit(): void {
    this.getProcuctById();
  }

  getProcuctById() {
    this.loding = true;
    this._ProductsService.getSingelProductById(this.id).subscribe((res) => {
      this.data = res;
      this.loding = false;
    });
  }
}
