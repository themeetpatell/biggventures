import ProductPage from '../components/ProductPage'

const Mealverse = () => (
  <ProductPage
    title="Mealverse"
    tagline="The team's fuel supply"
    category="Founder Life"
    description="Healthy, homemade food at work — at scale. Predictive meal planning, nutrition dashboards, and seamless operations for offices and teams that take performance seriously."
    accent="from-lime-400 via-green-500 to-emerald-500"
    visitUrl="https://mealverse.in"
    features={['Predictive meal planning', 'Nutrition tracking', 'Team dashboards', 'Seamless delivery']}
    points={[
      {
        title: 'Food that actually fuels performance',
        description: 'Not catered junk. Mealverse delivers nutrition-optimized, homemade-quality meals designed around how your team actually works.',
      },
      {
        title: 'Predictive planning that disappears',
        description: 'AI plans meals based on schedules, preferences, and dietary needs — so your team never thinks about what to eat at 1pm.',
      },
      {
        title: 'Nutrition dashboards at team level',
        description: 'Track team nutrition across the organization. Know when energy dips before performance does, and proactively keep the machine running.',
      },
      {
        title: 'Operations handled end-to-end',
        description: 'Logistics, delivery, and variety managed completely. The food appears. The team focuses on building.',
      },
    ]}
  />
)

export default Mealverse
