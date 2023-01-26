import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import CATEGORIES_QUERY from 'src/app/apollo/queries/category/categories';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  nav: any = []
  private queryCategories!: Subscription
  constructor(private apollo: Apollo, private categoryService: CategoryService) { }
  ngOnInit() {
    this.queryCategories = this.apollo.watchQuery({
      query: CATEGORIES_QUERY
    }).valueChanges.subscribe({
      next: (res: any) => {
        this.nav = res.data
        // console.log('nav response success: ', res);
      }
    })
    // this.queryCategories = this.categoryService.getAll().subscribe({
    //   next: (res) => {
    //     this.nav = res
    //     console.log('nav response: ', res);
    //   }
    // })
  }
}
