import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../mock-category';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  category;
  categories = CATEGORIES;
  product = products; 

  countTheNum: number = 0;

  constructor( private route: ActivatedRoute,
    private location: Location, 
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = this.categories[+params.get('categoryId')]
    })
  }
  getBack(): void {
    this.location.back();
  }

public intCount(product:any){

  product.count++;
}

removeBtn(categoryId){
  const index = this.categories.indexOf(categoryId);
    this.categories.splice(index, 1);

}

}