import React from 'react'
import { observer } from 'mobx-react'
import { Movie } from '@/repository/ro/fetch-movie-list.ro'
import * as S from './styled'
import Loading from '@/components/ui/atoms/Loading'
import MovieCard from '@/components/ui/molecules/MovieCard'
import MoviesModel from '@/store/model/movies.model'
import Text from '@/components/ui/atoms/Text'
import { MehOutlined } from '@ant-design/icons'

interface Props {
  isFetch: boolean
  allMovies: MoviesModel | null
}

const MovieList = observer(({ isFetch, allMovies }: Props) => {
  return (
    <>
      {!isFetch ? (
        <S.MovieListStyled>
          {allMovies &&
            (allMovies.movies.length > 0 ? (
              allMovies.movies.map((movie: Movie) => (
                <a href={`/movie/${movie.id}`} key={movie.id}>
                  <MovieCard src={movie.large_cover_image} alt={movie.title}>
                    {movie.title}
                  </MovieCard>
                </a>
              ))
            ) : (
              <S.EmptyWrap>
                <MehOutlined style={{ fontSize: '25px' }} />
                <Text size="lg">검색 결과가 없습니다</Text>
              </S.EmptyWrap>
            ))}
        </S.MovieListStyled>
      ) : (
        <Loading />
      )}
    </>
  )
})

export default MovieList
