import Link from 'next/link'
import { styled } from '../stitches.config'

export default function Footer() {
  const links = [
    {
      title: 'Email',
      url: '/contact',
      icon: 'ri-mail-line',
      isExternal: false
    },
    // {
    //   title: 'Twitter',
    //   url: '',
    //   icon: 'ri-twitter-line',
    //   isExternal: true
    // },
    {
      title: 'GitHub',
      url: 'https://github.com/GregoireGeoffroy',
      icon: 'ri-github-line',
      isExternal: true
    },
    {
      title: 'linkedin',
      url: 'https://linkedin.com/in/gregoiregeoffroy',
      icon: 'ri-linkedin-line',
      isExternal: true
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/gregoire.g',
      icon: 'ri-instagram-line',
      isExternal: true
    },
  ]

  const renderLink = (link, index) => {
    if (link.isExternal) {
      return (
        <ExternalLink key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <Title>{link.title}</Title>
          <Icon className={link.icon} />
        </ExternalLink>
      )
    }

    return (
      <InternalLink key={index} href={link.url}>
        <Title>{link.title}</Title>
        <Icon className={link.icon} />
      </InternalLink>
    )
  }

  return (
    <Container>
      {links.map(renderLink)}
    </Container>
  )
}

const Container = styled('footer', {
  background: '$background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 0',
})

const Icon = styled('i', {
  color: '$primary',
  opacity: 1,
  marginLeft: '5px',
  marginTop: '1px',
  fontSize: '24px',
  '@bp2': { opacity: 0, fontSize: '16px' },
})

const InternalLink = styled(Link, {
  color: '$secondary',
  display: 'flex',
  fontSize: '15px',
  border: 0,
  marginLeft: '20px',
  textDecoration: 'none',
  textTransform: 'lowercase',
  transition: 'color $duration ease-in-out',
  '&:hover, &:focus': {
    color: '$primary',
    opacity: 1,
  },
  [`&:hover ${Icon}`]: {
    transition: 'opacity $duration ease-in-out',
    opacity: 1,
  },
  '&:first-child': { margin: '0' },
})

const ExternalLink = styled('a', {
  color: '$secondary',
  display: 'flex',
  fontSize: '15px',
  border: 0,
  marginLeft: '20px',
  textDecoration: 'none',
  textTransform: 'lowercase',
  transition: 'color $duration ease-in-out',
  '&:hover, &:focus': {
    color: '$primary',
    opacity: 1,
  },
  [`&:hover ${Icon}`]: {
    transition: 'opacity $duration ease-in-out',
    opacity: 1,
  },
  '&:first-child': { margin: '0' },
})

const Title = styled('span', {
  display: 'none',
  '@bp2': { display: 'block' },
})
