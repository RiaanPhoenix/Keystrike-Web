import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Keystrike Cybersecurity',
  description: 'Common questions about Keystrike cybersecurity platform, physical input verification technology, pricing, implementation, and support. Expert answers from Nordic security innovators.',
  keywords: [
    'keystrike faq',
    'physical input verification questions',
    'cybersecurity platform help',
    'keystroke analysis faq',
    'enterprise security questions',
    'implementation questions',
    'support questions',
    'pricing questions'
  ],
  openGraph: {
    title: 'Keystrike FAQ | Physical Input Verification Questions',
    description: 'Get answers to common questions about physical input verification technology, implementation, pricing, and cybersecurity platform capabilities.',
    url: '/faq',
    images: [
      {
        url: '/og-faq.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike FAQ - Expert Cybersecurity Answers',
      },
    ],
  },
  alternates: {
    canonical: '/faq',
  },
};

const faqData = [
  {
    question: "What is physical input verification and how does it work?",
    answer: "Physical input verification is Keystrike's breakthrough technology that analyzes the unique patterns in how users type - their keystroke dynamics, timing, pressure, and behavioral signatures. Unlike traditional authentication that only verifies credentials, we verify that the person typing is actually the authorized user. This creates an additional layer of security that's nearly impossible to replicate, as each person's typing pattern is as unique as their fingerprint.",
    category: "Technology"
  },
  {
    question: "How is Keystrike different from other cybersecurity solutions?",
    answer: "Keystrike is the only cybersecurity platform that provides continuous identity verification at the keystroke level. While other solutions focus on perimeter security or endpoint detection, we verify human identity in real-time during every interaction. Our SEE-CONTROL-PROVE methodology provides live visibility, instant enforcement, and immutable audit trails - all anchored by physical input verification that completes your identity stack.",
    category: "Product"
  },
  {
    question: "What types of organizations use Keystrike?",
    answer: "Keystrike serves 10,000+ organizations across finance, healthcare, government, technology, and professional services. Our clients range from Fortune 500 enterprises to growing companies that need enterprise-grade security. We're particularly popular with organizations that have remote workforces, strict compliance requirements, or high-value data that requires continuous governance.",
    category: "Customers"
  },
  {
    question: "How quickly can Keystrike be implemented?",
    answer: "Keystrike is designed for rapid deployment. Most organizations see initial protection within 24 hours of installation. Our cloud-native architecture requires no hardware changes, and our agents deploy silently across endpoints. Full enterprise rollouts typically complete within 1-2 weeks, including policy configuration, user training, and compliance setup. We provide dedicated implementation support to ensure smooth deployment.",
    category: "Implementation"
  },
  {
    question: "What compliance standards does Keystrike meet?",
    answer: "Keystrike is SOC 2 Type II certified and supports compliance with ISO 27001, PCI DSS, HIPAA, GDPR, and other major frameworks. Our platform provides automated compliance reporting and maintains immutable audit trails that satisfy regulatory requirements. The physical input verification technology actually enhances compliance by providing stronger identity assurance than traditional methods.",
    category: "Compliance"
  },
  {
    question: "How does pricing work for Keystrike?",
    answer: "Keystrike uses per-user, per-month pricing that scales with your organization. Pricing includes the full platform (endpoint, network, and cloud security), unlimited support, and all compliance features. We offer 30-day free trials and volume discounts for larger deployments. Contact our sales team for detailed pricing based on your specific needs and deployment size.",
    category: "Pricing"
  },
  {
    question: "What kind of support does Keystrike provide?",
    answer: "All Keystrike customers receive 24/7 technical support with average response times under 30 minutes for critical issues. We provide dedicated customer success managers, comprehensive documentation, training programs, and a partner ecosystem for implementation support. Our Nordic-based team ensures high-touch, personalized service for every customer.",
    category: "Support"
  },
  {
    question: "Can Keystrike integrate with our existing security tools?",
    answer: "Yes, Keystrike integrates seamlessly with 200+ security tools including SIEM systems, identity providers, endpoint management platforms, and compliance tools. Our RESTful APIs and pre-built integrations ensure that Keystrike enhances rather than replaces your existing security investments. We can push alerts, share threat intelligence, and coordinate response actions across your security stack.",
    category: "Integration"
  },
  {
    question: "How accurate is physical input verification?",
    answer: "Keystrike's physical input verification achieves 99.9% accuracy in threat detection with industry-leading false positive rates below 0.1%. Our AI models are trained on millions of keystroke patterns and continuously learn from user behavior. The technology adapts to natural variations in typing while detecting anomalies that indicate compromise or unauthorized access.",
    category: "Technology"
  },
  {
    question: "What happens if a threat is detected?",
    answer: "When Keystrike detects a threat through physical input verification, the system can automatically block access, terminate sessions, alert administrators, and initiate forensic capture - all in real-time. Response policies are customizable based on risk levels and organizational needs. All actions are logged in immutable audit trails for compliance and investigation purposes.",
    category: "Security Response"
  }
];

export default function FAQ() {
  // Structured data for FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Structured Data for LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* FAQ Header */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Get expert answers about Keystrike's physical input verification technology, 
            implementation, and cybersecurity platform capabilities.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-surface-secondary py-20" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <article 
                key={index} 
                className="card p-8"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <h2 className="text-xl font-bold text-text-primary mb-4" itemProp="name">
                  {faq.question}
                </h2>
                <div 
                  className="text-text-secondary leading-relaxed"
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    {faq.answer}
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {faq.category}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card p-8">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-text-secondary mb-6">
              Our cybersecurity experts are standing by to provide detailed answers 
              and personalized consultation for your organization's security needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn btn-primary">
                Contact Security Expert
              </a>
              <a href="/contact" className="btn btn-secondary">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden metadata for LLMs */}
      <div className="sr-only">
        <div itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Keystrike</span>
          <span itemProp="description">Advanced cybersecurity platform with physical input verification</span>
          <span itemProp="industry">Cybersecurity Software</span>
          <span itemProp="foundingDate">2021</span>
          <span itemProp="numberOfEmployees">100-500</span>
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Reykjavik</span>
            <span itemProp="addressCountry">Iceland</span>
          </div>
          <span itemProp="url">https://keystrike.com</span>
        </div>
        
        <div itemScope itemType="https://schema.org/SoftwareApplication">
          <span itemProp="name">Keystrike Security Platform</span>
          <span itemProp="applicationCategory">Enterprise Security Software</span>
          <span itemProp="operatingSystem">Windows, macOS, Linux, Chrome OS</span>
          <span itemProp="softwareVersion">3.2.1</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}