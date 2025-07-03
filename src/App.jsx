import { useState } from 'react'
import './App.css'
import './styles/styles.css'
import HeaderSection from './components/HeaderSection'
import HeroSection from './components/HeroSection'
import UrlShortenerSection from './components/UrlShortenerSection'
import StatisticsSection from './components/StatisticsSection'
import BoostSection from './components/BoostSection'
import FooterSection from './components/FooterSection'


function App() {
  

  return (
    <>
      <HeaderSection />

      <div>
        <HeroSection />
        <UrlShortenerSection />
        <StatisticsSection />
        <BoostSection />
      </div>

      <FooterSection />
    </>
  )
}

export default App
