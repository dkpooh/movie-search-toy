import MovieModel from '@/store/model/movie.model'

export interface MoviesProperties {
  limit: number
  movie_count: number
  page_number: number
  movies: MovieModel[]
}

export default class MoviesModel implements MoviesProperties {
  limit: number
  movie_count: number
  page_number: number
  movies: MovieModel[]

  constructor(args: MoviesProperties) {
    this.limit = args.limit
    this.movie_count = args.movie_count
    this.page_number = args.page_number
    this.movies = args.movies
  }

  // get moviesCount() {
  //   return this.allMovies.length
  // }
}
