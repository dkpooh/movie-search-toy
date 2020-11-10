import React from 'react'
import * as S from './styled'
import Select from '@/components/ui/atoms/Select'
import { observer } from 'mobx-react'

const genreOptions = [
  'comedy',
  'sci-fi',
  'horror',
  'romance',
  'action',
  'thriller',
  'drama',
  'mystery',
  'crime',
  'animation',
  'adventure',
  'fantasy',
  'comedy,romance',
  'action,comedy',
  'superhero',
]

const orderOptions = ['desc', 'asc']

const sortOptions = ['title', 'year', 'rating', 'peers', 'seeds', 'download_count', 'like_count', 'date_added']

interface Props {
  genre: string
  order: string
  sort: string
  handleGenreChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handleOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const MovieFilter = observer(
  ({ genre, order, sort, handleGenreChange, handleOrderChange, handleSortChange }: Props) => {
    return (
      <S.MovieFilterStyled>
        <Select
          htmlFor="Genre"
          name="genre"
          value={genre}
          options={genreOptions}
          onChange={(e) => handleGenreChange(e)}
        />
        <Select
          htmlFor="Order by"
          name="order"
          value={order}
          options={orderOptions}
          onChange={(e) => handleOrderChange(e)}
        />
        <Select
          htmlFor="Sort by"
          name="sort"
          value={sort}
          options={sortOptions}
          onChange={(e) => handleSortChange(e)}
        />
      </S.MovieFilterStyled>
    )
  },
)

export default MovieFilter
