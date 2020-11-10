import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import MainTemplate from '@/components/templates/main.template'
import { useGlobalStore } from '@/hooks/use-global-store.hook'
import { useRouter } from 'next/router'
import MovieFilter from '@/components/ui/molecules/MovieFilter'
import MovieList from '@/components/ui/organisms/MovieList'

const SearchPage = observer(() => {
  const { movieStore } = useGlobalStore()
  const router = useRouter()
  const id = router.query.id

  const [order, setOrder] = useState('')
  const [sort, setSort] = useState('')
  const [genre, setGenre] = useState('')

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    setGenre(value)
    movieStore.fetchAllMovieList(id, order, sort, value)
  }

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    setOrder(value)
    movieStore.fetchAllMovieList(id, value, sort)
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    setSort(value)
    movieStore.fetchAllMovieList(id, order, value)
  }

  useEffect(() => {
    movieStore.fetchAllMovieList(id, 'desc')
  }, [id])
  return (
    <>
      <MainTemplate
        contentComponent={
          <>
            <MovieFilter
              genre={genre}
              order={order}
              sort={sort}
              handleGenreChange={handleGenreChange}
              handleOrderChange={handleOrderChange}
              handleSortChange={handleSortChange}
            />
            <MovieList isFetch={movieStore.isFetch} allMovies={movieStore.allMovies} />
          </>
        }
      />
    </>
  )
})

export default SearchPage
