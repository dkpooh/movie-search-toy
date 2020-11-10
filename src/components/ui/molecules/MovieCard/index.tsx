import React, { ReactNode, FunctionComponent } from 'react'
import Thumbnail from '@/components/ui/atoms/Thumbnail'
import Text from '@/components/ui/atoms/Text'
import * as S from './styled'

interface Props {
  src: string
  alt: string
  children: ReactNode
}

const MovieCard = ({ src, alt, children }: Props) => {
  return (
    <S.MovieCardStyled>
      <Thumbnail src={src} alt={alt} />
      <Text size="lg">{children}</Text>
    </S.MovieCardStyled>
  )
}

export default MovieCard
