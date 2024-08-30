import { useState } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}

export default App
