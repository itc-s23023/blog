import Hero from 'components/hero'
const props = { title: 'About', subtitle: 'About development activities' }
const About = () => {
  return (
    <>
      <Hero {...props} />
    </>
  )
}

export default About
