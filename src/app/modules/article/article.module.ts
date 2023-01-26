import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
