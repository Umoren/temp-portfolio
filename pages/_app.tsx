import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SiteLayout from '../components/SiteLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteLayout>
     <Component {...pageProps} />
    </SiteLayout>
  )
}

export default MyApp
