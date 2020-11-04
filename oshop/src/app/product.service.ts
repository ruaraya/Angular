import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';

import { map } from 'rxjs-compat/operator/map';
import { AppProduct } from './models/app-product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsRef: AngularFireList<AppProduct> = null;

  constructor(private db: AngularFireDatabase) {
    //this.productsRef = this.db.list('/products');
  }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll(): AngularFireList<AppProduct> {
    return this.db.list('/products');
  }

  get(productId): AngularFireObject<AppProduct> {
    return this.db.object('/products/' + productId);
    //return this.db.list('/products');
  }
}
