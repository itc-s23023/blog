import { getAllPosts } from 'lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

/*
const props = {
  title: 'CUBE',
  subtitle: 'アウトプットしていくサイト',
  imageOn: true
}
const Home = ({ posts }) => {
  return (
    <Container>
        <Meta />
        <Hero {...props} />
      <Posts posts={posts} />
    <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container> 
  )
}
*/

export default function Home ({ posts }) {
  return (
    <Container>
      <Meta />

      <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl='/blog' nextText='More Posts' />
    </Container>
  )
}

const getStaticProps = async () => {
  const allPosts = await getAllPosts()
  const posts = allPosts.slice(0, 4)
  for (const post of posts) {
    if (!('eyecatch' in post)) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }
  return {
    props: {
      posts
    }
  }
}

//  export default Home
export { getStaticProps }
