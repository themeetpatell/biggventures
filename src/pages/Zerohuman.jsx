import ProductPage from '../components/ProductPage'

const Zerohuman = () => (
  <ProductPage
    title="Zerohuman"
    tagline="The distribution power"
    category="Growth"
    description="AI-driven audience growth built for startups that need to compound attention without burning through budget. Creative generation, multichannel orchestration, and performance insights that scale what works."
    accent="from-orange-500 via-red-500 to-rose-500"
    visitUrl="https://www.zerohuman.co"
    features={['Creative generation', 'Multichannel orchestration', 'Performance analytics', 'Audience compounding']}
    points={[
      {
        title: 'Creative generation at scale',
        description: 'AI creates platform-native content across formats — not templates. Each piece is generated for context, channel, and intent.',
      },
      {
        title: 'Multichannel without chaos',
        description: 'Orchestrate campaigns across platforms with one coherent strategy. No more managing five tools and three agencies simultaneously.',
      },
      {
        title: 'Insights that compound',
        description: 'Every campaign feeds back into the creative engine. Zerohuman gets sharper as your audience and data grow.',
      },
      {
        title: 'Built for founder speed',
        description: 'Launch in hours, not sprints. Zerohuman removes the execution drag between having an idea and reaching your audience.',
      },
    ]}
  />
)

export default Zerohuman
