import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export function useCommandMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        console.log('Keyboard shortcut triggered')
        setIsOpen(true)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const openCommandMenu = () => {
    console.log('openCommandMenu called')
    setIsOpen(true)
  }

  const closeCommandMenu = () => setIsOpen(false)

  return {
    isOpen,
    openCommandMenu,
    closeCommandMenu,
    setIsOpen
  }
} 