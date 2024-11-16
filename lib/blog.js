import { readFile, readdir } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

const postsDirectory = join(process.cwd(), 'articles')

export async function getPostSlugs() {
  return await readdir(postsDirectory)
}

export async function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = await readFile(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  fields.forEach(field => {
    if (field === 'slug') items[field] = realSlug
    if (field === 'content') items[field] = content
    if (data[field]) items[field] = data[field]
  })

  return items
}

export async function getAllPosts(fields = []) {
  const slugs = await getPostSlugs()
  const posts = await Promise.all(
    slugs.map(slug => getPostBySlug(slug, fields))
  )
  return posts.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
}

export async function convertMarkdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown)
  return result.toString()
}
