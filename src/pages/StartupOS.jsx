import ProductPage from '../components/ProductPage'

const StartupOS = () => (
  <ProductPage
    title="StartupOS"
    tagline="The growth core"
    category="Foundation"
    description="AI Co-Builders combined with execution systems built for founders running multiple priorities at once. Strategy engines, the IMPACTS model, growth playbooks, revenue acceleration, and data intelligence — all in one operating layer."
    accent="from-yellow-400 via-violet-500 to-orange-600"
    visitUrl="https://www.startupos.in"
    features={['AI Co-Builders', 'IMPACTS model', 'Growth playbooks', 'Revenue acceleration']}
    points={[
      {
        title: 'AI Co-Builders that think alongside you',
        description: 'Not a chatbot. Strategy-level AI that understands your company context and builds execution plans with you — not for you.',
      },
      {
        title: 'The IMPACTS model',
        description: 'A proprietary execution framework that aligns your team, metrics, and decisions around one coherent operating rhythm.',
      },
      {
        title: 'Growth playbooks on demand',
        description: 'Proven playbooks adapted to your stage, market, and team — generated and iterated in real time as your situation evolves.',
      },
      {
        title: 'Institutional memory that compounds',
        description: 'Every decision feeds the next. StartupOS builds a knowledge layer of what works for your specific startup — so you never rebuild from scratch.',
      },
    ]}
  />
)

export default StartupOS
