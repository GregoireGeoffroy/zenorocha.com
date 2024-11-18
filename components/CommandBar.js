import { styled } from '../stitches.config'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Command } from 'cmdk'
import Lottie from 'lottie-react'
import Toast from './Toast'
import { useCommandMenu } from '../contexts/CommandMenuContext'

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

// Add this wrapper component for the dialog
const CommandWrapper = styled('div', {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
})

export default function CommandBar() {
  const router = useRouter()
  const { open, setOpen } = useCommandMenu()
  const [showToast, setShowToast] = useState(false)
  
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
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const navigate = async (path) => {
    setOpen(false)
    if (path.startsWith('http')) {
      window.open(path, '_blank')
    } else {
      await router.push(path)
    }
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowToast(true)
    setOpen(false)
  }

  const handleWrapperClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false)
    }
  }

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
      >
        <CommandWrapper onClick={handleWrapperClick}>
          <StyledCommand>
            <StyledInput placeholder="Type a command or search..." />
            <StyledList>
              <StyledGroup heading="General">
                <StyledItem onSelect={copyLink}>
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

                <StyledItem onSelect={() => navigate('/contact')}>
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

                <StyledItem 
                  onSelect={() => navigate('https://github.com/yourusername/yourrepo')}
                >
                  <ItemContent>
                    <Lottie
                      lottieRef={sourceRef}
                      style={{ width: 24, height: 24 }}
                      animationData={sourceIcon}
                      loop={false}
                      autoplay={false}
                    />
                    <span>View Source</span>
                  </ItemContent>
                  <Shortcut><Kbd>s</Kbd></Shortcut>
                </StyledItem>
              </StyledGroup>

              <StyledGroup heading="Go To">
                <StyledItem onSelect={() => navigate('/')}>
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

                <StyledItem onSelect={() => navigate('/about')}>
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

                <StyledItem onSelect={() => navigate('/articles')}>
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

                <StyledItem onSelect={() => navigate('/projects')}>
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

                <StyledItem onSelect={() => navigate('/talks')}>
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

                <StyledItem onSelect={() => navigate('/podcasts')}>
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

                <StyledItem onSelect={() => navigate('/investing')}>
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

                <StyledItem onSelect={() => navigate('/uses')}>
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

                <StyledItem onSelect={() => navigate('/reminder')}>
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
        </CommandWrapper>
      </Command.Dialog>

      <Toast
        title="Copied :D"
        description="You can now share it with anyone."
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  )
}
const StyledCommand = styled(Command, {
  maxWidth: '600px',
  width: '100%',
  backgroundColor: '#1a1c1e',
  color: '$primary',
  borderRadius: '8px',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: 'rgba(26, 28, 30, 0.9)',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)',
  },
})

const StyledInput = styled(Command.Input, {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '$command',
  color: '$primary',
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
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    background: '$command',
  },
})

const StyledItem = styled(Command.Item, {
  padding: '12px 16px',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  cursor: 'pointer',
  color: 'rgba(255, 255, 255, 0.4)',
  '&[data-selected="true"]': {
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 1)',
  },
})

const ItemContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
})

const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '$secondary',
  padding: '4px 8px',
  textTransform: 'uppercase',
})

