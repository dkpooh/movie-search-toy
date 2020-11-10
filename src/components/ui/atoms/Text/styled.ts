import styled from '@emotion/styled'

interface styledProps {
  size?: string
}

export const TextStyled = styled.p<styledProps>`
  color: #000;
  font-size: ${(props) =>
    props.size === 's'
      ? '12px'
      : props.size === 'md'
      ? '14px'
      : props.size === 'lg'
      ? '16px'
      : props.size === 'xlg'
      ? '18px'
      : '11px'};
`
