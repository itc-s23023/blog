import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
const props = {
  title: 'CUBE',
  subtitle: 'アウトプットしていくサイト',
  imageOn: true
}
const Home = () => {
  return (
    <Container>
      <>
        <Meta />
        <Hero {...props} />
      </>
    </Container>
  )
}

export default Home
