import { makeAutoObservable, runInAction } from 'mobx'
import MovieRepository from '@/repository/movie.repository'
import MovieModel from './model/movie.model'
import MoviesModel from './model/movies.model'

export default class MovieStore {
  allMovies: MoviesModel | null = null
  isFetch: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  fetchAllMovieList = async (id?: string | string[], order?: string, sort?: string, genre?: string) => {
    if (this.isFetch) return

    this.isFetch = true

    try {
      const responseData = await MovieRepository.searchMovieList(id, order, sort, genre)
      const { movie_count, limit, page_number, movies } = responseData
      const newMovies = movie_count > 0 ? movies.map<MovieModel>((data) => new MovieModel(data)) : []

      runInAction(() => {
        this.allMovies = new MoviesModel({
          movies: newMovies,
          limit: limit,
          movie_count: movie_count,
          page_number: page_number,
        })
      })
      return responseData
    } catch (err) {
      console.log(err)
    } finally {
      runInAction(() => {
        this.isFetch = false
      })
    }
  }
}
