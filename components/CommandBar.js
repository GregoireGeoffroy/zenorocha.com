import { styled } from '../stitches.config'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Command } from 'cmdk'
import Lottie from 'lottie-react'
import Toast from './Toast'

// Import all Lottie animations
import copyLinkIcon from '../public/static/icons/copy-link.json'
import emailIcon from '../public/static/icons/email.json'
import sourceIcon from '../public/static/icons/source.json'
import aboutIcon from '../public/static/icons/about.json'
import homeIcon from '../public/static/icons/home.json'
import articlesIcon from '../public/static/icons/articles.json'
import projectsIcon from '../public/static/icons/projects.json'
import talksIcon from '../public/static/icons/talks.json'
import podcastsIcon from '../public/static/icons/podcasts.json'
import investingIcon from '../public/static/icons/investing.json'
import usesIcon from '../public/static/icons/uses.json'
import reminderIcon from '../public/static/icons/reminder.json'

export default function CommandBar() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const commandBarRef = useRef(null)
  
  // All Lottie refs
  const copyLinkRef = useRef()
  const emailRef = useRef()
  const sourceRef = useRef()
  const homeRef = useRef()
  const aboutRef = useRef()
  const articlesRef = useRef()
  const projectsRef = useRef()
  const talksRef = useRef()
  const podcastsRef = useRef()
  const investingRef = useRef()
  const usesRef = useRef()
  const reminderRef = useRef()

  useEffect(() => {
    let lastKeyPressed = ''
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }

      if (isOpen) {
        if (e.key === 'l') {
          copyLink()
        } else if (e.key === 'e') {
          perform('/contact')()
        }

        // Handle "g" combinations
        if (lastKeyPressed === 'g') {
          switch (e.key) {
            case 'h':
              perform('/')()
              break
            case 'a':
              perform('/about')()
              break
            case 'b':
              perform('/articles')()
              break
            case 'p':
              perform('/projects')()
              break
            case 't':
              perform('/talks')()
              break
            case 'c':
              perform('/podcasts')()
              break
            case 'i':
              perform('/investing')()
              break
            case 'u':
              perform('/uses')()
              break
            case 'r':
              perform('/reminder')()
              break
          }
          lastKeyPressed = ''
        } else {
          lastKeyPressed = e.key
        }
      }
    }

    const handleClickOutside = (event) => {
      if (commandBarRef.current && !commandBarRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const perform = (path) => () => {
    console.log('Performing navigation to:', path)
    router.push(path).then(() => {
      setIsOpen(false)
    })
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowToast(true)
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div ref={commandBarRef}>
      <Command.Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        label="Global Command Menu"
        shouldFilter={false}
      >
        <StyledCommand>
          <StyledInput placeholder="Type a command or search..." />
          <StyledList>
            <StyledGroup heading="General">
              <StyledItem value="copy-link" onSelect={copyLink}>
                <ItemContent>
                  <Lottie
                    lottieRef={copyLinkRef}
                    style={{ width: 24, height: 24 }}
                    animationData={copyLinkIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Copy Link</span>
                </ItemContent>
                <Shortcut><Kbd>l</Kbd></Shortcut>
              </StyledItem>

              <StyledItem value="contact" onSelect={perform('/contact')}>
                <ItemContent>
                  <Lottie
                    lottieRef={emailRef}
                    style={{ width: 24, height: 24 }}
                    animationData={emailIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Send Email</span>
                </ItemContent>
                <Shortcut><Kbd>e</Kbd></Shortcut>
              </StyledItem>
            </StyledGroup>

            <StyledGroup heading="Go To">
              <StyledItem value="home" onSelect={perform('/')}>
                <ItemContent>
                  <Lottie
                    lottieRef={homeRef}
                    style={{ width: 24, height: 24 }}
                    animationData={homeIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Home</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>g</Kbd>
                  <Kbd>h</Kbd>
                </Shortcut>
              </StyledItem>

              <StyledItem value="about" onSelect={perform('/about')}>
                <ItemContent>
                  <Lottie
                    lottieRef={aboutRef}
                    style={{ width: 24, height: 24 }}
                    animationData={aboutIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>About</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>g</Kbd>
                  <Kbd>a</Kbd>
                </Shortcut>
              </StyledItem>

              <StyledItem value="articles" onSelect={perform('/articles')}>
                <ItemContent>
                  <Lottie
                    lottieRef={articlesRef}
                    style={{ width: 24, height: 24 }}
                    animationData={articlesIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Articles</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>g</Kbd>
                  <Kbd>b</Kbd>
                </Shortcut>
              </StyledItem>

              <StyledItem value="projects" onSelect={perform('/projects')}>
                <ItemContent>
                  <Lottie
                    lottieRef={projectsRef}
                    style={{ width: 24, height: 24 }}
                    animationData={projectsIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Projects</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>g</Kbd>
                  <Kbd>p</Kbd>
                </Shortcut>
              </StyledItem>

              <StyledItem value="talks" onSelect={perform('/talks')}>
                <ItemContent>
                  <Lottie
                    lottieRef={talksRef}
                    style={{ width: 24, height: 24 }}
                    animationData={talksIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Talks</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>g</Kbd>
                  <Kbd>t</Kbd>
                </Shortcut>
              </StyledItem>

              <StyledItem value="podcasts" onSelect={perform('/podcasts')}>
                <ItemContent>
                  <Lottie
                    lottieRef={podcastsRef}
                    style={{ width: 24, height: 24 }}
                    animationData={podcastsIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Podcasts</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>g</Kbd>
                  <Kbd>c</Kbd>
                </Shortcut>
              </StyledItem>

              <StyledItem value="investing" onSelect={perform('/investing')}>
                <ItemContent>
                  <Lottie
                    lottieRef={investingRef}
                    style={{ width: 24, height: 24 }}
                    animationData={investingIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Investing</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>g</Kbd>
                  <Kbd>i</Kbd>
                </Shortcut>
              </StyledItem>

              <StyledItem value="uses" onSelect={perform('/uses')}>
                <ItemContent>
                  <Lottie
                    lottieRef={usesRef}
                    style={{ width: 24, height: 24 }}
                    animationData={usesIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Uses</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>g</Kbd>
                  <Kbd>u</Kbd>
                </Shortcut>
              </StyledItem>

              <StyledItem value="reminder" onSelect={perform('/reminder')}>
                <ItemContent>
                  <Lottie
                    lottieRef={reminderRef}
                    style={{ width: 24, height: 24 }}
                    animationData={reminderIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Reminder</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>g</Kbd>
                  <Kbd>r</Kbd>
                </Shortcut>
              </StyledItem>
            </StyledGroup>
          </StyledList>
        </StyledCommand>
      </Command.Dialog>

      <Toast
        title="Copied :D"
        description="You can now share it with anyone."
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </div>
  )
}
const StyledCommand = styled(Command, {
  width: '100%',
  maxWidth: '640px',
  backgroundColor: '$command',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.24)',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '$command',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)',
  },
})

const StyledInput = styled(Command.Input, {
  width: '100%',
  padding: '16px',
  fontSize: '16px',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: '$text',
  '&::placeholder': {
    color: '$secondary',
  },
})

const StyledList = styled(Command.List, {
  maxHeight: '400px',
  overflowY: 'auto',
  padding: '8px',
  borderTop: '1px solid $border',
  '&::-webkit-scrollbar': { display: 'none' },
  scrollbarWidth: 'none',
})

const StyledGroup = styled(Command.Group, {
  '& [cmdk-group-heading]': {
    padding: '8px 16px',
    fontSize: '12px',
    fontWeight: 500,
    color: '$secondary',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
})

const StyledItem = styled(Command.Item, {
  padding: '12px 16px',
  fontSize: '14px',
  borderRadius: '4px',
  color: '$text',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  '&[data-selected="true"]': {
    background: 'rgba(255, 255, 255, 0.1)',
    color: '$primary',
    '& svg': {
      color: '$primary',
    },
  },
  '&[aria-selected="true"]': {
    background: 'rgba(255, 255, 255, 0.1)',
    color: '$primary',
  },
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    '& [data-lottie]': {
      play: true,
    },
  },
  '&': {
    cursor: 'pointer',
    userSelect: 'none',
  },
})

const ItemContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

const Shortcut = styled('div', {
  display: 'flex',
  gap: '4px',
})

const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '$secondary',
  padding: '4px 8px',
  textTransform: 'uppercase',
  borderRadius: '4px',
  fontSize: '12px',
})

