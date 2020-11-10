import React from 'react'
import { observer } from 'mobx-react'
import Loading from '@/components/ui/atoms/Loading'
import MovieDetailModel from '@/store/model/movie-detail.model'
import * as S from './styled'
import { StarTwoTone } from '@ant-design/icons'
import Text from '@/components/ui/atoms/Text'

interface Props {
  isFetch: boolean
  movie: MovieDetailModel | null
}

const MovieDetail = observer(({ isFetch, movie }: Props) => {
  return !isFetch ? (
    movie && (
      <S.MovieDetailStyled>
        <S.Cover>
          <img src={movie.large_cover_image} alt={movie.title} />
        </S.Cover>
        <S.Desc>
          <h2>{`${movie.title_long}`}</h2>
          <Text size="xlg">
            <strong>장르</strong>
            <span>{` ${movie.genres}`}</span>
          </Text>
          <Text size="xlg">
            <strong>재생시간</strong>
            <span>{` ${movie.runtime}분 `}</span>
          </Text>
          <Text size="xlg">
            <strong>별점</strong>
            <span>
              <StarTwoTone twoToneColor="#fbc500" />
              {`${movie.rating}점`}
            </span>
          </Text>
          <Text size="xlg">{movie.description_full}</Text>
          <Text size="xlg">
            <strong>출연</strong>
            <span>{movie.cast.map((cast, index) => cast.name).join(', ')}</span>
          </Text>
        </S.Desc>
      </S.MovieDetailStyled>
    )
  ) : (
    <Loading />
  )
})

export default MovieDetail
