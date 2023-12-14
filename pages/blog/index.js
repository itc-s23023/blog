import Hero from 'components/hero'
const props = { title: 'Blog', subtitle: 'Recent Posts' }
const Home = () => {
  return (
    <>
      <Hero {...props} />
    </>
  )
}

export default Home
