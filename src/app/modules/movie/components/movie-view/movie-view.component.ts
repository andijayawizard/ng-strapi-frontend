import { HttpClient } from '@angular/common/http';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import environment from 'src/environments/environment';

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
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        const movieId = params['id']
        this.http.get(`${environment.apiUrl}/api/movies/${movieId}`).subscribe((res: any) => { this.movie = res.data })
      }
    })
  }
  deleteMovie() {
    if (confirm(`Do you really want to delete ${this.movie.attributes.name} movie?`)) {
      this.http.delete(`${environment.apiUrl}/api/movies/${this.movie?.id}`).subscribe((data) => {
        this.router.navigate(['/movies'])
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
