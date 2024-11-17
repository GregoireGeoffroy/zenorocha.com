import { styled } from '../stitches.config'
import { useCommandMenu } from '../contexts/CommandMenuContext'

export default function ShortcutHome() {
  const { openCommandMenu } = useCommandMenu()
  
  return (
    <ShortcutButton onClick={openCommandMenu}>
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to start...
    </ShortcutButton> 
  )
}

const ShortcutButton = styled('button', {
  background: 'transparent',
  border: 'none',
  color: '$secondary',
  cursor: 'pointer',
  padding: '8px 12px',
  borderRadius: '$borderRadius',
  fontSize: '14px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'color $duration ease-in-out',
  '&:hover': {
    color: '$primary',
  },
})

const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: 'inherit',
  padding: '4px 8px',
  borderRadius: '4px',
})
