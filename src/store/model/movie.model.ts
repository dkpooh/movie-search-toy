export interface Torrent {
  url: string
  hash: string
  quality: string
  type: string
  seeds: number
  peers: number
  size: string
  size_bytes: number
  date_uploaded: Date
  date_uploaded_unix: number
}

export interface MovieProperties {
  id: number
  url: string
  imdb_code: string
  title: string
  title_english: string
  title_long: string
  slug: string
  year: number
  rating: number
  runtime: number
  genres: string[]
  summary: string
  description_full: string
  synopsis: string
  yt_trailer_code: string
  language: string
  mpa_rating: string
  background_image: string
  background_image_original: string
  small_cover_image: string
  medium_cover_image: string
  large_cover_image: string
  state: string
  torrents: Torrent[]
  date_uploaded: string
  date_uploaded_unix: number
}

class MovieModel implements MovieProperties {
  id: number
  url: string
  imdb_code: string
  title: string
  title_english: string
  title_long: string
  slug: string
  year: number
  rating: number
  runtime: number
  genres: string[]
  summary: string
  description_full: string
  synopsis: string
  yt_trailer_code: string
  language: string
  mpa_rating: string
  background_image: string
  background_image_original: string
  small_cover_image: string
  medium_cover_image: string
  large_cover_image: string
  state: string
  torrents: Torrent[]
  date_uploaded: string
  date_uploaded_unix: number

  constructor(args: MovieProperties) {
    this.id = args.id
    this.url = args.url
    this.imdb_code = args.imdb_code
    this.title = args.title
    this.title_english = args.title_english
    this.title_long = args.title_long
    this.slug = args.slug
    this.year = args.year
    this.rating = args.rating
    this.runtime = args.runtime
    this.genres = args.genres
    this.summary = args.summary
    this.description_full = args.description_full
    this.synopsis = args.synopsis
    this.yt_trailer_code = args.yt_trailer_code
    this.language = args.language
    this.mpa_rating = args.mpa_rating
    this.background_image = args.background_image
    this.background_image_original = args.background_image_original
    this.small_cover_image = args.small_cover_image
    this.medium_cover_image = args.medium_cover_image
    this.large_cover_image = args.large_cover_image
    this.state = args.state
    this.torrents = args.torrents
    this.date_uploaded = args.date_uploaded
    this.date_uploaded_unix = args.date_uploaded_unix
  }
}

export default MovieModel
