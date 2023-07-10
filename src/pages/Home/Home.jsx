import React from 'react'
import HeroSection from '../../components/HeroSection'
import Footer from '../../components/Footer'
import Cards from '../../components/Cards'
import About from '../../components/About'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home