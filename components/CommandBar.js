import { styled } from '../stitches.config'
import { Box } from './Box'
import Toast from './Toast'
import { useRef, useState, forwardRef } from 'react'
import { useRouter } from 'next/router'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
} from 'cmdk'
import Lottie from 'lottie-react'
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

export default function CommandBar(props) {
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
  const router = useRouter()
  const [showToast, setShowToast] = useState(false)
  const [open, setOpen] = useState(false)

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setShowToast(true)
  }

  const iconSize = { width: 24, height: 24 }

  const actions = [
    {
      id: 'copy',
      name: 'Copy Link',
      shortcut: ['l'],
      keywords: 'copy-link',
      section: 'General',
      perform: copyLink,
      icon: <Lottie lottieRef={copyLinkRef} style={iconSize} animationData={copyLinkIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'General',
      perform: () => router.push('/contact'),
      icon: <Lottie lottieRef={emailRef} style={iconSize} animationData={emailIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'General',
      perform: () =>
        window.open('https://github.com/zenorocha/zenorocha.com', '_blank'),
      icon: <Lottie lottieRef={sourceRef} style={iconSize} animationData={sourceIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <Lottie lottieRef={homeRef} style={iconSize} animationData={homeIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <Lottie lottieRef={aboutRef} style={iconSize} animationData={aboutIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['g', 'b'],
      keywords: 'go-articles',
      section: 'Go To',
      perform: () => router.push('/articles'),
      icon: <Lottie lottieRef={articlesRef} style={iconSize} animationData={articlesIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <Lottie lottieRef={projectsRef} style={iconSize} animationData={projectsIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'talks',
      name: 'Talks',
      shortcut: ['g', 't'],
      keywords: 'go-talks',
      section: 'Go To',
      perform: () => router.push('/talks'),
      icon: <Lottie lottieRef={talksRef} style={iconSize} animationData={talksIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'podcasts',
      name: 'Podcasts',
      shortcut: ['g', 'c'],
      keywords: 'go-podcasts',
      section: 'Go To',
      perform: () => router.push('/podcasts'),
      icon: <Lottie lottieRef={podcastsRef} style={iconSize} animationData={podcastsIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'investing',
      name: 'Investing',
      shortcut: ['g', 'i'],
      keywords: 'go-investing',
      section: 'Go To',
      perform: () => router.push('/investing'),
      icon: <Lottie lottieRef={investingRef} style={iconSize} animationData={investingIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'uses',
      name: 'Uses',
      shortcut: ['g', 'u'],
      keywords: 'go-uses',
      section: 'Go To',
      perform: () => router.push('/uses'),
      icon: <Lottie lottieRef={usesRef} style={iconSize} animationData={usesIcon} loop={false} autoplay={false} />,
    },
    {
      id: 'reminder',
      name: 'Reminder',
      shortcut: ['g', 'r'],
      keywords: 'go-reminder',
      section: 'Go To',
      perform: () => router.push('/reminder'),
      icon: <Lottie lottieRef={reminderRef} style={iconSize} animationData={reminderIcon} loop={false} autoplay={false} />,
    },
  ]

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

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => router.push('/')}>
                Home
              </CommandItem>
              {/* Add other navigation items */}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>

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
