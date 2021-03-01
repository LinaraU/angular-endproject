import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsAlertsComponent } from './products-alerts/products-alerts.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category.service';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CountService } from './count.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryComponent },
      { path: 'category/:categoryId', component: CategoryDetailsComponent },
      { path: 'category/product/:productId', component: ProductListComponent},
      { path: 'categories', component: CategoryComponent },
      { path: 'products/:productId', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductsAlertsComponent,
    ProductItemComponent,
    CategoryComponent,
    CategoryDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [CategoryService, CountService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/