import LegalLayout from '@/components/legal/LegalLayout'

const sections = [
  {
    title: 'Introduction',
    content: 'Easysoft LLC ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our SaaS products and services. By using our Services, you consent to the practices described in this policy.',
  },
  {
    title: 'Information We Collect',
    content: [
      'Account Information: Name, email address, phone number, company name, and billing details when you register.',
      'Usage Data: Information about how you interact with our Services, including features used, pages visited, and actions taken.',
      'Device & Technical Data: IP address, browser type, operating system, device identifiers, and log data.',
      'Business Data: Data you input into our products (e.g., employee records, sales data, inventory) to provide the Services.',
      'Payment Information: Processed securely through third-party providers; we do not store full card details.',
      'Communications: Emails, support tickets, and feedback you send us.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'To provide, maintain, and improve our Services.',
      'To process transactions and send related information including invoices and receipts.',
      'To send administrative communications, product updates, and security alerts.',
      'To respond to your comments, questions, and customer support requests.',
      'To monitor and analyze usage trends to improve user experience.',
      'To detect, prevent, and address technical issues, fraud, and abuse.',
      'To comply with legal obligations and enforce our agreements.',
    ],
  },
  {
    title: 'Legal Basis for Processing (GDPR)',
    content: [
      'Contract: Processing is necessary to perform our contract with you.',
      'Legitimate Interests: We process data for our legitimate business interests, such as improving our Services.',
      'Consent: Where required, we obtain your consent before processing your data.',
      'Legal Obligation: We process data where required by applicable law.',
    ],
  },
  {
    title: 'Data Sharing and Disclosure',
    content: [
      'Service Providers: We share data with trusted third-party vendors who assist in operating our Services (e.g., cloud hosting, payment processors, analytics).',
      'Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred.',
      'Legal Requirements: We may disclose data when required by law, court order, or government authority.',
      'Protection of Rights: We may disclose data to protect the rights, property, or safety of Easysoft, our users, or others.',
      'We do not sell your personal information to third parties.',
    ],
  },
  {
    title: 'Data Retention',
    content: 'We retain your personal information for as long as your account is active or as needed to provide Services. We will retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your data at any time, subject to certain exceptions.',
  },
  {
    title: 'Data Security',
    content: 'We implement industry-standard security measures including encryption in transit (TLS), encryption at rest, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
  },
  {
    title: 'Your Rights',
    content: [
      'Access: Request a copy of the personal data we hold about you.',
      'Correction: Request correction of inaccurate or incomplete data.',
      'Deletion: Request deletion of your personal data ("right to be forgotten").',
      'Portability: Receive your data in a structured, machine-readable format.',
      'Objection: Object to certain types of processing, including direct marketing.',
      'Restriction: Request that we restrict processing of your data in certain circumstances.',
      'To exercise these rights, contact us at hello@easysoft.dev.',
    ],
  },
  {
    title: 'Cookies',
    content: 'We use cookies and similar tracking technologies to enhance your experience. Please refer to our Cookie Policy for detailed information on the types of cookies we use and how to manage your preferences.',
  },
  {
    title: 'International Data Transfers',
    content: 'Easysoft LLC is based in the United States. If you are accessing our Services from outside the US, your data may be transferred to and processed in the United States. We ensure adequate safeguards are in place for such transfers in accordance with applicable data protection laws.',
  },
  {
    title: "Children's Privacy",
    content: 'Our Services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.',
  },
  {
    title: 'Changes to This Policy',
    content: 'We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page and updating the effective date. We encourage you to review this policy regularly.',
  },
]

export default function PrivacyPage() {
  return (
    <LegalLayout
      badge="Legal · Easysoft LLC"
      title="Privacy Policy"
      subtitle="We take your privacy seriously. This policy describes what data we collect, why we collect it, and how we use and protect it across all Easysoft products and services."
      effectiveDate="January 1, 2025"
      sections={sections}
    />
  )
}