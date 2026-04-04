import React from 'react'
import Navbar from './components/Navbar'
import HeroSection  from './components/HeroSection'
import FeatureCardsSection from './components/FeatureCardsSection'
import StatsSection from './components/StatsSection'
import WhyChooseSection from './components/WhyChooseSection'
import PracticesSection from './components/PracticesSection'
import ResourcesSection from './components/ResourcesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeatureCardsSection/>
      <StatsSection/>
      <WhyChooseSection/>
      <PracticesSection/>
      <ResourcesSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App