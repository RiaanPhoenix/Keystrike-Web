import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Keystrike | Nordic Precision Meets Human-Centric Innovation',
  description: 'Founded in 2021, Keystrike delivers physical input verification technology with Nordic precision. Led by expert cybersecurity professionals, protecting democratic society at civilization scale.',
  keywords: [
    'cybersecurity company',
    'Nordic innovation',
    'physical input verification',
    'keystrike leadership',
    'security company Iceland',
    'cybersecurity team',
    'enterprise security',
    'human-centric security',
    'Nordic precision'
  ],
  openGraph: {
    title: 'About Keystrike | Nordic Cybersecurity Innovation',
    description: 'Meet the team behind physical input verification technology. Founded in Reykjavik, protecting 10,000+ organizations worldwide with Nordic precision.',
    url: '/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Leadership Team and Company Culture',
      },
    ],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
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
                <a href="/about" className="text-accent px-3 py-2 text-sm font-medium">Company</a>
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
            Nordic Precision Meets{" "}
            <span className="text-accent">Human-Centric Innovation</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            At Keystrike, we believe sophisticated security should be approachable. Our mission is to protect democratic society 
            at civilization scale through physical input verification—the missing piece in continuous remote access governance.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-text-secondary mb-6">
                To bridge the identity gap in cybersecurity by providing physical input verification that completes 
                the security stack. We're not just another security layer—we're the foundation that makes all other 
                security tools more effective.
              </p>
              <p className="text-text-secondary">
                86% of cyberattacks happen after access is granted. Traditional security focuses on perimeters, 
                but the real battle is at the keystroke level. That's where we make our stand.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">Our Vision</h2>
              <p className="text-lg text-text-secondary mb-6">
                To become the infrastructure that protects democratic society at civilization scale. We envision 
                a world where sophisticated cybersecurity is as intuitive and reliable as turning on a light switch.
              </p>
              <p className="text-text-secondary">
                Nordic precision in design, human-centric in approach, global in impact. We're building the security 
                foundation for the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-text-secondary">
              The principles that guide everything we build
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Simplicity</h3>
              <p className="text-text-secondary text-sm">
                Advanced security should be simple to implement, manage, and understand. 
                Complexity is the enemy of security.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Innovation</h3>
              <p className="text-text-secondary text-sm">
                We solve problems others haven't even recognized yet. Physical input verification 
                is just the beginning.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Human-Centric</h3>
              <p className="text-text-secondary text-sm">
                Technology serves people, not the other way around. Our solutions empower teams 
                rather than burden them.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Excellence</h3>
              <p className="text-text-secondary text-sm">
                Nordic precision in everything we do. Elite quality doesn't have to mean 
                inaccessible complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-text-secondary">
              Experienced leaders from cybersecurity, technology, and Nordic innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Arni Johannsen</h3>
              <p className="text-accent text-sm font-medium mb-4">Chief Executive Officer</p>
              <p className="text-text-secondary text-sm">
                Former CISO at Nordic Financial Group. 15+ years securing critical infrastructure 
                across Scandinavia. Passionate about making sophisticated security accessible.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Dr. Elena Volkov</h3>
              <p className="text-accent text-sm font-medium mb-4">Chief Technology Officer</p>
              <p className="text-text-secondary text-sm">
                Ph.D. in Computer Science from KTH. Lead architect of physical input verification 
                technology. Published researcher in keystroke dynamics and behavioral biometrics.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Marcus Chen</h3>
              <p className="text-accent text-sm font-medium mb-4">Chief Operating Officer</p>
              <p className="text-text-secondary text-sm">
                Former VP of Operations at CrowdStrike. Expert in scaling cybersecurity operations 
                globally. Focused on customer success and enterprise deployment excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-text-secondary">
              Key milestones in building the future of cybersecurity
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 text-center md:text-right">
                <div className="text-2xl font-bold text-accent mb-2">2021</div>
                <div className="text-text-muted text-sm">Foundation Year</div>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex-shrink-0"></div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold text-text-primary mb-2">Company Founded</h3>
                <p className="text-text-secondary">
                  Keystrike established in Reykjavik with initial funding and core team assembly. 
                  First physical input verification prototypes developed.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 text-center md:text-right">
                <div className="text-2xl font-bold text-accent mb-2">2022</div>
                <div className="text-text-muted text-sm">Technology Development</div>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex-shrink-0"></div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold text-text-primary mb-2">Platform Launch</h3>
                <p className="text-text-secondary">
                  Beta platform released to select Nordic enterprises. First successful keystroke 
                  anomaly detection in production environments.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 text-center md:text-right">
                <div className="text-2xl font-bold text-accent mb-2">2023</div>
                <div className="text-text-muted text-sm">Market Expansion</div>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex-shrink-0"></div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold text-text-primary mb-2">Series A Funding</h3>
                <p className="text-text-secondary">
                  $15M Series A led by Nordic Capital. European market expansion begins. 
                  First 1,000 customers onboarded successfully.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 text-center md:text-right">
                <div className="text-2xl font-bold text-accent mb-2">2024</div>
                <div className="text-text-muted text-sm">Global Recognition</div>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex-shrink-0"></div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold text-text-primary mb-2">Industry Awards</h3>
                <p className="text-text-secondary">
                  SC Media Innovation Award winner. Gartner Cool Vendor recognition. 
                  SOC 2 Type II certification achieved.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 text-center md:text-right">
                <div className="text-2xl font-bold text-accent mb-2">2025</div>
                <div className="text-text-muted text-sm">Scale & Innovation</div>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex-shrink-0"></div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold text-text-primary mb-2">AI Integration</h3>
                <p className="text-text-secondary">
                  Advanced AI threat detection launched. 10,000+ organizations protected globally. 
                  Partnership program with leading security vendors initiated.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/4 text-center md:text-right">
                <div className="text-2xl font-bold text-accent mb-2">2026</div>
                <div className="text-text-muted text-span">Current Focus</div>
              </div>
              <div className="w-8 h-8 bg-accent rounded-full flex-shrink-0 animate-pulse"></div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold text-text-primary mb-2">Global Infrastructure</h3>
                <p className="text-text-secondary">
                  Building the security infrastructure for democratic society at civilization scale. 
                  Continuous remote access governance becomes the new standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-surface-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Global Presence</h2>
            <p className="text-xl text-text-secondary">
              Serving organizations across continents from our Nordic roots
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Nordic Headquarters</h3>
              <p className="text-text-secondary text-sm">Reykjavik, Iceland</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">European Operations</h3>
              <p className="text-text-secondary text-sm">Copenhagen, Denmark</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 000-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">North American Office</h3>
              <p className="text-text-secondary text-sm">Austin, Texas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're building the security infrastructure for the digital age. 
            Experience Nordic precision in cybersecurity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Explore Careers
            </button>
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