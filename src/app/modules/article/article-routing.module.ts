import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent, title: 'Article List' },
  { path: 'article/:id', component: ArticleDetailsComponent, title: 'Article Details' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
