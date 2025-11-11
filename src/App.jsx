import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Startup from './pages/Startup'
import Biggdate from './pages/Biggdate'
import EasyFreezone from './pages/EasyFreezone'
import Finanshels from './pages/Finanshels'
import PeopleOS from './pages/PeopleOS'
import StartupOS from './pages/StartupOS'
import Zerohuman from './pages/Zerohuman'
import ExpandOS from './pages/ExpandOS'
import Mealverse from './pages/Mealverse'
import RelationOS from './pages/RelationOS'
import HealthOS from './pages/HealthOS'
import LifeOS from './pages/LifeOS'
import Biggbizz from './pages/Biggbizz'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/startups" element={<Startup />} />
        <Route path="/biggdate" element={<Biggdate />} />
        <Route path="/easyfreezone" element={<EasyFreezone />} />
        <Route path="/finanshels" element={<Finanshels />} />
        <Route path="/peopleos" element={<PeopleOS />} />
        <Route path="/startupos" element={<StartupOS />} />
        <Route path="/zerohuman" element={<Zerohuman />} />
        <Route path="/expandos" element={<ExpandOS />} />
        <Route path="/mealverse" element={<Mealverse />} />
        <Route path="/relationos" element={<RelationOS />} />
        <Route path="/healthos" element={<HealthOS />} />
        <Route path="/lifeos" element={<LifeOS />} />
        <Route path="/biggbizz" element={<Biggbizz />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

