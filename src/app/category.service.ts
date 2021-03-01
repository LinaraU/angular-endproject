import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './mock-category';
import { products } from './products'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 getCategories(): Observable<Category[]> {
    const categories = of(CATEGORIES)
    return categories;
  }


}