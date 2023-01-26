import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent {
  data: any = []
  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void { this.getDetails() }
  getDetails() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        const id = params['id']
        this.articleService.getDetails(id).subscribe({
          next: (res: any) => {
            this.data = res.data
            console.log('response success: ', res);
          }, error: (err) => {
            console.log('response failed: ', err);
          }
        })
      }
    })
  }
}
