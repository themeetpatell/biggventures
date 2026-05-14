import ProductPage from '../components/ProductPage'

const HealthOS = () => (
  <ProductPage
    title="GetTulsi"
    tagline="Stay in the game"
    category="Founder Life"
    visitUrl="https://gettulsi.com"
    description="Preventive health and longevity infrastructure for founders playing the long game. Continuous monitoring, early warning systems, and personalized protocols that keep you performing at your best for years, not quarters."
    accent="from-emerald-400 via-teal-500 to-green-500"
    features={['Continuous monitoring', 'Early warnings', 'Personalized protocols', 'Longevity focus']}
    points={[
      {
        title: 'Prevention, not reaction',
        description: 'GetTulsi monitors health markers continuously and surfaces patterns before they become problems — not after you have already burned out.',
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
        description: 'Most founders optimize for next month. GetTulsi is built for the decade. Stay sharp, stay capable, stay in the game longer.',
      },
    ]}
  />
)

export default HealthOS
