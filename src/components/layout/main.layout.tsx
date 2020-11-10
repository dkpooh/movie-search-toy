import React, { KeyboardEventHandler, ReactNode } from 'react'
import Head from 'next/head'
import { observer } from 'mobx-react'

type Props = {
  children?: ReactNode
  title?: string
}

const MainLayout = observer(({ children, title = 'This is the main title' }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  )
})

export default MainLayout
