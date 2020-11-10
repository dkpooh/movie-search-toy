import React from 'react'
import MainLayout from '@/components/layout/main.layout'
import styled from '@emotion/styled'
import Header from '@/components/ui/organisms/Header'

const ContentStyled = styled.div`
  padding: 40px;
  text-align: center;
`

interface Props {
  contentComponent: React.ReactElement
}

const MainTemplate = ({ contentComponent }: Props) => {
  return (
    <MainLayout>
      <Header />
      <ContentStyled>{contentComponent}</ContentStyled>
    </MainLayout>
  )
}

export default MainTemplate
