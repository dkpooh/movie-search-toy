import React from 'react'
import Link from 'next/link'
import * as S from './styled'

const HeaderMenu = () => {
  return (
    <S.HeaderMenuStyled>
      <li>
        <Link href="/">
          <a>홈</a>
        </Link>
      </li>
    </S.HeaderMenuStyled>
  )
}

export default HeaderMenu
