import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import environment from 'src/environments/environment';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  @Output() closeDialog = new EventEmitter()
  @Output() refreshMovies = new EventEmitter()
  disable = false
  constructor(private http: HttpClient) { }
  ngOnInit(): void { }
  addNewMovie(e: Event) {
    this.disable = true
    const { addMovieName, addMovieYear, addMovieGenre, addMovieImageUrl, addMovieSynopsis } = window as any
    this.http.post(`${environment.apiUrl}/api/movies`, {
      name: addMovieName.value,
      year: addMovieYear.value,
      genre: addMovieGenre.value,
      imageUrl: addMovieImageUrl.value,
      synopsis: addMovieSynopsis.value
    }).subscribe({
      next: () => {
        this.disable = false
        this.refreshMovies.emit()
        this.closeDialog.emit()
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
