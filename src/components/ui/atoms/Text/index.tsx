import React from 'react'
import * as S from './styled'

interface Props {
  children: React.ReactNode
  size?: string
}

const Text = ({ children, ...props }: Props) => {
  return <S.TextStyled {...props}>{children}</S.TextStyled>
}

export default Text
