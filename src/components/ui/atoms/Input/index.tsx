import React from 'react'
import * as S from './styled'

interface Props {
  defaultValue?: string | string[]
  type: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input = ({ ...props }: Props) => {
  return <S.InputStyled {...props} />
}

export default Input
