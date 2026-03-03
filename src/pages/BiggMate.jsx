import ProductPage from '../components/ProductPage'

const BiggMate = () => (
  <ProductPage
    title="BiggMate"
    tagline="The spark"
    category="Foundation"
    description="Co-foundership engine built for founders who know that the wrong co-founder costs more than a year. Match by intent, complementary skills, and aligned values — then build from day one inside a shared startup room."
    accent="from-amber-400 via-orange-500 to-rose-500"
    visitUrl="https://www.biggmate.com"
    features={['AI-powered matching', 'Intent alignment', 'Shared startup room', 'Values scoring']}
    points={[
      {
        title: 'Match by what actually matters',
        description: 'AI compares founder intent, work style, vision horizon, and skill complement — not just industry keywords or LinkedIn titles.',
      },
      {
        title: 'Shared context from day one',
        description: 'A joint startup room where co-founders sync plans, divide ownership, and build together before a single line of code is written.',
      },
      {
        title: 'Complementary, not just compatible',
        description: "BiggMate surfaces the gaps you don't know you have. The best co-founder pairs are different in exactly the right ways.",
      },
      {
        title: 'Built for serious builders',
        description: 'Not a social network. A co-foundership engine for founders committed to making the partnership work for the long haul.',
      },
    ]}
  />
)

export default BiggMate
