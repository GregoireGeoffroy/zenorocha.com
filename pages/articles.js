import { styled } from '../stitches.config'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { getAllPosts, getPostBySlug } from '../lib/blog'
import ListItem from '../components/ListItem'
import FeaturedArticle from '../components/FeaturedArticle'
import { ListGroup } from '../components/ListGroup'
import { LayoutGroup } from 'framer-motion'

export async function getStaticProps() {
  try {
    const allPosts = await getAllPosts(['date', 'skip', 'slug', 'title'])

    const featuredParams = [
      'date',
      'slug',
      'title',
      'image',
      'content',
      'description',
    ]

    // Wait for all featured posts to resolve
    const featuredPosts = await Promise.all([
      getPostBySlug('my-first-post', featuredParams), // Replace with your actual post slugs
      getPostBySlug('another-post', featuredParams),  // Replace with your actual post slugs
    ])

    return {
      props: {
        title: 'Articles // Your Name',
        tagline: 'Stories. Updates. Guides.',
        image: '/static/images/articles-bw.jpg',
        primaryColor: 'yellow',
        secondaryColor: 'pink',
        featuredPosts: featuredPosts || [], // Provide fallback empty array
        allPosts: allPosts || [],           // Provide fallback empty array
      },
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    // Return minimal props if there's an error
    return {
      props: {
        title: 'Articles // Your Name',
        tagline: 'Stories. Updates. Guides.',
        image: '/static/images/articles-bw.jpg',
        primaryColor: 'yellow',
        secondaryColor: 'pink',
        featuredPosts: [],
        allPosts: [],
      },
    }
  }
}

function Articles(props) {
  const { title, tagline, image, primaryColor, secondaryColor, featuredPosts, allPosts } = props

  return (
    <Base
      title={title}
      description={tagline}
      image={image}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <LayoutGroup>
        <FeaturedArticles>
          {featuredPosts?.map((post, index) => (
            <FeaturedArticle
              key={post.slug}
              index={index}
              href={`/articles/${post.slug}`}
              {...post}
            />
          ))}
        </FeaturedArticles>
        <ListGroup>
          {allPosts?.map((post) => (
            <ListItem
              key={post.slug}
              href={`/articles/${post.slug}`}
              title={post.title}
              date={post.date}
            />
          ))}
        </ListGroup>
      </LayoutGroup>
    </Base>
  )
}

export default Articles

const FeaturedArticles = styled('div', {
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: '1fr',
  '@bp2': { gridTemplateColumns: '1fr 1fr' },
})
