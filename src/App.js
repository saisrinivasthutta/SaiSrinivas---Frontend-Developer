import Home from './components/Home'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import Tokenomics from './components/Tokenomics'
import RoadmapSection from './components/RoadmapSection'
import Footer from './components/Footer'

import './App.css'

const App = () => (
  <>
    <Home />
    <section id="features">
      <FeaturesSection />
    </section>
    <section id="why-us">
      <AboutSection />
    </section>
    <section id="tokenomics">
      <Tokenomics />
    </section>
    <section id="roadmap">
      <RoadmapSection />
    </section>
    <Footer />
  </>
)

export default App
