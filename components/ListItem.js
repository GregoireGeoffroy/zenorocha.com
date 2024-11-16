import { motion } from 'framer-motion'
import Link from 'next/link'
import BlogDate from './BlogDate'

export default function ListItem({ href, title, date, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1
      }}
    >
      <Link href={href} className="list-item">
        <span className="title">{title}</span>
        {date && <BlogDate dateString={date} />}
      </Link>
    </motion.div>
  )
}
