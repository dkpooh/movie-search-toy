import React from 'react'
import { observer } from 'mobx-react'
import MainTemplate from '@/components/templates/main.template'

const IndexPage = observer(() => {
  return <MainTemplate contentComponent={<>메인</>} />
})

export default IndexPage
