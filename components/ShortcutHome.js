import { useCommandMenu } from '../hooks/useCommandMenu'

export default function ShortcutHome() {
  const { openCommandMenu } = useCommandMenu()
  
  return (
    <button onClick={openCommandMenu}>
      Press <kbd>⌘</kbd> <kbd>K</kbd> to start...
    </button>
  )
}
