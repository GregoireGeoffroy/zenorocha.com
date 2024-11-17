import '../public/static/css/prism.css'
import 'remixicon/fonts/remixicon.css'
import '../styles/cmdk.css'

import Router from 'next/router'
import * as gtag from '../lib/gtag'
import CommandBar from '../components/CommandBar'
import { useEffect, useState } from 'react'
import { CommandMenuProvider } from '../contexts/CommandMenuContext'

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <CommandMenuProvider>
      <CommandBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CommandMenuProvider>
  )
}
