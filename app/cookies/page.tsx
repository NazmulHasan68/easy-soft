import LegalLayout from '@/components/legal/LegalLayout'

const sections = [
  {
    title: 'What Are Cookies',
    content: 'Cookies are small text files placed on your device when you visit a website or use a web application. They are widely used to make sites work efficiently, remember your preferences, and provide information to site owners. Easysoft LLC uses cookies and similar technologies across all its products and services.',
  },
  {
    title: 'How We Use Cookies',
    content: [
      'To keep you signed in and maintain your session securely.',
      'To remember your preferences and settings across visits.',
      'To understand how you interact with our Services and improve them.',
      'To measure the performance and effectiveness of our features.',
      'To protect against fraud and ensure the security of your account.',
      'To deliver relevant product announcements and updates.',
    ],
  },
  {
    title: 'Types of Cookies We Use',
    content: [
      'Strictly Necessary Cookies: Essential for the Services to function. These cannot be disabled. Examples include authentication tokens and session identifiers.',
      'Functional Cookies: Enable enhanced features such as remembering your language preference, UI settings, and recently accessed modules.',
      'Analytics Cookies: Help us understand how users interact with our Services. We use tools like Google Analytics and Mixpanel to collect anonymized usage data.',
      'Performance Cookies: Used to monitor site speed, error rates, and overall platform reliability.',
      'Marketing Cookies: Used to track the effectiveness of our marketing campaigns. These are only placed with your consent.',
    ],
  },
  {
    title: 'Third-Party Cookies',
    content: [
      'Google Analytics: For usage analytics and performance monitoring (analytics.google.com).',
      'Stripe: For secure payment processing and fraud prevention (stripe.com).',
      'Intercom: For in-app chat support and user communication (intercom.com).',
      'Cloudflare: For security, performance, and DDoS protection (cloudflare.com).',
      'These third parties have their own privacy and cookie policies, which we encourage you to review.',
    ],
  },
  {
    title: 'Cookie Duration',
    content: [
      'Session Cookies: Temporary cookies deleted when you close your browser. Used primarily for authentication.',
      'Persistent Cookies: Remain on your device for a set period (typically 30 days to 2 years) or until manually deleted. Used for preferences and analytics.',
      'The specific duration of each cookie varies. Most can be viewed in your browser\'s developer tools under the Application or Storage tab.',
    ],
  },
  {
    title: 'Managing Your Cookie Preferences',
    content: [
      'Browser Settings: Most browsers allow you to block or delete cookies via their settings. Note that disabling strictly necessary cookies may break core functionality.',
      'In-App Preferences: When available, you can manage non-essential cookies through your account settings or our cookie consent banner.',
      'Opt-Out Tools: For analytics cookies, you can opt out via Google Analytics Opt-out Add-on (tools.google.com/dlpage/gaoptout).',
      'Do Not Track: We respect browser Do Not Track signals where technically feasible.',
    ],
  },
  {
    title: 'Cookie Consent',
    content: 'When you first access our Services, you will be presented with a cookie consent banner. Strictly necessary cookies are enabled by default. You may accept or decline optional cookie categories. You can update your preferences at any time through the cookie settings link in our footer.',
  },
  {
    title: 'Impact of Disabling Cookies',
    content: [
      'Disabling strictly necessary cookies will prevent you from logging in and using core features.',
      'Disabling functional cookies may cause your preferences to reset on each visit.',
      'Disabling analytics cookies means we cannot use your data to improve our Services, but your experience will not be affected.',
      'Disabling marketing cookies will not reduce the number of ads you see, but they may be less relevant.',
    ],
  },
  {
    title: 'Updates to This Policy',
    content: 'We may update this Cookie Policy as our Services evolve or as regulations change. We will notify you of significant changes via in-app notification or email. The effective date at the top of this page reflects when the policy was last updated.',
  },
]

export default function CookiePage() {
  return (
    <LegalLayout
      badge="Legal · Easysoft LLC"
      title="Cookie Policy"
      subtitle="This policy explains how Easysoft LLC uses cookies and similar tracking technologies across our products, what data is collected, and how you can manage your preferences."
      effectiveDate="January 1, 2025"
      sections={sections}
    />
  )
}