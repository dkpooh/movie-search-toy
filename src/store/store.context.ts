import React from 'react'
import CounterStore from '@/store/counter.store'
import MovieStore from '@/store/movie.store'
import SearchStore from '@/store/search.store'
import MovieDetailStore from '@/store/movie-detail.store'

export const storesContext = React.createContext({
  counterStore: new CounterStore(),
  searchStore: new SearchStore(),
  movieStore: new MovieStore(),
  movieDetailStore: new MovieDetailStore(),
})
