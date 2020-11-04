import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../category.service';
import { ProductService } from './../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { AppProduct } from './../../models/app-product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$;
  product: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if (id)
      this.productService
        .get(id)
        .valueChanges()
        .take(1)
        .map((res) => ({
          category: res[0],
          imageUrl: res[1],
          price: res[2],
          title: res[3],
        }))
        .subscribe((data) => {
          this.product = data;
        });
  }
}
