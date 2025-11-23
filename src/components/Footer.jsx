import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">BiggVentures</h3>
            <p className="text-slate-400 text-sm">
              The OS Universe for Startups. A coordinated stack of AI-native systems that takes you from "I want to build" to "we scaled globally."
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-purple-400 transition">About</Link></li>
              <li><Link to="/startups" className="hover:text-purple-400 transition">Startups</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Core Systems</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/biggmate" className="hover:text-purple-400 transition">BiggMate</Link></li>
              <li><Link to="/startupos" className="hover:text-purple-400 transition">StartupOS</Link></li>
              <li><Link to="/easyfreezone" className="hover:text-purple-400 transition">EasyFreezone</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Growth & Expansion</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/biggwork" className="hover:text-purple-400 transition">BiggWork</Link></li>
              <li><Link to="/zerohuman" className="hover:text-purple-400 transition">Zerohuman</Link></li>
              <li><Link to="/expandos" className="hover:text-purple-400 transition">ExpandOS</Link></li>
              <li><Link to="/finanshels" className="hover:text-purple-400 transition">Finanshels</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Life & Wellness</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/mealverse" className="hover:text-purple-400 transition">Mealverse</Link></li>
              <li><Link to="/healthos" className="hover:text-purple-400 transition">HealthOS</Link></li>
              <li><Link to="/biggdate" className="hover:text-purple-400 transition">Biggdate</Link></li>
              <li><Link to="/biggself" className="hover:text-purple-400 transition">BiggSelf</Link></li>
              <li><Link to="/biggfam" className="hover:text-purple-400 transition">BiggFam</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">© 2025 BiggVentures Universe. Building the future of startup infrastructure.</p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link to="/about" className="hover:text-purple-400 transition">Privacy</Link>
              <Link to="/contact" className="hover:text-purple-400 transition">Terms</Link>
              <Link to="/contact" className="hover:text-purple-400 transition">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
