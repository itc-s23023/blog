/*
import { getAllCategories } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'

export default function Category ({ name }) {
  return (
    <Container>
      <PostHeader title={name} subtitle='Blog Category' />
    </Container>
  )
}

export async function getStaticPaths () {
  return {
    paths: ['/blog/category/technology'],
    fallback: false
  }
}

export async function getStaticProps (context) {
  const catSlug = context.params.slug
  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  return {
    props: {
      name: cat.name
    }
  }
}
*/
import { getAllCategories } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'

export default function Category ({ name }) {
  return (
    <Container>
      <PostHeader title={name} subtitle='Blog Category' />
    </Container>
  )
}

export async function getStaticPaths () {
  const allCats = await getAllCategories()
  const paths = allCats.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const catSlug = params.slug
  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  return {
    props: {
      name: cat.name
    }
  }
}
