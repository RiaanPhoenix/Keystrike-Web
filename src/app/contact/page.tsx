import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Keystrike | Request Demo & Security Assessment',
  description: 'Contact Keystrike for product demos, security assessments, and enterprise cybersecurity consultations. Global offices in Reykjavik, Copenhagen, and Austin. 24/7 support available.',
  keywords: [
    'contact keystrike',
    'cybersecurity demo',
    'security assessment',
    'enterprise security consultation',
    'keystrike offices',
    'cybersecurity support',
    'security sales',
    'Reykjavik cybersecurity'
  ],
  openGraph: {
    title: 'Contact Keystrike | Get Started with Advanced Cybersecurity',
    description: 'Schedule a demo or get a free security assessment. Expert cybersecurity consultation with average response time under 30 minutes.',
    url: '/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Keystrike - Global Cybersecurity Support',
      },
    ],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-2xl font-bold text-text-primary">Keystrike</a>
              </div>
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <a href="#" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Solutions</a>
                <a href="#" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Platform</a>
                <a href="#" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Resources</a>
                <a href="#" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Partners</a>
                <a href="/about" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Company</a>
                <a href="#" className="text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium">Support</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn btn-secondary">
                Customer Login
              </button>
              <button className="btn btn-primary">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            Ready to Get Started?
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Connect with our security experts to learn how Keystrike can strengthen your organization's 
            cybersecurity posture with Nordic precision and human-centric innovation.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Demo Request */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Request a Demo</h3>
              <p className="text-text-secondary mb-6 text-sm">
                See Keystrike's physical input verification in action. 30-minute personalized demonstration 
                with our security experts.
              </p>
              <button className="btn btn-primary w-full">
                Schedule Demo
              </button>
              <p className="text-text-muted text-xs mt-4">
                Average response time: 30 minutes
              </p>
            </div>

            {/* Sales Inquiry */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Talk to Sales</h3>
              <p className="text-text-secondary mb-6 text-sm">
                Ready to discuss pricing, deployment, and enterprise requirements? Connect with our sales team 
                for a consultation.
              </p>
              <button className="btn btn-primary w-full">
                Contact Sales
              </button>
              <p className="text-text-muted text-xs mt-4">
                Call: +1 (555) 123-4567
              </p>
            </div>

            {/* Technical Support */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Get Support</h3>
              <p className="text-text-secondary mb-6 text-sm">
                Existing customer? Access technical support, documentation, and customer success resources 
                through our portal.
              </p>
              <button className="btn btn-secondary w-full">
                Customer Portal
              </button>
              <p className="text-text-muted text-xs mt-4">
                24/7 support availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Send us a Message
            </h2>
            <p className="text-xl text-text-secondary">
              Have a specific question? Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <div className="card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Company Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Job Title
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Company Size
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent">
                  <option value="">Select company size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1,000 employees</option>
                  <option value="1000+">1,000+ employees</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  How can we help? *
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent" required>
                  <option value="">Select inquiry type</option>
                  <option value="demo">Request a Demo</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                  <option value="media">Media/Press Inquiry</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Message *
                </label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-surface text-text-primary focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Tell us more about your security requirements, current challenges, or specific questions..."
                  required
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  id="consent"
                  className="mt-1 w-4 h-4 text-accent border-border rounded focus:ring-accent"
                  required
                />
                <label htmlFor="consent" className="text-sm text-text-secondary">
                  I agree to receive communications from Keystrike and understand that I can unsubscribe at any time. 
                  View our <a href="#" className="text-accent hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-8 py-3 text-lg">
                  Send Message
                </button>
                <p className="text-text-muted text-sm mt-4">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Visit Our Offices
            </h2>
            <p className="text-xl text-text-secondary">
              Connect with our teams around the globe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reykjavik HQ */}
            <div className="card p-8">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Reykjavik Headquarters</h3>
              <div className="space-y-3 text-text-secondary text-sm">
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    Laugavegur 26<br />
                    101 Reykjavik, Iceland
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <div>+354 555 1234</div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <div>reykjavik@keystrike.com</div>
                </div>
              </div>
            </div>

            {/* Copenhagen Office */}
            <div className="card p-8">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Copenhagen Office</h3>
              <div className="space-y-3 text-text-secondary text-sm">
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    Vesterbrogade 4A<br />
                    1620 Copenhagen V, Denmark
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <div>+45 70 123 456</div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <div>copenhagen@keystrike.com</div>
                </div>
              </div>
            </div>

            {/* Austin Office */}
            <div className="card p-8">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Austin Office</h3>
              <div className="space-y-3 text-text-secondary text-sm">
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    300 E Cesar Chavez St<br />
                    Austin, TX 78701, USA
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <div>+1 (555) 123-4567</div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <div>austin@keystrike.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-text-primary mb-4">Keystrike</div>
              <p className="text-text-secondary text-sm mb-4">
                Advanced cybersecurity. Simplified. Nordic precision meets human-centric innovation.
              </p>
              <p className="text-text-muted text-xs">
                © 2026 Keystrike. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Solutions</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><a href="#" className="hover:text-accent">Endpoint Security</a></li>
                <li><a href="#" className="hover:text-accent">Network Protection</a></li>
                <li><a href="#" className="hover:text-accent">Cloud Security</a></li>
                <li><a href="#" className="hover:text-accent">Enterprise Suite</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><a href="/about" className="hover:text-accent">About Us</a></li>
                <li><a href="#" className="hover:text-accent">Leadership</a></li>
                <li><a href="#" className="hover:text-accent">Careers</a></li>
                <li><a href="/contact" className="hover:text-accent">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Support</h4>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><a href="#" className="hover:text-accent">Documentation</a></li>
                <li><a href="#" className="hover:text-accent">Customer Portal</a></li>
                <li><a href="#" className="hover:text-accent">Partner Portal</a></li>
                <li><a href="#" className="hover:text-accent">Contact Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}