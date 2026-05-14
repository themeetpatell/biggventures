import ProductPage from '../components/ProductPage'

const BiggVentures = () => (
  <ProductPage
    title="BiggVentures"
    tagline="The connective tissue"
    category="Growth"
    description="The community and capital layer that connects founders across the entire BiggVentures universe. Peer networks, structured programs, exclusive operator deals, and accountability systems for founders who are serious about the long game."
    accent="from-violet-400 via-violet-500 to-violet-600"
    features={['Peer networks', 'Founder programs', 'Operator deals', 'Accountability systems']}
    points={[
      {
        title: 'The people who have done it',
        description: 'Connect with founders, operators, and investors who have navigated the same terrain. Context-matched peer networks, not generic communities.',
      },
      {
        title: 'Structured programs that move the needle',
        description: 'Not webinars. Cohort-based programs built around specific founder challenges — fundraising, hiring, go-to-market, and operational scale.',
      },
      {
        title: 'Exclusive deals and access',
        description: 'Software, services, and opportunities negotiated for BiggVentures founders. The right tools at founder-stage economics.',
      },
      {
        title: 'Peer accountability that works',
        description: 'Structured accountability systems that keep you honest without adding overhead. The right people asking the right questions at the right time.',
      },
    ]}
  />
)

export default BiggVentures
