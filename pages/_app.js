import '../public/static/css/prism.css'
import 'remixicon/fonts/remixicon.css'
import '../styles/cmdk.css'

import Router from 'next/router'
import * as gtag from '../lib/gtag'
import CommandBar from '../components/CommandBar'
import { useEffect, useState } from 'react'

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleRouteChange = (url) => gtag.pageview(url)
    Router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <CommandBar>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CommandBar>
  )
}
