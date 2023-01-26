import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import CATEGORIES_QUERY from 'src/app/apollo/queries/category/categories';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apollo: Apollo) { }
  getAll(): Observable<Category[]> {
    return this.apollo.watchQuery<any>({
      query: CATEGORIES_QUERY
    }).valueChanges.pipe(map((result) => result.data.categories))
  }
}
