import React, { useRef } from 'react'
import Input from '@/components/ui/atoms/Input'
import { SearchOutlined } from '@ant-design/icons'
import * as S from './styled'

interface Props {
  defaultValue?: string | string[]
  placeholder: string
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({ defaultValue, onChange, onKeyPress, placeholder }: Props) => {
  return (
    <S.SearchBarStyled>
      <SearchOutlined />
      <Input
        type="text"
        defaultValue={defaultValue}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
      />
    </S.SearchBarStyled>
  )
}

export default SearchBar
