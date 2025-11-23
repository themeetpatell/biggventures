import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Startup from './pages/Startup'
import BiggMate from './pages/BiggMate'
import EasyFreezone from './pages/EasyFreezone'
import Finanshels from './pages/Finanshels'
import BiggWork from './pages/BiggWork'
import StartupOS from './pages/StartupOS'
import Zerohuman from './pages/Zerohuman'
import ExpandOS from './pages/ExpandOS'
import Mealverse from './pages/Mealverse'
import Biggdate from './pages/Biggdate'
import HealthOS from './pages/HealthOS'
import BiggSelf from './pages/BiggSelf'
import BiggVentures from './pages/BiggVentures'
import BiggFam from './pages/BiggFam'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/startups" element={<Startup />} />
        <Route path="/biggmate" element={<BiggMate />} />
        <Route path="/easyfreezone" element={<EasyFreezone />} />
        <Route path="/finanshels" element={<Finanshels />} />
        <Route path="/biggwork" element={<BiggWork />} />
        <Route path="/startupos" element={<StartupOS />} />
        <Route path="/zerohuman" element={<Zerohuman />} />
        <Route path="/expandos" element={<ExpandOS />} />
        <Route path="/mealverse" element={<Mealverse />} />
        <Route path="/biggdate" element={<Biggdate />} />
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
