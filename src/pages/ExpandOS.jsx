import ProductPage from '../components/ProductPage'

const ExpandOS = () => (
  <ProductPage
    title="ExpandOS"
    tagline="The expansion layer"
    category="Growth"
    description="Capital, M&A, and strategic growth workflows built for founders who are ready to scale beyond their first market. Fundraising command, cap table management, investor network access, and acquisition infrastructure."
    accent="from-amber-400 via-yellow-500 to-orange-400"
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
        description: 'Acquisition workflows for both sides — whether acquiring or being acquired, ExpandOS prepares you for the full process.',
      },
    ]}
  />
)

export default ExpandOS
