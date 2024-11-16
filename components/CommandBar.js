import { styled } from '../stitches.config'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
} from 'cmdk'
import { useCommandMenu } from '../hooks/useCommandMenu'

export default function CommandBar({ children }) {
  const router = useRouter()
  const { isOpen, setIsOpen } = useCommandMenu()

  return (
    <>
      {children}
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => {
                router.push('/')
                setIsOpen(false)
              }}>
                Home
              </CommandItem>
              <CommandItem onSelect={() => {
                router.push('/articles')
                setIsOpen(false)
              }}>
                Articles
              </CommandItem>
              {/* Add other navigation items */}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}

const StyledCommand = styled(Command, {
  // Add your styles here
})
