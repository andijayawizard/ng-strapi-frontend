import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories: any = []
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void { this.getAll() }
  getAll() {
    this.categoryService.getAll().subscribe({
      next: (res: any) => {
        this.categories = res.data
        console.log('category response success: ', res);
      }
    })
  }
}
