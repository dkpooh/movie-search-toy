import styled from '@emotion/styled'

interface StyledProps {}

export const SearchBarStyled = styled.div<StyledProps>`
  display: flex;
  box-sizing: border-box;
  width: 20%;
  padding: 5px 10px;
  border-radius: 20px;
  background: rgb(245, 245, 245);
  align-items: center;
  span + input {
    margin-left: 10px;
  }
`
