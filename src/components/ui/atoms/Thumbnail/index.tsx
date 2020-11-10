import React from 'react'
import * as S from './styled'

interface Props {
  src: string
  alt: string
}

const Thumbnail = ({ ...props }: Props) => {
  return <S.ThumbnailStyled {...props} />
}

export default Thumbnail
