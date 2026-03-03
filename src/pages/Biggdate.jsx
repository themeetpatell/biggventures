import ProductPage from '../components/ProductPage'

const Biggdate = () => (
  <ProductPage
    title="Biggdate"
    tagline="Because builders are human"
    category="Founder Life"
    description="AI for real relationships. Dating and long-term compatibility support that respects intent, values, and what founders actually need from a relationship — not just swipe-based surface matching."
    accent="from-rose-400 via-pink-500 to-fuchsia-500"
    visitUrl="https://www.biggdate.com"
    features={['Intent-based matching', 'Values alignment', 'Compatibility scoring', 'Long-term focus']}
    points={[
      {
        title: 'Intent over impulse',
        description: "Biggdate matches on what you're actually looking for — not just who's nearby. Long-term compatibility starts with clarity of intent.",
      },
      {
        title: 'Values that determine whether it lasts',
        description: 'Deep alignment across life priorities, family vision, and personal principles — the things that make or break a relationship over years.',
      },
      {
        title: 'Built for founder pace',
        description: 'Biggdate understands that founders have limited time and high standards. No endless swiping. Curated, meaningful connections only.',
      },
      {
        title: 'Beyond the match',
        description: 'Relationship support that extends past the introduction — tools for maintaining connection during the high-pressure phases of building.',
      },
    ]}
  />
)

export default Biggdate
