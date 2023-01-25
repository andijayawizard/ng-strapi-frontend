import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
// import gql from 'graphql-tag'
import CATEGORIES_QUERY from '../apollo/queries/category/categories'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  data: any = {}
  loading = true
  errors: any
  private queryCategories!: Subscription
  constructor(private apollo: Apollo) { }
  ngOnInit() {
    this.queryCategories = this.apollo.watchQuery({
      query: CATEGORIES_QUERY
    }).valueChanges.subscribe({
      next: (result) => {
        this.data = result.data
        this.loading = result.loading
        this.errors = result.errors
        console.log('http response: ', result.data);
      }, error: (err) => {
        console.log('http error: ', err);
      }
    }
    )
  }
  ngOnDestroy() {
    this.queryCategories.unsubscribe()
  }
}
