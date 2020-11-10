import { makeAutoObservable, runInAction } from 'mobx'
import MovieRepository from '@/repository/movie.repository'
import MovieDetailModel from '@/store/model/movie-detail.model'

export default class MovieDetailStore {
  movie: MovieDetailModel | null = null
  isFetch: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  fetchMovieDetail = async (id: string | string[] = '') => {
    if (this.isFetch) return

    this.isFetch = true

    try {
      const responseData = await MovieRepository.loadMovieDetail(id)
      const { movie } = responseData

      runInAction(() => {
        this.movie = movie
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
