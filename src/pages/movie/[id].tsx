import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import MainTemplate from '@/components/templates/main.template'
import { useRouter } from 'next/router'
import { useGlobalStore } from '@/hooks/use-global-store.hook'
import MovieDetail from '@/components/ui/organisms/MovieDetail'

const MoviePage = observer(() => {
  const router = useRouter()
  const id = router.query.id

  const { movieDetailStore } = useGlobalStore()
  useEffect(() => {
    movieDetailStore.fetchMovieDetail(id)
  }, [id])

  return (
    <MainTemplate
      contentComponent={<MovieDetail isFetch={movieDetailStore.isFetch} movie={movieDetailStore.movie} />}
    />
  )
})

export default MoviePage
