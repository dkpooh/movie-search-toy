import React from 'react'
import * as S from './styled'

interface Props {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return <S.ButtonStyled>{children}</S.ButtonStyled>
}

export default Button
