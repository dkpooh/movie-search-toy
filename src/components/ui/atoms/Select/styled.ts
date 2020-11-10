import styled from '@emotion/styled'

interface StyledProps {}

export const SelectStyled = styled('div')<StyledProps>`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 10px;
  label {
    color: #444;
    font-size: 18px;
    & + select {
      margin-left: 10px;
    }
  }
  select {
    padding: 5px;
    font-size: 16px;
    color: #444;
    border: none;
    border-bottom: 1px solid #e0e0e0;
  }
`
