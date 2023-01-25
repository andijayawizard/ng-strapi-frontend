import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import environment from 'src/environments/environment';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent {
  @Output() closeDialog = new EventEmitter()
  @Output() refreshMovies = new EventEmitter()
  @Input() movie: any
  disable = false
  constructor(private http: HttpClient) { }
  ngOnInit(): void { }
  editNewMovie(e: Event) {
    this.disable = true
    const { addMovieName, addMovieGenre, addMovieImageUrl, addMovieSynopsis, addMovieYear } = window as any
    this.http.put(`${environment.apiUrl}/api/movies/${this.movie?.id}`, {
      name: addMovieName.value,
      genre: addMovieGenre.value,
      imageUrl: addMovieImageUrl.value,
      synopsis: addMovieSynopsis.value,
      year: addMovieYear.value
    }).subscribe({
      next: () => {
        this.disable = false
        this.closeDialog.emit()
        window.location.reload()
      }, error: () => {
        this.disable = false
      }
    }
    )
  }
  closeModal() {
    this.closeDialog.emit()
  }
}
