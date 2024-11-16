import { readFile, readdir } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

const postsDirectory = join(process.cwd(), 'articles')

export async function getPostSlugs() {
  try {
    return await readdir(postsDirectory)
  } catch (error) {
    console.error('Error reading post slugs:', error)
    return []
  }
}

export async function getPostBySlug(slug, fields = []) {
  try {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = await readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = realSlug
      }
      if (field === 'content') {
        items[field] = content
      }
      if (data[field]) {
        items[field] = data[field]
      }
    })

    return items
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(fields = []) {
  try {
    const slugs = await getPostSlugs()
    const posts = await Promise.all(
      slugs.map((slug) => getPostBySlug(slug, fields))
    )
    
    return posts
      .filter(post => post !== null)
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  } catch (error) {
    console.error('Error getting all posts:', error)
    return []
  }
}

export async function convertMarkdownToHtml(markdown) {
  try {
    const result = await remark()
      .use(html, { sanitize: false })
      .use(prism)
      .process(markdown)
    return result.toString()
  } catch (error) {
    console.error('Error converting markdown to HTML:', error)
    return ''
  }
}
