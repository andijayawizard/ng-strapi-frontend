import { HttpClient } from '@angular/common/http';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent {
  movie: any
  @ViewChild('modalRef') modalRef!: TemplateRef<any>
  @ViewChild('vcRef', { read: ViewContainerRef }) vcRef!: ViewContainerRef
  vRef: any = null
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   if (params.id) {
    //     const movieId = params.id
    //     this.http.get(`http://localhost:1337/movies/${movieId}`).subscribe((data: any) => (this.movie = data))
    //   }
    // })
  }
  deleteMovie() {
    if (confirm('Do you really want to delete this movie?')) {
      this.http.delete(`http://localhost:1337/movies/${this.movie?.id}`).subscribe((data) => {
        this.router.navigate(['/'])
      })
    }
  }
  showEditMovieDialog() {
    let view = this.modalRef.createEmbeddedView(null)
    this.vcRef.insert(view)
  }
  closeDialog() {
    this.vcRef.clear()
  }
}
