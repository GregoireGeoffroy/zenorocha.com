import { ButtonPrimary } from './ButtonPrimary'
import { useCommandMenu } from '../contexts/CommandMenuContext'
import { useState, useEffect } from 'react'

export default function ShortcutHome() {
  const { openCommandMenu } = useCommandMenu()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent)
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return (
        <ButtonPrimary as="button" onClick={openCommandMenu}>
          Tap to start →
        </ButtonPrimary>
      )
    } else if (isMac) {
      return (
        <ButtonPrimary as="button" onClick={openCommandMenu}>
          Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      )
    } else {
      return (
        <ButtonPrimary as="button" onClick={openCommandMenu}>
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      )
    }
  }

  return <div />
}
