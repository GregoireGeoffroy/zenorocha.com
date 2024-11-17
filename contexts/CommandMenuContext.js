import { createContext, useContext, useState, useCallback } from 'react'

const CommandMenuContext = createContext({
  isOpen: false,
  openCommandMenu: () => {},
  closeCommandMenu: () => {},
  setIsOpen: () => {},
})

export function CommandMenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openCommandMenu = useCallback(() => {
    console.log('Opening command menu')
    setIsOpen(true)
  }, [])

  const closeCommandMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <CommandMenuContext.Provider
      value={{
        isOpen,
        openCommandMenu,
        closeCommandMenu,
        setIsOpen,
      }}
    >
      {children}
    </CommandMenuContext.Provider>
  )
}

export function useCommandMenu() {
  const context = useContext(CommandMenuContext)
  if (context === undefined) {
    throw new Error('useCommandMenu must be used within a CommandMenuProvider')
  }
  return context
} 