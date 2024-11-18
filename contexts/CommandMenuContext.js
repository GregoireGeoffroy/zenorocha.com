import { createContext, useContext, useState } from 'react'

const CommandMenuContext = createContext()

export function CommandMenuProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openCommandMenu = () => setOpen(true)
  const closeCommandMenu = () => setOpen(false)

  return (
    <CommandMenuContext.Provider value={{ open, setOpen, openCommandMenu, closeCommandMenu }}>
      {children}
    </CommandMenuContext.Provider>
  )
}

export function useCommandMenu() {
  const context = useContext(CommandMenuContext)
  if (!context) {
    throw new Error('useCommandMenu must be used within a CommandMenuProvider')
  }
  return context
} 