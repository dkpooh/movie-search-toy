import React from 'react'
import { useRouter } from 'next/router'
import HeaderMenu from '@/components/ui/molecules/HeaderMenu'
import SearchBar from '@/components/ui/molecules/SearchBar'
import * as S from './styled'
import { observer } from 'mobx-react'
import { useGlobalStore } from '@/hooks/use-global-store.hook'

const Header = observer(() => {
  const router = useRouter()
  const { searchStore } = useGlobalStore()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchStore.setKeyword(e.currentTarget.value)
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value === '') {
        return
      }
      searchStore.setKeyword(searchStore.keyword)
      router.push(`/search/${searchStore.keyword}`)
    }
  }

  return (
    <S.HeaderStyled>
      <HeaderMenu />
      <SearchBar
        placeholder="검색어를 입력해주세요"
        defaultValue={searchStore.keyword}
        onChange={handleChange}
        onKeyPress={handleSearch}
      />
    </S.HeaderStyled>
  )
})

export default Header
