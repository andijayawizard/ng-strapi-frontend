import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  data: any = []
  constructor(private articleService: ArticleService) { }
  ngOnInit(): void {
    this.getAll()
  }
  getAll(): void {
    this.articleService.getAll().subscribe({
      next: (res: any) => {
        this.data = res.data
        console.log('http response: ', res);
      }
    })
  }
}
