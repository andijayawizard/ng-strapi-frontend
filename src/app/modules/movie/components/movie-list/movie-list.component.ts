import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import environment from 'src/environments/environment';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies: any = []
  @ViewChild('modal') modal!: TemplateRef<any>
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef
  vRef: any = null
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchMovies()
  }
  ngAfterViewInit() {
    this.vRef = this.vc
  }
  fetchMovies() {
    this.http.get(`${environment.apiUrl}/api/movies`).subscribe(
      {
        next: (res: any) => {
          this.movies = res.data
          console.log('http response: ', res);
        },
        error: (err) => {
          console.log('http response error: ', err);
        },
        complete: () => {
          console.log('http request complete');
        }
      }
      // (data: any) => (this.movies = data)
    )
  }
  showAddMovieDialog() {
    let view = this.modal.createEmbeddedView(null)
    this.vRef.insert(view)
  }
  closeDialog() {
    this.vRef.clear()
  }
}
