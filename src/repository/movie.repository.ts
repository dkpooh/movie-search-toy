import axios from 'axios'
import { FetchMovieListRo } from '@/repository/ro/fetch-movie-list.ro'
import { FetchMovieDetailRo } from '@/repository/ro/fetch-movie-detail.ro'

class MovieRepository {
  constructor() {}

  searchMovieList = async (
    keyword?: string | string[] | undefined,
    order?: string,
    sort?: string,
    genre?: string,
  ): Promise<FetchMovieListRo> => {
    return await axios
      .get<FetchMovieListRo>('https://yts.mx/api/v2/list_movies.json', {
        params: {
          query_term: keyword,
          order_by: order,
          sort_by: sort,
          genre: genre,
        },
      })
      .then((res) => {
        let data = res.data.data
        return data
      })
  }

  loadMovieDetail = async (id: string | string[]): Promise<FetchMovieDetailRo> => {
    return await axios
      .get<FetchMovieDetailRo>('https://yts.mx/api/v2/movie_details.json', {
        params: {
          movie_id: id,
          with_cast: true,
        },
      })
      .then((res) => {
        let data = res.data.data
        return data
      })
  }
}

export default new MovieRepository()
