import { styled } from '../stitches.config'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Command } from 'cmdk'
import { useCommandMenu } from '../contexts/CommandMenuContext'
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
  const { isOpen, setIsOpen } = useCommandMenu()
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

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowToast(true)
    setIsOpen(false)
  }

  const iconSize = { width: 24, height: 24 }

  if (!isOpen) return null

  return (
    <>
      <Command.Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
        label="Global Command Menu"
      >
        <StyledCommand>
          <StyledInput placeholder="Type a command or search..." autoFocus />
          <StyledList>
            <StyledGroup heading="General">
              <StyledItem onSelect={copyLink}>
                <ItemContent>
                  <Lottie
                    lottieRef={copyLinkRef}
                    style={iconSize}
                    animationData={copyLinkIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Copy Link</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>l</Kbd>
                </Shortcut>
              </StyledItem>
              
              <StyledItem onSelect={() => {
                router.push('/contact')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={emailRef}
                    style={iconSize}
                    animationData={emailIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>Send Email</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>e</Kbd>
                </Shortcut>
              </StyledItem>

              <StyledItem onSelect={() => {
                window.open('https://github.com/zenorocha/zenorocha.com', '_blank')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={sourceRef}
                    style={iconSize}
                    animationData={sourceIcon}
                    loop={false}
                    autoplay={false}
                  />
                  <span>View Source</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>s</Kbd>
                </Shortcut>
              </StyledItem>
            </StyledGroup>

            <StyledGroup heading="Go To">
              <StyledItem onSelect={() => {
                router.push('/')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={homeRef}
                    style={iconSize}
                    animationData={homeIcon}
                    loop={false}
                    autoplay={false}
                    onComplete={() => {
                      if (!isSelected) {
                        homeRef.current?.stop()
                      }
                    }}
                    data-lottie
                  />
                  <span>Home</span>
                </ItemContent>
                <Shortcut>
                  <Kbd>g</Kbd>
                  <Kbd>h</Kbd>
                </Shortcut>
              </StyledItem>

              <StyledItem onSelect={() => {
                router.push('/about')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={aboutRef}
                    style={iconSize}
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

              <StyledItem onSelect={() => {
                router.push('/articles')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={articlesRef}
                    style={iconSize}
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

              <StyledItem onSelect={() => {
                router.push('/projects')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={projectsRef}
                    style={iconSize}
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

              <StyledItem onSelect={() => {
                router.push('/talks')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={talksRef}
                    style={iconSize}
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

              <StyledItem onSelect={() => {
                router.push('/podcasts')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={podcastsRef}
                    style={iconSize}
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

              <StyledItem onSelect={() => {
                router.push('/investing')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={investingRef}
                    style={iconSize}
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

              <StyledItem onSelect={() => {
                router.push('/uses')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={usesRef}
                    style={iconSize}
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

              <StyledItem onSelect={() => {
                router.push('/reminder')
                setIsOpen(false)
              }}>
                <ItemContent>
                  <Lottie
                    lottieRef={reminderRef}
                    style={iconSize}
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
    </>
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
  '&:hover': {
    '& [data-lottie]': {
      play: true,
    },
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
