import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const brands = [
  {
    path: '/biggdate',
    url: 'https://www.biggdate.com',
    title: 'Biggdate',
    tagline: 'The spark',
    description: 'Co-foundership engine. Match by intent, values, and complementary skills. Start building on day one with aligned partners and a shared startup room.',
    color: 'from-pink-500 to-rose-500',
    isExternal: true,
  },
  {
    path: '/easyfreezone',
    url: 'https://www.easyfreezonesetup.com',
    title: 'EasyFreezone',
    tagline: 'The gateway',
    description: 'UAE launch hub. Incorporate, get your trade license, bank, and compliance pack. From application to activation—fast, guided, and audit-ready.',
    color: 'from-blue-500 to-cyan-500',
    isExternal: true,
  },
  {
    path: '/finanshels',
    url: 'https://www.finanshels.com',
    title: 'Finanshels',
    tagline: 'The financial backbone',
    description: 'Accounting, tax, compliance—automated and monitored. Close books, file on time, monitor cash and VAT, see true runway in real time.',
    color: 'from-green-500 to-emerald-500',
    isExternal: true,
  },
  {
    path: '/peopleos',
    title: 'PeopleOS',
    tagline: 'The talent engine',
    description: 'Hire fast, train faster. Role scorecards, AI interviews, onboarding blueprints, and continuous micro-learning tied to business outcomes.',
    color: 'from-purple-500 to-violet-500',
    isExternal: false,
  },
  {
    path: '/startupos',
    url: 'https://www.startupos.in',
    title: 'StartupOS',
    tagline: 'The growth core',
    description: 'AI Co-Builders + execution systems. Strategy engines, IMPACTS model, growth playbooks, revenue acceleration, customer success, and data intelligence.',
    color: 'from-orange-500 to-red-500',
    isExternal: true,
  },
  {
    path: '/zerohuman',
    url: 'https://www.zerohuman.co',
    title: 'Zerohuman',
    tagline: 'The distribution power',
    description: 'AI-driven audience growth. Creative generation, multichannel orchestration, and performance insights that compound reach.',
    color: 'from-indigo-500 to-purple-500',
    isExternal: true,
  },
  {
    path: '/expandos',
    title: 'ExpandOS',
    tagline: 'The expansion layer',
    description: 'Capital, M&A, and strategic growth. Fundraising command, cap table, investor network, and acquisition workflows.',
    color: 'from-yellow-500 to-amber-500',
    isExternal: false,
  },
  {
    path: '/mealverse',
    url: 'https://mealverse.in',
    title: 'Mealverse',
    tagline: "The team's fuel supply",
    description: 'Healthy, homemade food at work. Predictive meal planning, nutrition dashboards, and seamless ops for offices.',
    color: 'from-teal-500 to-green-500',
    isExternal: true,
  },
  {
    path: '/relationos',
    title: 'RelationOS',
    tagline: 'Because builders are human',
    description: 'AI for real relationships. Dating and marriage support that respects intent, values, and long-term compatibility.',
    color: 'from-pink-500 to-purple-500',
    isExternal: false,
  },
  {
    path: '/healthos',
    title: 'HealthOS',
    tagline: 'Stay in the game',
    description: 'Preventive health and longevity. Continuous monitoring, early warnings, and personalized protocols for founders and teams.',
    color: 'from-red-500 to-pink-500',
    isExternal: false,
  },
  {
    path: '/lifeos',
    title: 'LifeOS',
    tagline: 'Your legacy vault',
    description: 'A Swiss-style home for memories, identity, and intangible assets. Preserve, prove, and pass on what matters.',
    color: 'from-slate-500 to-gray-500',
    isExternal: false,
  },
  {
    path: '/biggbizz',
    title: 'Biggbizz',
    tagline: 'The connective tissue',
    description: 'The community that connects it all. Founders, operators, investors, mentors—programs, deals, and peer accountability.',
    color: 'from-purple-500 to-pink-500',
    isExternal: false,
  },
]

const investors = [
  { name: 'In5 Dubai', logo: null, website: 'https://in5.ae', isText: true },
  { name: '24six9', logo: 'https://24six9.com/logo.png', website: 'https://24six9.com' },
  { name: 'Y Combinator', logo: 'https://www.ycombinator.com/static/logo-yc-7b0c0e0c2b0c0e0c2b0c0e0c2b0c0e0c2.png', website: 'https://www.ycombinator.com' },
  { name: 'Headstart', logo: 'https://headstart.in/logo.png', website: 'https://headstart.in' },
  { name: 'Xartup', logo: 'https://xartup.com/logo.png', website: 'https://xartup.com' },
  { name: 'IIM-A', logo: 'https://www.iima.ac.in/sites/default/files/iima-logo.png', website: 'https://www.iima.ac.in' },
]
const testimonials = [
  { name: 'Sarah Chen', role: 'Founder, TechFlow', quote: 'Biggbizz transformed how we build. From finding co-founders to scaling globally—everything in one universe.' },
  { name: 'Marcus Rodriguez', role: 'CEO, GrowthLabs', quote: 'The integrated approach is game-changing. We went from idea to Series A in 18 months.' },
  { name: 'Priya Patel', role: 'Co-founder, HealthTech AI', quote: 'Finally, a platform that understands founders are human. Business, health, relationships—all covered.' },
  { name: 'David Kim', role: 'Founder, CloudScale', quote: 'The automation tools saved us hundreds of hours. We can focus on building instead of paperwork.' },
  { name: 'Emma Thompson', role: 'CEO, DataVault', quote: 'Found our perfect co-founder through Biggdate. The matching algorithm is incredible.' },
  { name: 'James Wilson', role: 'Co-founder, FinTech Pro', quote: 'From UAE incorporation to global expansion—EasyFreezone made it seamless.' },
  { name: 'Lisa Zhang', role: 'Founder, AI Innovations', quote: 'The community support is unmatched. Found mentors, investors, and partners all in one place.' },
]

const TestimonialSlider = ({ testimonials }) => {
  const cardWidth = 420
  const gap = 24
  const scrollSpeed = 0.5

  useEffect(() => {
    const scrollContainer = document.getElementById('testimonial-scroll')
    if (!scrollContainer) return

    let animationFrameId
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += scrollSpeed
      const totalWidth = testimonials.length * (cardWidth + gap)
      
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [testimonials.length, cardWidth, gap, scrollSpeed])

  const gradientColors = [
    'from-pink-500 to-rose-500',
    'from-purple-500 to-violet-500',
    'from-blue-500 to-cyan-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-teal-500 to-cyan-500',
  ]

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <div className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-purple-950/20 sm:from-purple-950/30 md:from-purple-950/50 via-purple-950/10 sm:via-purple-950/15 md:via-purple-950/20 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-purple-950/20 sm:from-purple-950/30 md:from-purple-950/50 via-purple-950/10 sm:via-purple-950/15 md:via-purple-950/20 to-transparent z-20 pointer-events-none" />
      
      <div className="relative h-full overflow-hidden">
        <div
          id="testimonial-scroll"
          className="flex gap-4 sm:gap-6 px-4 sm:px-8 md:px-16 h-full items-center"
          style={{ width: 'max-content' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => {
            const gradient = gradientColors[index % gradientColors.length]
            
            return (
            <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px]"
              >
                <div className="glass-effect rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 h-full border-2 border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden group cursor-pointer">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${gradient}`} />
                  
                  <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-purple-500/20 mb-3 md:mb-4 font-serif leading-none">
                      "
                    </div>
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed font-light mb-4 md:mb-6">
                        {testimonial.quote}
                    </p>
                  </div>
                  
                    <div className="flex items-center gap-4 md:gap-5 pt-4 md:pt-6 border-t border-white/10">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-xl sm:text-2xl font-black text-white shadow-lg flex-shrink-0`}>
                        {testimonial.name[0]}
                    </div>
                    <div>
                        <div className="font-black text-lg sm:text-xl md:text-2xl text-white mb-1">
                          {testimonial.name}
                      </div>
                        <div className="text-sm sm:text-base md:text-lg text-slate-400">
                          {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            )
          })}
                  </div>
      </div>
    </div>
  )
}

const AutoSlider = ({ brands }) => {
  const [isPaused, setIsPaused] = useState(false)
  const [cardWidth, setCardWidth] = useState(450)
  const gap = 24

  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 640) {
        setCardWidth(320)
      } else if (window.innerWidth < 768) {
        setCardWidth(380)
      } else if (window.innerWidth < 1024) {
        setCardWidth(420)
      } else {
        setCardWidth(450)
      }
    }
    
    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])

  // Duplicate brands array for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands]
  const totalWidth = brands.length * (cardWidth + gap)

  return (
    <div 
      className="relative w-screen h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden"
      style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-slate-950 to-pink-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_70%)]" />
      
      {/* Left Gradient Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-48 bg-gradient-to-r from-purple-950/40 sm:from-purple-950/60 md:from-purple-950 via-purple-950/40 sm:via-purple-950/60 md:via-purple-950/80 to-transparent z-20 pointer-events-none" />
      
      {/* Right Gradient Fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 lg:w-48 bg-gradient-to-l from-purple-950/40 sm:from-purple-950/60 md:from-purple-950 via-purple-950/40 sm:via-purple-950/60 md:via-purple-950/80 to-transparent z-20 pointer-events-none" />

      <div className="relative h-full flex items-center overflow-hidden py-8">
      <motion.div
          className="flex gap-6 h-full items-center"
          animate={{
            x: isPaused ? undefined : [0, -totalWidth],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: brands.length * 12,
              ease: "linear",
            },
          }}
          style={{ width: 'max-content' }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={`${brand.path}-${index}`}
              whileHover={{ scale: 1.05, y: -8 }}
              className="flex-shrink-0"
              style={{ width: `${cardWidth}px` }}
            >
              {brand.isExternal && brand.url ? (
                <a 
                  href={brand.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="glass-effect rounded-2xl p-6 md:p-8 h-full border-2 border-white/20 hover:border-white/40 transition-all duration-500 group cursor-pointer relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-4xl md:text-5xl font-black text-white shadow-xl mb-5 flex-shrink-0 relative`}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${brand.color} opacity-30`}
                        />
                        <span className="relative z-10">{brand.title[0]}</span>
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-3xl md:text-4xl font-black mb-2 group-hover:text-gradient transition-all duration-500 leading-tight">
                          {brand.title}
                  </h3>
                  
                        <p className="text-lg md:text-xl text-purple-400 mb-3 font-bold">
                          {brand.tagline}
                  </p>
                  
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-5 flex-1 font-light">
                          {brand.description}
                  </p>
                  
                        <div className="text-purple-400 text-base md:text-lg font-bold group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2">
                          Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>
                </a>
              ) : (
                <Link to={brand.path}>
                  <div className="glass-effect rounded-2xl p-6 md:p-8 h-full border-2 border-white/20 hover:border-white/40 transition-all duration-500 group cursor-pointer relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon */}
        <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-4xl md:text-5xl font-black text-white shadow-xl mb-5 flex-shrink-0 relative`}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${brand.color} opacity-30`}
                        />
                        <span className="relative z-10">{brand.title[0]}</span>
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-3xl md:text-4xl font-black mb-2 group-hover:text-gradient transition-all duration-500 leading-tight">
                          {brand.title}
                        </h3>
                        
                        <p className="text-lg md:text-xl text-purple-400 mb-3 font-bold">
                          {brand.tagline}
                        </p>
                        
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-5 flex-1 font-light">
                          {brand.description}
                        </p>
                        
                        <div className="text-purple-400 text-base md:text-lg font-bold group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2">
                          Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

const Home = () => {
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div className="pt-16">
      {/* Hero Section - Epic Teaser */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ opacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-slate-950 to-purple-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.4),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(96,165,250,0.2),transparent_50%)]" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100
          const randomY = Math.random() * 100
          const randomDelay = Math.random() * 5
          const randomDuration = 10 + Math.random() * 10
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-purple-400/30"
              initial={{
                x: `${randomX}%`,
                y: `${randomY}%`,
              }}
              animate={{
                y: [`${randomY}%`, `${(randomY + 30) % 100}%`, `${randomY}%`],
                x: [`${randomX}%`, `${(randomX + 20) % 100}%`, `${randomX}%`],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
              }}
            />
          )
        })}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated Logo/Title */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 pt-16 md:pt-24"
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-9xl lg:text-[14rem] font-black leading-none mb-4"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: "linear-gradient(90deg, #a855f7, #ec4899, #60a5fa, #a855f7)",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Biggbizz
            </motion.h1>
          </motion.div>
          
          {/* Mystery Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mb-12"
          >
            <motion.p
              className="text-2xl md:text-4xl font-bold text-slate-300 mb-4"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              What if building a startup was as simple as...
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              {['Finding your co-founder', 'Launching globally', 'Scaling infinitely'].map((text, i) => (
                <motion.span
                  key={text}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.8 + i * 0.2, type: "spring" }}
                  className="px-6 py-3 glass-effect rounded-full text-lg md:text-xl font-semibold border border-white/20"
                >
                  {text}
                </motion.span>
              ))}
            </motion.div>
            <motion.p
              className="text-xl md:text-3xl text-purple-400 font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              Scroll to discover the universe ↓
            </motion.p>
          </motion.div>

          {/* Preview Cards Floating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex justify-center gap-4 mb-16"
          >
            {[
              { letter: 'O', color: 'from-purple-500 to-pink-500' },
              { letter: 'S', color: 'from-blue-500 to-cyan-500' },
              { letter: 'U', color: 'from-indigo-500 to-purple-500' },
            ].map((item, i) => (
              <motion.div
                key={item.letter}
                initial={{ y: 100, opacity: 0, rotate: -20 }}
                animate={{ 
                  y: [null, -20, 0],
                  rotate: [null, 5, -5, 0],
                  opacity: 0.6,
                }}
                transition={{
                  delay: 2.2 + i * 0.2,
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                }}
                whileHover={{ scale: 1.2, opacity: 1, zIndex: 10 }}
                className="cursor-pointer"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl md:text-3xl font-black text-white shadow-xl`}>
                  {item.letter}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="flex gap-6 justify-center"
          >
            <Link
              to="/startups"
              className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Operating System Universe</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </Link>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-purple-400 font-semibold">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center p-2"
              animate={{ borderColor: ['rgba(168, 85, 247, 0.5)', 'rgba(168, 85, 247, 1)', 'rgba(168, 85, 247, 0.5)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-purple-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Video Section - Fully Edge-to-Edge */}
      <div className="w-screen relative" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
        <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[90vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.4),transparent_70%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 flex items-center justify-center group cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-2xl cursor-pointer"
                >
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-white/40"
                  />
                  <svg className="w-16 h-16 md:w-20 md:h-20 text-white ml-2 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </motion.button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black/95 via-black/85 to-transparent">
                <p className="text-white text-3xl md:text-5xl font-bold mb-3">Video: The Biggbizz Story</p>
                <p className="text-white/90 text-lg md:text-2xl">Watch how we're building the operating system for the next generation of startups</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Why We Exist - Cinematic */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/50 to-slate-950" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-12 text-gradient leading-tight">
              Why We Exist
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-light px-4">
              Building a startup shouldn't mean reinventing the wheel at every stage. 
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-4xl mx-auto mt-6 md:mt-8 leading-relaxed px-4">
              We exist to give founders the infrastructure they need to focus on what matters: <span className="text-gradient font-bold">building</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem - Challenges Section - Full Width */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-purple-950/30 to-blue-950/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 md:mb-20 text-center text-gradient px-4"
          >
            The Challenges
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              { title: 'Fragmented Tools', desc: 'Too many disconnected platforms. No single source of truth.', icon: '🔀', color: 'from-red-500 to-orange-500' },
              { title: 'Wasted Time', desc: 'Founders spend 60% of time on operations, not building.', icon: '⏰', color: 'from-purple-500 to-pink-500' },
              { title: 'Lack of Support', desc: 'Building alone is hard. Finding the right partners is harder.', icon: '🤝', color: 'from-blue-500 to-cyan-500' },
            ].map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="glass-effect rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 border-2 border-transparent hover:border-white/10"
              >
                <div className={`text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 bg-gradient-to-br ${challenge.color} bg-clip-text text-transparent`}>
                  {challenge.icon}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">{challenge.title}</h3>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions - Redesigned Cinematic */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.15),transparent_50%)]" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16 px-4"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-6 text-gradient leading-tight"
            >
              The Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light mb-3"
            >
              Twelve integrated systems that work together.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Every brand solves a specific problem; together they create <span className="text-gradient font-bold">compounding momentum</span>.
            </motion.p>
          </motion.div>
          
          <AutoSlider brands={brands} />
        </div>
      </section>

      {/* Backed By Firms - Full Width Slider */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-slate-950 to-purple-950/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 md:mb-20 text-center text-gradient"
          >
            Backed By
          </motion.h2>
          
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap">
            {investors.map((investor, index) => (
              <motion.a
                key={investor.name}
                href={investor.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.15, y: -5 }}
                className="glass-effect rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 transition-all duration-300 border-2 border-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center"
              >
                {investor.isText || !investor.logo ? (
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-300 hover:text-white text-center">
                    {investor.name}
                  </span>
                ) : (
                  <>
                    <img 
                      src={investor.logo} 
                      alt={investor.name}
                      className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain max-w-[100px] sm:max-w-[120px] md:max-w-[140px] opacity-90 hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.parentElement.querySelector('.logo-fallback');
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <span className="logo-fallback text-sm sm:text-base md:text-lg font-bold text-slate-300 hover:text-white hidden text-center">
                      {investor.name}
                    </span>
                  </>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now - Redesigned */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-purple-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.3),transparent_60%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-4 md:mb-6 text-gradient leading-tight"
            >
              Why Now?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-400 max-w-3xl mx-auto font-light px-4"
            >
              The convergence of technology, timing, and transformation
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                title: 'The Perfect Storm',
                gradient: 'from-indigo-500 via-purple-500 to-pink-500',
                icon: '⚡',
                points: [
                  { text: 'AI has reached the inflection point—it can now power entire systems', highlight: 'AI inflection point' },
                  { text: 'Remote work made global teams the norm', highlight: 'global teams' },
                  { text: 'Founders are demanding integrated solutions, not point tools', highlight: 'integrated solutions' },
                ]
              },
              {
                title: 'The Opportunity',
                gradient: 'from-purple-500 via-pink-500 to-rose-500',
                icon: '🚀',
                points: [
                  { text: 'We can build what wasn\'t possible 5 years ago', highlight: '5 years ago' },
                  { text: 'The infrastructure exists to support global operations from day one', highlight: 'global infrastructure' },
                  { text: 'Founders are ready for a new way of building', highlight: 'new way' },
                ]
              },
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: sectionIndex * 0.2, duration: 0.8 }}
                className="relative group"
              >
                <div className="glass-effect rounded-3xl p-10 md:p-12 border-2 border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden h-full">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${section.gradient}`} />
                  <div className={`absolute -inset-1 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center text-4xl shadow-lg`}>
                        {section.icon}
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black text-gradient">
                        {section.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      {section.points.map((point, pointIndex) => (
                        <motion.div
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
                          transition={{ delay: sectionIndex * 0.2 + pointIndex * 0.1 + 0.3 }}
                          className="flex items-start gap-4 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            className={`w-8 h-8 rounded-lg bg-gradient-to-br ${section.gradient} flex items-center justify-center flex-shrink-0 mt-1 shadow-md`}
                          >
                            <span className="text-white text-lg font-black">✓</span>
                          </motion.div>
                          <p className="text-lg md:text-xl text-slate-300 leading-relaxed pt-1">
                            {point.text.split(new RegExp(`(${point.highlight})`, 'i')).map((part, i) => 
                              part.toLowerCase() === point.highlight.toLowerCase() ? (
                                <span key={i} className="font-semibold text-white">{part}</span>
                              ) : (
                                <span key={i} className="text-slate-400">{part}</span>
                              )
                            )}
                          </p>
                        </motion.div>
                      ))}
              </div>
              </div>
                  
                  <div className={`absolute bottom-4 right-4 w-24 h-24 rounded-full bg-gradient-to-br ${section.gradient} opacity-5 blur-2xl group-hover:opacity-15 transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-12 md:p-16 border-2 border-white/20 hover:border-white/40 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  className="text-6xl md:text-7xl mb-6"
                >
                  ⏰
                </motion.div>
                <h3 className="text-4xl md:text-5xl font-black mb-6 text-gradient">
                  The Moment is Now
                </h3>
                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
                  Everything has aligned. The technology is ready. The market is ready. 
                  <span className="text-gradient font-bold"> Founders are ready.</span>
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="mt-8 flex items-center justify-center gap-2 text-purple-400"
                >
                  <span className="text-lg font-semibold">This is the decade of integrated startup infrastructure</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Startups Using - Endless Horizontal Scroller */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-pink-950/30 to-purple-950/30" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 px-4"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 text-gradient"
            >
              Startups Using Biggbizz
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-400"
            >
              Trusted by innovative founders building the future
            </motion.p>
          </motion.div>
          
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{
                x: [0, -(brands.length * 180)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: brands.length * 2.5,
                  ease: "linear",
                },
              }}
              style={{ width: 'max-content' }}
            >
              {/* Duplicate logos for seamless infinite scroll */}
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.path}-${index}`}
                  className="group cursor-pointer flex-shrink-0"
                >
                  {brand.isExternal && brand.url ? (
                    <a 
                      href={brand.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -3 }}
                        className={`w-24 h-16 sm:w-28 sm:h-18 md:w-36 md:h-22 lg:w-40 lg:h-24 rounded-lg md:rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-black text-white shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-white/30`}
                      >
                        {brand.title[0]}
                      </motion.div>
                    </a>
                  ) : (
                  <Link to={brand.path}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                        className={`w-24 h-16 sm:w-28 sm:h-18 md:w-36 md:h-22 lg:w-40 lg:h-24 rounded-lg md:rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-black text-white shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-white/30`}
                    >
                      {brand.title[0]}
                    </motion.div>
                  </Link>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join the Universe - Roadmap Design */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(236,72,153,0.3),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20 lg:mb-24"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-6 md:mb-8 text-gradient leading-tight"
            >
              Join the Universe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-light px-4"
            >
              Your roadmap from idea to global scale
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Roadmap Timeline - Horizontal for Desktop, Vertical for Mobile */}
            <div className="relative">
              {/* Main Roadmap Line */}
              <div className="hidden md:block absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500/30 via-pink-500/30 via-blue-500/30 to-purple-500/30 rounded-full z-0" style={{ top: '200px' }} />
              
              {/* Animated Progress Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="hidden md:block absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 via-blue-500 to-purple-500 rounded-full z-10 origin-left"
                style={{ top: '200px' }}
              />

              {/* Mobile Vertical Line */}
              <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/30 via-pink-500/30 via-blue-500/30 to-purple-500/30 rounded-full z-0" />
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 via-blue-500 to-purple-500 rounded-full z-10 origin-top"
              />

              {/* Roadmap Steps */}
              <div className="relative z-20 space-y-16 md:space-y-0">
                {[
                  { 
                    step: '01', 
                  title: 'Explore', 
                    desc: 'Discover our universe of integrated systems. See how each platform solves real startup challenges.', 
                  action: 'View Startups', 
                  link: '/startups',
                  gradient: 'from-purple-500 to-violet-500',
                    icon: '🔍',
                    position: 'md:flex-row'
                },
                { 
                    step: '02', 
                  title: 'Connect', 
                    desc: 'Join the community. Find co-founders, mentors, and partners who share your vision.', 
                  action: 'Join Community', 
                  link: '/biggbizz',
                  gradient: 'from-pink-500 to-rose-500',
                    icon: '🤝',
                    position: 'md:flex-row-reverse'
                },
                { 
                    step: '03', 
                  title: 'Build', 
                    desc: 'Start building with tools that power global startups. From incorporation to scaling.', 
                  action: 'Get Started', 
                  link: '/contact',
                  gradient: 'from-blue-500 to-cyan-500',
                    icon: '🚀',
                    position: 'md:flex-row'
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.3, duration: 0.8, type: "spring" }}
                    className={`flex flex-col ${item.position} items-center md:items-start gap-8 md:gap-12 relative`}
                  >
                    {/* Milestone Marker */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.3 + 0.5, type: "spring", stiffness: 200 }}
                        className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl md:text-4xl font-black text-white shadow-2xl relative z-20 border-4 border-slate-950`}
                      >
                        {item.icon}
                      </motion.div>
                      
                      {/* Pulse Ring */}
                        <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-30 z-10`}
                      />
                      
                      {/* Step Number Badge */}
                      <div className={`absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-sm md:text-lg font-black text-white shadow-xl border-2 border-slate-950 z-30`}>
                        {item.step}
                      </div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + 0.2, duration: 0.8 }}
                      className="flex-1 w-full md:max-w-2xl"
                    >
                      <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden group">
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`} />
                        
                        <div className="relative z-10">
                          <h3 className="text-4xl md:text-6xl font-black mb-4 group-hover:text-gradient transition-all duration-500">
                        {item.title}
                      </h3>
                      
                          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light">
                        {item.desc}
                      </p>
                      
                      <Link
                        to={item.link}
                            className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${item.gradient} rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group/btn`}
                      >
                        <span className="relative z-10">{item.action}</span>
                            <motion.svg
                              className="w-5 h-5 relative z-10"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </motion.svg>
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity`}
                          style={{ filter: 'brightness(1.2)' }}
                        />
                      </Link>
                    </div>
                  </div>
                    </motion.div>
                </motion.div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Horizontal Slider */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-slate-950 to-pink-950/50" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 px-4"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-3 md:mb-4 text-gradient"
            >
              What Founders Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-slate-400"
            >
              Real stories from builders who transformed their journey
            </motion.p>
          </motion.div>
          
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Community Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-slate-950 to-pink-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-6 sm:p-8 md:p-12 text-center border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500" />
            
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-gradient"
              >
                Join the Community
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 mb-3 max-w-2xl mx-auto"
              >
                Connect with <span className="text-gradient font-bold">500+</span> founders, operators, investors, and mentors.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg text-slate-400 mb-6 md:mb-8 max-w-xl mx-auto"
              >
                Programs, deals, and peer accountability.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/biggbizz"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Join Community →</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                    initial={false}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home

