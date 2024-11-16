import { styled } from '../stitches.config'
import { motion } from 'framer-motion'

export const ListGroup = styled(motion.div, {
  marginBottom: '2rem',
  
  '.list-item': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    color: 'inherit',
    textDecoration: 'none',
    
    '&:hover': {
      color: '$primary',
    },
  },
  
  '.title': {
    marginRight: '1rem',
  },
})
