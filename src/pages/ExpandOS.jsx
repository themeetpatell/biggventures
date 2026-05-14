import ProductPage from '../components/ProductPage'

const ExpandOS = () => (
  <ProductPage
    title="Velora"
    tagline="The expansion layer"
    category="Growth"
    visitUrl="https://velora-sooty-seven.vercel.app/"
    description="Capital, M&A, and strategic growth workflows built for founders ready to scale beyond their first market. Fundraising command, cap table management, investor network access, and acquisition infrastructure — engineered for founder speed."
    accent="from-violet-400 via-fuchsia-500 to-purple-500"
    features={['Fundraising command', 'Cap table management', 'Investor network', 'M&A workflows']}
    points={[
      {
        title: 'Fundraising without guessing',
        description: 'A structured approach to raising capital — from targeting the right investors to preparing for due diligence with confidence.',
      },
      {
        title: 'Cap table that stays honest',
        description: 'Real-time cap table management that reflects every round, option grant, and conversion — always accurate, always readable.',
      },
      {
        title: 'The right investor at the right stage',
        description: 'Access to a curated investor network matched to your vertical, stage, and growth profile. No cold intros to the wrong check sizes.',
      },
      {
        title: 'M&A when you are ready',
        description: 'Acquisition workflows for both sides — whether acquiring or being acquired, Velora prepares you for the full process.',
      },
    ]}
  />
)

export default ExpandOS
