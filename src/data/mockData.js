export const navLinks = [
  { name: 'Home', href: '#home', active: true },
  { name: 'Plans', href: '#pricing' },
  { name: 'Blog', href: '#features' },
  { name: 'Terms', href: '#footer' },
];

export const statsData = [
  { value: '100K+', label: 'Links Created' },
  { value: '1M+', label: 'Total Clicks' },
  { value: '180+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime' },
];

export const initialPopularLinks = [
  {
    id: 1,
    title: 'Bangla Puzzle Official Careers & Internships Portal',
    originalUrl: 'https://banglapuzzle.com/careers/intern-frontend-developer-2026',
    shortUrl: 'https://thetiny.site/bp-career',
    clicks: 1420,
    tags: ['Career', 'Jobs'],
  },
  {
    id: 2,
    title: 'Front-end Developer Showcase & Portfolio Showcase',
    originalUrl: 'https://github.com/developer/showcase-react-tailwind-project',
    shortUrl: 'https://thetiny.site/my-portfolio',
    clicks: 1240,
    tags: ['Tech', 'Portfolio'],
  },
  {
    id: 3,
    title: 'Modern Web Development Tools and Resources 2026',
    originalUrl: 'https://news.ycombinator.com/item?id=trending-tech-stack-2026',
    shortUrl: 'https://thetiny.site/dev-tools',
    clicks: 875,
    tags: ['Resources'],
  },
  {
    id: 4,
    title: 'Bangla Puzzle Ltd Company Overview & Client Case Studies',
    originalUrl: 'https://banglapuzzle.com/case-studies/digital-transformation',
    shortUrl: 'https://thetiny.site/bp-cases',
    clicks: 654,
    tags: ['Company'],
  },
  {
    id: 5,
    title: 'The Tiny Site Platform Video Demo & Interactive Walkthrough',
    originalUrl: 'https://thetiny.site/tutorials/get-started-in-seconds-video',
    shortUrl: 'https://thetiny.site/watch-demo',
    clicks: 473,
    tags: ['Demo'],
  },
];

export const featureBullets = [
  'Custom branded domains & vanity slugs',
  'UTM parameter builder for campaign tracking',
  'Advanced real-time audience analytics',
  'Link expiration & password protection',
  '24/7 dedicated customer support',
];

export const liveAnalyticsData = [
  { channel: 'Direct / Social Campaigns', clicks: 2341, percentage: 85 },
  { channel: 'Organic Search Referral', clicks: 846, percentage: 60 },
  { channel: 'Email Newsletter Links', clicks: 319, percentage: 40 },
  { channel: 'Mobile App Deep Links', clicks: 219, percentage: 28 },
];

export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: '/forever',
    description: 'Perfect for personal use and quick link shortening.',
    highlighted: false,
    badge: 'Starter',
    features: [
      '500 short links / month',
      'Basic click count analytics',
      'Standard QR code generation',
      '48-hour link click history',
      'Community forum support',
    ],
    buttonText: 'Get Started Free',
    buttonVariant: 'secondary',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$9',
    period: '/per month',
    description: 'For creators, marketers, and growing teams.',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Unlimited short links',
      'Advanced real-time analytics',
      'Custom domain support',
      'Branded QR codes with logo',
      'Password protected links',
      '24/7 priority email support',
    ],
    buttonText: 'Start 14-Day Free Trial',
    buttonVariant: 'primary-light',
  },
  {
    id: 'business',
    name: 'Business',
    price: '$29',
    period: '/per month',
    description: 'For businesses needing scale, API access and collaboration.',
    highlighted: false,
    badge: 'Enterprise',
    features: [
      'Everything in Pro tier',
      '10 Team collaboration seats',
      'Full REST API & webhooks',
      'Deep link routing by OS',
      '99.9% Uptime SLA guarantee',
      'Dedicated account manager',
    ],
    buttonText: 'Start 14-Day Free Trial',
    buttonVariant: 'primary-dark',
  },
];

export const testimonials = [
  {
    quote:
      'The platform has totally changed how we track and manage our marketing links. The real-time dashboard and custom domains have boosted our campaign click-through rates by over 40%!',
    name: 'Alex Morgan',
    role: 'Growth Marketing Director',
    company: 'Nexus Media',
    rating: 5,
  },
];

export const whyChooseCards = [
  {
    icon: 'Zap',
    title: 'Lightning Fast',
    description:
      'Instant link redirection with edge servers worldwide, ensuring sub-10ms response latency.',
  },
  {
    icon: 'BarChart3',
    title: 'Detailed Analytics',
    description:
      'Track clicks, geographical sources, device types, and referral campaigns in comprehensive visual charts.',
  },
  {
    icon: 'QrCode',
    title: 'QR & Bio Pages',
    description:
      'Create high-resolution downloadable QR codes and customizable link-in-bio profiles effortlessly.',
  },
  {
    icon: 'Layers',
    title: 'API Access',
    description:
      'Robust and well-documented REST APIs for programmatic link shortening inside your apps and automations.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Secure & Private',
    description:
      'Enterprise-grade TLS encryption, automatic malware/phishing detection, and secure password-protected links.',
  },
  {
    icon: 'Clock',
    title: '99.9% Uptime Guarantee',
    description:
      'Redundant multi-cloud infrastructure ensuring your links remain active 24/7 without interruption.',
  },
];

export const footerLinks = {
  products: [
    { name: 'URL Shortener', href: '#' },
    { name: 'QR Codes', href: '#' },
    { name: 'Bio Pages', href: '#' },
    { name: 'API Docs', href: '#' },
    { name: 'Browser Extension', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press & Media', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Security Policy', href: '#' },
    { name: 'SLA Status', href: '#' },
  ],
};

