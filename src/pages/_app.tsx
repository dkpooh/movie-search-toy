import { AppContext, AppProps } from 'next/app'
import { CacheProvider, Global } from '@emotion/core'
import { globalStyle } from '@/assets/styles/global-style'
import { cache } from 'emotion'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <Global styles={globalStyle} />
      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>
    </CacheProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}
export default MyApp
