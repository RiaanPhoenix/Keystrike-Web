import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Keystrike | Cybersecurity Innovation & Excellence',
  description: 'Meet the team behind Keystrike\'s physical input verification technology. We strive for excellence, innovation, and empathy in cybersecurity. Learn about our mission and values.',
  keywords: [
    'keystrike about',
    'cybersecurity company',
    'physical input verification',
    'keystrike leadership',
    'security innovation',
    'cybersecurity team',
    'enterprise security',
    'human-centric security',
    'keystrike founders'
  ],
  openGraph: {
    title: 'About Keystrike | Meet Our Cybersecurity Innovation Team',
    description: 'Founded by cybersecurity pioneers, Keystrike delivers physical input verification technology with a focus on excellence, innovation, and customer success.',
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
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
            What Makes Us{" "}
            <span className="text-accent">Keystrike?</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            We're building the future of cybersecurity through physical input verification technology, 
            guided by our core values of excellence, innovation, empathy, and human-centric design.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-text-secondary">
              The principles that guide everything we build and every decision we make
            </p>
          </div>
          
          <div className="space-y-16">
            {/* We strive for excellence */}
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">We strive for excellence</h3>
                  <p className="text-text-secondary leading-relaxed">
                    We work to attract, foster, and retain the best talent for business, expecting and delivering high performance by setting and achieving ambitious goals. Believing that we all individually win when the company succeeds, we remain accountable, share responsibilities, and take ownership.
                  </p>
                </div>
              </div>
            </div>

            {/* The customer is our cornerstone */}
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">The customer is our cornerstone</h3>
                  <p className="text-text-secondary leading-relaxed">
                    We empower our customers by simplifying and securing their lives and livelihood, advancing our shared belief that everyone deserves genuine and easy security. We are committed to the idea that business works best when it acts in the service of society.
                  </p>
                </div>
              </div>
            </div>

            {/* We are innovative */}
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">We are innovative</h3>
                  <p className="text-text-secondary leading-relaxed">
                    As pioneers in the field of cybersecurity, we are unafraid to break the mold and challenge conventions. Building on our academic roots, we foster research and collaboration both within and outside our organization. We make decisive choices and anticipate changes to shape a future-ready approach. We value diverse perspectives, knowing they spark innovation and create stronger connections.
                  </p>
                </div>
              </div>
            </div>

            {/* We act with empathy and integrity */}
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">We act with empathy and integrity</h3>
                  <p className="text-text-secondary leading-relaxed">
                    We say what we mean, take responsibility for our actions, and remain open, transparent, and honest. We foster a collaborative and supportive environment, welcoming challenges while ensuring everyone feels seen, heard, valued, and empowered to succeed. With humility and respect, we seek diverse opinions, backgrounds, and experiences to build trust and strengthen connections.
                  </p>
                </div>
              </div>
            </div>

            {/* We are playful and balanced */}
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">We are playful and balanced</h3>
                  <p className="text-text-secondary leading-relaxed">
                    We are endlessly curious, tenacious tinkerers who embrace challenges with a sense of fun and enthusiasm. We value a healthy work-life balance, cherishing every aspect of our lives and recognizing that success is a collective effort—it truly takes a village!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Our Management Team
            </h2>
            <p className="text-xl text-text-secondary">
              Cybersecurity pioneers and technology innovators building the future of security
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Valdimar Oskarsson</h3>
              <p className="text-accent text-sm font-medium mb-4">Co-founder, CEO</p>
              <p className="text-text-secondary text-sm">
                Visionary leader driving the mission to secure digital infrastructure through innovative 
                cybersecurity solutions and human-centric technology design.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Ymir Vigfusson, PhD</h3>
              <p className="text-accent text-sm font-medium mb-4">Co-founder, CTO</p>
              <p className="text-text-secondary text-sm">
                Lead architect of physical input verification technology. Ph.D. researcher with extensive 
                background in cybersecurity innovation and academic excellence.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Steindor Gudmundsson</h3>
              <p className="text-accent text-sm font-medium mb-4">Co-founder, CPO</p>
              <p className="text-text-secondary text-sm">
                Product visionary ensuring our cybersecurity solutions meet real-world needs while 
                maintaining simplicity and ease of deployment for enterprise customers.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Arni S. Petursson</h3>
              <p className="text-accent text-sm font-medium mb-4">Co-founder, COO</p>
              <p className="text-text-secondary text-sm">
                Strategic operations co-leader driving organizational excellence and sustainable growth 
                while maintaining our commitment to innovation and customer service.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Helena Hallgrimsson</h3>
              <p className="text-accent text-sm font-medium mb-4">VP Marketing</p>
              <p className="text-text-secondary text-sm">
                Marketing leader driving brand awareness and strategic marketing initiatives to 
                accelerate market adoption and customer engagement across global markets.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Johanna Vigdis Gudmundsdottir</h3>
              <p className="text-accent text-sm font-medium mb-4">VP Business Development</p>
              <p className="text-text-secondary text-sm">
                Business development leader driving strategic partnerships and market expansion 
                initiatives to accelerate Keystrike's growth in enterprise cybersecurity markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-text-secondary">
              See how organizations are using Keystrike to strengthen their security posture
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-text-primary mb-6 italic leading-relaxed">
                "When I learned about Keystrike, I loved the simplicity. Keystrike ensures that only our own employees are accessing our servers, not adversaries who have hacked our employees. But Keystrike also doesn't bother or distract our employees at all, which is a great win-win: stronger security without added inconvenience."
              </p>
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-text-primary">Heimir Kristjánsson</div>
                <div className="text-text-secondary text-sm">Cyber Security Operations Manager</div>
                <div className="text-accent text-sm font-medium mt-1">Amer Sports</div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-text-primary mb-6 italic leading-relaxed">
                "In about 20 minutes, I had Keystrike up and running. The deployment is simple, well thought out, with clear documentation. Now Keystrike helps us establish that commands are genuine and trustworthy by detecting lurking attackers and blocking when they inject themselves into active sessions. With the combination of powerful technology and ease of deployment, I highly recommend testing Keystrike."
              </p>
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-text-primary">Steven Brill</div>
                <div className="text-text-secondary text-sm">VP of IT Operations and Security</div>
                <div className="text-accent text-sm font-medium mt-1">Global Water Resources</div>
              </div>
            </div>
          </div>

          {/* Quick Deployment Highlight */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-accent bg-opacity-10 rounded-full px-6 py-3">
              <div className="text-accent font-bold text-2xl">20min</div>
              <div className="text-text-primary font-medium">Deploys in 20 minutes</div>
              <div className="text-text-secondary">•</div>
              <div className="text-text-primary">Try Keystrike free for 30 days</div>
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
              <h3 className="text-lg font-bold text-text-primary mb-2">North American Office</h3>
              <p className="text-text-secondary text-sm">Austin, Texas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Middle East Office</h3>
              <p className="text-text-secondary text-sm">Dubai, UAE</p>
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
            <a href="/contact" className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Request Demo
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}