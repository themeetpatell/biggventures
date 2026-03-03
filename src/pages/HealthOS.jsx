import ProductPage from '../components/ProductPage'

const HealthOS = () => (
  <ProductPage
    title="HealthOS"
    tagline="Stay in the game"
    category="Founder Life"
    description="Preventive health and longevity infrastructure for founders playing the long game. Continuous monitoring, early warning systems, and personalized protocols that keep you performing at your best for years, not quarters."
    accent="from-red-400 via-orange-500 to-amber-400"
    features={['Continuous monitoring', 'Early warnings', 'Personalized protocols', 'Longevity focus']}
    points={[
      {
        title: 'Prevention, not reaction',
        description: 'HealthOS monitors health markers continuously and surfaces patterns before they become problems — not after you have already burned out.',
      },
      {
        title: 'Early warning systems calibrated for builders',
        description: 'Alerts built around the specific stressors of founding. Sleep, cortisol, energy, mental clarity — tracked and acted on proactively.',
      },
      {
        title: 'Personalized, not generic',
        description: 'Not generic health advice. Protocols built around your biomarkers, schedule, and goals — adapted as your situation changes over time.',
      },
      {
        title: 'The decade, not the quarter',
        description: 'Most founders optimize for next month. HealthOS is built for the decade. Stay sharp, stay capable, stay in the game longer.',
      },
    ]}
  />
)

export default HealthOS
