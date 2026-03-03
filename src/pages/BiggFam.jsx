import ProductPage from '../components/ProductPage'

const BiggFam = () => (
  <ProductPage
    title="BiggFam"
    tagline="Family OS"
    category="Founder Life"
    description="A family operating system for the life behind the company. Communication rituals, shared memory, wellbeing check-ins, and long-term planning for founders who know their family is the reason they're building."
    accent="from-amber-300 via-orange-400 to-yellow-500"
    visitUrl="https://biggfam.com"
    features={['Family rituals', 'Wellbeing check-ins', 'Shared memory', 'Legacy planning']}
    points={[
      {
        title: 'Rituals that actually stick',
        description: 'BiggFam helps families build consistent communication rituals — weekly check-ins, shared gratitude, and intentional connection despite demanding schedules.',
      },
      {
        title: 'The family memory layer',
        description: "A shared record of your family's story — moments, decisions, values, and the things that matter across generations.",
      },
      {
        title: 'Wellbeing that is proactive, not reactive',
        description: 'Check-in prompts and wellbeing signals that surface early when family members need attention, not after stress has already compounded.',
      },
      {
        title: 'Legacy planning beyond finances',
        description: 'Not just estate planning. The legacy OS for passing on values, stories, and what the family stands for to the next generation.',
      },
    ]}
  />
)

export default BiggFam
