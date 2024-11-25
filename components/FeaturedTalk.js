import { useState } from 'react'
import Image from 'next/image'
import { styled } from '../stitches.config'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FeaturedTalk(props) {
  const { talk } = props

  return (
    <TalkLink 
      href={talk.presentations[0].video}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Animation index={props.index}>
        <Content>
          <ImageContainer>
            <Image src={talk.cover} alt={talk.title} width="250" height="138" />
          </ImageContainer>
          <div>
            <Title css={{ margin: 0 }}>{talk.presentations[0].title}</Title>
            <Paragraph>{talk.where}</Paragraph>
            <Paragraph>{talk.title}</Paragraph>
          </div>
        </Content>
      </Animation>
    </TalkLink>
  )
}

function Animation(props) {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === props.index

  return (
    <AnimContainer
      onHoverStart={() => setHovered(props.index)}
      onHoverEnd={() => setHovered('')}
    >
      {isHovered && (
        <AnimHovered
          layoutId="featuredTalks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {props.children}
    </AnimContainer>
  )
}

const TalkLink = styled('a', {
  marginTop: 20,
  border: 0,
  textDecoration: 'none',
  '&:first-child': { marginLeft: 0 },
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  '@bp2': { flexDirection: 'row', height: 140 },
})

const ImageContainer = styled('div', {
  marginRight: '20px',
  width: '250px',
  '& img': { filter: 'grayscale(1)' },
})

const Title = styled('h3', {
  color: '$primary',
  fontSize: '18px',
  margin: '0',
})

const Paragraph = styled('p', {
  color: '$secondary',
  margin: '0',
})

const AnimContainer = styled(motion.div, {
  padding: '20px',
  position: 'relative',
  width: '100%',
})

const AnimHovered = styled(motion.div, {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  background: '$hover',
  borderRadius: '$borderRadius',
  zIndex: -1,
})
