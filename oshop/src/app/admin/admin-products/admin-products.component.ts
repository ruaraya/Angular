import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product.service';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService
      .getAll()
      .snapshotChanges()
      .map((changes) =>
        changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
      )
      .subscribe((data) => {
        this.products = data;
      });
  }
}
