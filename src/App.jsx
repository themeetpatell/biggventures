import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CinematicBackground from './components/CinematicBackground'
import CursorSpotlight from './components/CursorSpotlight'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Startup from './pages/Startup'
import BiggMate from './pages/BiggMate'
import BiggWork from './pages/BiggWork'
import StartupOS from './pages/StartupOS'
import Zerohuman from './pages/Zerohuman'
import ExpandOS from './pages/ExpandOS'
import Mealverse from './pages/Mealverse'
import HealthOS from './pages/HealthOS'
import BiggSelf from './pages/BiggSelf'
import BiggVentures from './pages/BiggVentures'
import BiggFam from './pages/BiggFam'

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <CinematicBackground />
      <CursorSpotlight />
      <ScrollProgress />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/startups" element={<Startup />} />
        <Route path="/biggmate" element={<BiggMate />} />
        <Route path="/biggwork" element={<BiggWork />} />
        <Route path="/startupos" element={<StartupOS />} />
        <Route path="/zerohuman" element={<Zerohuman />} />
        <Route path="/expandos" element={<ExpandOS />} />
        <Route path="/mealverse" element={<Mealverse />} />
        <Route path="/healthos" element={<HealthOS />} />
        <Route path="/biggself" element={<BiggSelf />} />
        <Route path="/biggfam" element={<BiggFam />} />
        <Route path="/biggventures" element={<BiggVentures />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
