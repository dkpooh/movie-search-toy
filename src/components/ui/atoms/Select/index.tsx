import React from 'react'
import * as S from './styled'

interface Props {
  htmlFor: string
  name: string
  value: string
  options: string[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({ htmlFor, name, value, options, onChange }: Props) => {
  return (
    <S.SelectStyled>
      <label htmlFor={htmlFor}>{htmlFor}</label>
      <select name={name} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </S.SelectStyled>
  )
}

export default Select
