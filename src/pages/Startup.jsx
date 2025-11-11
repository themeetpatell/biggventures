import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const startups = [
  {
    path: '/biggdate',
    url: 'https://www.biggdate.com',
    title: 'Biggdate',
    tagline: 'The spark',
    description: 'Co-foundership engine. Match by intent, values, and complementary skills. Start building on day one with aligned partners and a shared startup room.',
    color: 'from-pink-500 to-rose-500',
    features: ['AI-powered matching', 'Shared startup room', 'Values alignment', 'Complementary skills matching'],
  },
  {
    path: '/easyfreezone',
    url: 'https://www.easyfreezonesetup.com',
    title: 'EasyFreezone',
    tagline: 'The gateway',
    description: 'UAE launch hub. Incorporate, get your trade license, bank, and compliance pack. From application to activation—fast, guided, and audit-ready.',
    color: 'from-blue-500 to-cyan-500',
    features: ['Fast incorporation', 'Trade license', 'Banking setup', 'Compliance pack'],
  },
  {
    path: '/finanshels',
    url: 'https://www.finanshels.com',
    title: 'Finanshels',
    tagline: 'The financial backbone',
    description: 'Accounting, tax, compliance—automated and monitored. Close books, file on time, monitor cash and VAT, see true runway in real time.',
    color: 'from-green-500 to-emerald-500',
    features: ['Automated accounting', 'Tax compliance', 'Cash monitoring', 'VAT management'],
  },
  {
    path: '/peopleos',
    title: 'PeopleOS',
    tagline: 'The talent engine',
    description: 'Hire fast, train faster. Role scorecards, AI interviews, onboarding blueprints, and continuous micro-learning tied to business outcomes.',
    color: 'from-purple-500 to-violet-500',
    features: ['Role scorecards', 'AI interviews', 'Onboarding blueprints', 'Micro-learning'],
  },
  {
    path: '/startupos',
    url: 'https://www.startupos.in',
    title: 'StartupOS',
    tagline: 'The growth core',
    description: 'AI Co-Builders + execution systems. Strategy engines, IMPACTS model, growth playbooks, revenue acceleration, customer success, and data intelligence.',
    color: 'from-orange-500 to-red-500',
    features: ['AI Co-Builders', 'Strategy engines', 'Growth playbooks', 'Data intelligence'],
  },
  {
    path: '/zerohuman',
    url: 'https://www.zerohuman.co',
    title: 'Zerohuman',
    tagline: 'The distribution power',
    description: 'AI-driven audience growth. Creative generation, multichannel orchestration, and performance insights that compound reach.',
    color: 'from-indigo-500 to-purple-500',
    features: ['Creative generation', 'Multichannel orchestration', 'Performance insights', 'Audience growth'],
  },
  {
    path: '/expandos',
    title: 'ExpandOS',
    tagline: 'The expansion layer',
    description: 'Capital, M&A, and strategic growth. Fundraising command, cap table, investor network, and acquisition workflows.',
    color: 'from-yellow-500 to-amber-500',
    features: ['Fundraising command', 'Cap table management', 'Investor network', 'M&A workflows'],
  },
  {
    path: '/mealverse',
    url: 'https://mealverse.in',
    title: 'Mealverse',
    tagline: "The team's fuel supply",
    description: 'Healthy, homemade food at work. Predictive meal planning, nutrition dashboards, and seamless ops for offices.',
    color: 'from-teal-500 to-green-500',
    features: ['Predictive meal planning', 'Nutrition dashboards', 'Seamless operations', 'Healthy meals'],
  },
  {
    path: '/relationos',
    title: 'RelationOS',
    tagline: 'Because builders are human',
    description: 'AI for real relationships. Dating and marriage support that respects intent, values, and long-term compatibility.',
    color: 'from-pink-500 to-purple-500',
    features: ['Intent-based matching', 'Values alignment', 'Long-term compatibility', 'Relationship support'],
  },
  {
    path: '/healthos',
    title: 'HealthOS',
    tagline: 'Stay in the game',
    description: 'Preventive health and longevity. Continuous monitoring, early warnings, and personalized protocols for founders and teams.',
    color: 'from-red-500 to-pink-500',
    features: ['Continuous monitoring', 'Early warnings', 'Personalized protocols', 'Longevity focus'],
  },
  {
    path: '/lifeos',
    title: 'LifeOS',
    tagline: 'Your legacy vault',
    description: 'A Swiss-style home for memories, identity, and intangible assets. Preserve, prove, and pass on what matters.',
    color: 'from-slate-500 to-gray-500',
    features: ['Memory preservation', 'Identity protection', 'Intangible assets', 'Legacy transfer'],
  },
  {
    path: '/biggbizz',
    title: 'Biggbizz',
    tagline: 'The connective tissue',
    description: 'The community that connects it all. Founders, operators, investors, mentors—programs, deals, and peer accountability.',
    color: 'from-purple-500 to-pink-500',
    features: ['Peer networks', 'Programs', 'Exclusive deals', 'Accountability'],
  },
]

const Startup = () => {
  return (
    <div className="pt-16 min-h-screen">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            <span className="text-gradient">Our Startups</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto"
          >
            Explore each brand in the Biggbizz Universe
          </motion.p>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.path}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-3xl p-8 md:p-12 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              {startup.url ? (
                <a
                  href={startup.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${startup.color} mb-6 flex items-center justify-center text-4xl font-black text-white`}>
                        {startup.title[0]}
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span className={`bg-gradient-to-r ${startup.color} bg-clip-text text-transparent`}>
                          {startup.title}
                        </span>
                      </h2>
                      
                      <p className="text-xl font-bold mb-4 text-slate-300">
                        {startup.tagline}
                      </p>
                      
                      <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                        {startup.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {startup.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-white/5 rounded-full text-sm text-slate-300 border border-white/10"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition">
                        Visit Website →
                      </span>
                    </div>
                    
                    <div className={`h-64 md:h-80 rounded-2xl bg-gradient-to-br ${startup.color} opacity-20 flex items-center justify-center`}>
                      <div className="text-6xl md:text-8xl font-black text-white/30">
                        {startup.title[0]}
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <Link to={startup.path} className="block">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${startup.color} mb-6 flex items-center justify-center text-4xl font-black text-white`}>
                        {startup.title[0]}
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span className={`bg-gradient-to-r ${startup.color} bg-clip-text text-transparent`}>
                          {startup.title}
                        </span>
                      </h2>
                      
                      <p className="text-xl font-bold mb-4 text-slate-300">
                        {startup.tagline}
                      </p>
                      
                      <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                        {startup.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        {startup.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-white/5 rounded-full text-sm text-slate-300 border border-white/10"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition">
                        Learn More →
                      </span>
                    </div>
                    
                    <div className={`h-64 md:h-80 rounded-2xl bg-gradient-to-br ${startup.color} opacity-20 flex items-center justify-center`}>
                      <div className="text-6xl md:text-8xl font-black text-white/30">
                        {startup.title[0]}
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            to="/"
            className="inline-block px-8 py-4 glass-effect rounded-xl hover:bg-white/10 transition text-lg font-semibold"
          >
            ← Back to Universe
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Startup

