import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export function useCommandMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const openCommandMenu = () => setIsOpen(true)
  const closeCommandMenu = () => setIsOpen(false)

  return {
    isOpen,
    openCommandMenu,
    closeCommandMenu,
    setIsOpen
  }
} 