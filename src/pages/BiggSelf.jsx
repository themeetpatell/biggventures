import ProductPage from '../components/ProductPage'

const BiggSelf = () => (
  <ProductPage
    title="BiggSelf"
    tagline="Your legacy vault"
    category="Founder Life"
    description="A Swiss-style home for memories, identity, and intangible assets. Preserve what matters, prove what you've built, and pass on what shouldn't be lost — with sovereignty and privacy as defaults."
    accent="from-slate-400 via-zinc-400 to-stone-400"
    features={['Memory preservation', 'Identity protection', 'Intangible assets', 'Legacy transfer']}
    points={[
      {
        title: 'The things that have no file format',
        description: 'Stories, relationships, values, decisions — BiggSelf captures the context behind your life that no spreadsheet or hard drive holds.',
      },
      {
        title: 'Prove what you have built',
        description: 'Verifiable records of accomplishments, milestones, and contributions — for founders whose work spans multiple ventures over decades.',
      },
      {
        title: 'Protected and privately owned',
        description: 'Swiss-style security model. Your memories and identity assets are encrypted, sovereign, and owned by you — not a platform.',
      },
      {
        title: 'Pass it on intentionally',
        description: 'Legacy transfer protocols that let you decide what to share, when, and with whom — for the people who will carry what you built forward.',
      },
    ]}
  />
)

export default BiggSelf
