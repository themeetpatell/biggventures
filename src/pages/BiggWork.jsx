import ProductPage from '../components/ProductPage'

const BiggWork = () => (
  <ProductPage
    title="BiggWork"
    tagline="The talent engine"
    category="Foundation"
    description="Predictive hiring powered by StartupOS intelligence. BiggWork understands your startup's stage, team DNA, and growth trajectory — then determines exactly who to hire and scores every candidate across six dimensions."
    accent="from-orange-400 via-rose-500 to-pink-500"
    visitUrl="https://biggwork.com"
    features={['Six-dimension scoring', 'Context-aware JDs', 'Stage-fit matching', 'Predictive success']}
    points={[
      {
        title: 'Real-time StartupOS intelligence',
        description: "Pulls your company's stage, culture, and team dynamics directly — so every hire recommendation is contextually accurate, not generically good.",
      },
      {
        title: 'Six-dimensional candidate scoring',
        description: 'Candidates scored across stage fit, team fit, culture fit, growth fit, budget fit, and founder fit. All six — not just one.',
      },
      {
        title: 'Context model building',
        description: "Identifies the skill gaps you haven't articulated yet. Generates adaptive job descriptions that attract exactly the right profiles.",
      },
      {
        title: 'Predictive success matching',
        description: 'Recommends people most likely to thrive in your specific environment — not just candidates who look impressive on paper.',
      },
    ]}
  />
)

export default BiggWork
