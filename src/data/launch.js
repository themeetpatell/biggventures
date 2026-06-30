// Single source of truth for the useDan / Company8 launch promotion.
// Both LaunchBanner (site-wide strip) and LaunchSpotlight (Home card) read from here.
//
// To flip from teaser to live on launch day:
//   - set `status: 'live'`
// To take the promotion down entirely:
//   - set `enabled: false`

export const LAUNCH = {
  enabled: true,
  status: 'coming-soon', // 'coming-soon' | 'live'

  company: 'Company8',
  product: 'useDan',
  tagline: 'Ask your business anything. Get answers that lead to action.',
  date: 'July 27',
  offer: '3 months free',

  productHuntUrl:
    'https://www.producthunt.com/products/usedan-by-company8?utm_source=biggventures&utm_medium=launch-banner',
  logo: '/usedan-logo.png',
}

// Derived copy so the two components stay consistent.
export const isLive = LAUNCH.status === 'live'

export const launchCopy = {
  // Short line for the slim top strip.
  bannerLead: isLive
    ? `${LAUNCH.product} by ${LAUNCH.company} is live on Product Hunt`
    : `${LAUNCH.product} by ${LAUNCH.company} — launching on Product Hunt`,
  bannerMeta: isLive ? 'Back us today' : LAUNCH.date,
  bannerCta: isLive ? 'Back us today' : 'Get notified',

  // Badge + CTA for the Home spotlight card.
  badge: isLive ? 'LIVE NOW' : `COMING SOON · ${LAUNCH.date.toUpperCase()}`,
  cardCta: isLive ? 'Back us on Product Hunt' : 'Get notified on Product Hunt',
}
