import Container from 'components/container'
import Hero from 'components/hero'
const props = { title: 'Blog', subtitle: 'Recent Posts' }
const Home = () => {
  return (
    <Container>
    <>
      <Hero {...props} />
    </>
    </Container>
  )
}

export default Home
