import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Endpoint Security Solution | Physical Input Verification',
  description: 'Advanced endpoint security with physical input verification technology. Keystroke analysis, behavioral monitoring, and real-time threat detection for all devices. 99.9% detection rate.',
  keywords: [
    'endpoint security',
    'physical input verification',
    'keystroke analysis',
    'behavioral monitoring',
    'endpoint protection',
    'device security',
    'remote work security',
    'endpoint detection response',
    'zero trust endpoint'
  ],
  openGraph: {
    title: 'Keystrike Endpoint Security | Physical Input Verification',
    description: 'Revolutionary endpoint security with keystroke-level verification. Protect every device with AI-powered behavioral analysis and real-time threat response.',
    url: '/solutions/endpoint',
    images: [
      {
        url: '/og-endpoint.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Endpoint Security Solution',
      },
    ],
  },
  alternates: {
    canonical: '/solutions/endpoint',
  },
};

export default function EndpointSecurity() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage="solutions" />

      {/* Hero Section */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-lg text-sm font-medium">
                  SEE • CONTROL • PROVE
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Endpoint Security{" "}
                <span className="text-accent">Redefined</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Secure every device, everywhere with physical input verification. Go beyond traditional endpoint 
                protection with keystroke-level security that validates user identity in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn btn-primary text-lg px-8 py-3">
                  Request Demo
                </button>
                <button className="btn btn-secondary text-lg px-8 py-3">
                  Free Trial
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-text-muted">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>5-minute setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>No contracts</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-secondary rounded-lg p-8 border border-border">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Interactive Demo</h3>
                <p className="text-text-secondary mb-6">See real-time keystroke analysis and anomaly detection in action</p>
                <div className="bg-surface rounded-lg p-6 border border-border">
                  <div className="text-left text-sm space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">User: john.doe@corp.com</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">VERIFIED</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Device: CORP-LAPTOP-001</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TRUSTED</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Keystroke Pattern:</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">MATCH</span>
                    </div>
                    <div className="border-t border-border pt-2 mt-3">
                      <div className="text-text-muted text-xs">Real-time analysis complete - Access granted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              The Endpoint Security Gap
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Traditional endpoint security focuses on device protection, but 86% of attacks happen after 
              access is granted. The real battle is at the input level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Device-Only Protection</h3>
              <p className="text-text-secondary text-sm">
                Traditional EDR protects the device but can't verify who's actually using it
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Post-Authentication Blindness</h3>
              <p className="text-text-secondary text-sm">
                Once authenticated, users can act maliciously without behavioral verification
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Insider Threat Risk</h3>
              <p className="text-text-secondary text-sm">
                No continuous validation means compromised accounts go undetected
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keystrike's Approach */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              The Keystrike Approach
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Physical input verification completes your endpoint security. We verify not just what device 
              is being used, but who is actually using it—keystroke by keystroke.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* SEE */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">SEE</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Real-Time Input Monitoring</h4>
              <ul className="text-left space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Keystroke pattern analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Mouse movement tracking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Application usage patterns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Session timeline visibility</span>
                </li>
              </ul>
            </div>

            {/* CONTROL */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">CONTROL</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Automated Policy Enforcement</h4>
              <ul className="text-left space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Real-time access blocking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Anomaly-based restrictions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Adaptive authentication</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Zero-trust enforcement</span>
                </li>
              </ul>
            </div>

            {/* PROVE */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">PROVE</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Immutable Audit Trail</h4>
              <ul className="text-left space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Complete session recordings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Compliance reporting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Forensic investigation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Regulatory compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Endpoint Security Use Cases
            </h2>
            <p className="text-xl text-text-secondary">
              Real-world scenarios where Keystrike endpoint security makes the difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Compromised Account Detection</h3>
                  <p className="text-text-secondary mb-4">
                    An employee's credentials are compromised, but the attacker's keystroke patterns 
                    don't match the legitimate user's behavioral baseline.
                  </p>
                  <div className="text-sm text-accent font-medium">
                    Result: Anomalous behavior detected within minutes, access blocked automatically
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Insider Threat Prevention</h3>
                  <p className="text-text-secondary mb-4">
                    A malicious insider begins accessing sensitive data outside their normal patterns, 
                    triggering behavioral analytics alerts.
                  </p>
                  <div className="text-sm text-accent font-medium">
                    Result: Suspicious activity flagged before data exfiltration occurs
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Remote Workforce Security</h3>
                  <p className="text-text-secondary mb-4">
                    Ensure that remote employees are who they claim to be, even when working 
                    from personal devices or unsecured networks.
                  </p>
                  <div className="text-sm text-accent font-medium">
                    Result: Continuous identity verification regardless of device or location
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Compliance Audit Trail</h3>
                  <p className="text-text-secondary mb-4">
                    Maintain detailed records of who accessed what, when, and how for SOX, HIPAA, 
                    and other regulatory requirements.
                  </p>
                  <div className="text-sm text-accent font-medium">
                    Result: Complete audit trail with behavioral verification for all access events
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Business Value */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Proven Business Impact
            </h2>
            <p className="text-xl text-text-secondary">
              Real ROI from customers who implemented Keystrike endpoint security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">94%</div>
              <div className="text-text-secondary text-sm">Reduction in security incidents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">67%</div>
              <div className="text-text-secondary text-sm">Faster threat detection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$2.4M</div>
              <div className="text-text-secondary text-sm">Average cost savings per breach prevented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5 min</div>
              <div className="text-text-secondary text-sm">Average deployment time</div>
            </div>
          </div>
          
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">ROI Calculator</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Your Investment</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Keystrike per endpoint/month</span>
                    <span className="font-semibold">$12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">1,000 endpoints × 12 months</span>
                    <span className="font-semibold">$144,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Implementation services</span>
                    <span className="font-semibold">$25,000</span>
                  </div>
                  <div className="border-t border-border pt-2">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Annual Investment</span>
                      <span className="text-accent">$169,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">Your Savings</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Prevented breaches (average)</span>
                    <span className="font-semibold">2.3 per year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Cost per breach (industry avg)</span>
                    <span className="font-semibold">$4.45M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Reduced security staff hours</span>
                    <span className="font-semibold">$180,000</span>
                  </div>
                  <div className="border-t border-border pt-2">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Annual Savings</span>
                      <span className="text-green-600">$10.4M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <div className="text-3xl font-bold text-green-600 mb-2">ROI: 6,050%</div>
              <p className="text-text-secondary">Payback period: 6 days</p>
              <button className="btn btn-primary mt-6">
                Calculate Your ROI
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-text-secondary">
              Enterprise-grade endpoint security with minimal performance impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">System Requirements</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Supported Operating Systems</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• Windows 10/11 (all editions)</li>
                    <li>• macOS 11.0+ (Intel and Apple Silicon)</li>
                    <li>• Ubuntu 18.04+ LTS</li>
                    <li>• RHEL/CentOS 7+</li>
                    <li>• Chrome OS (Enterprise)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Hardware Requirements</h4>
                  <ul className="text-text-secondary text-sm space-y-1">
                    <li>• CPU: 2 cores, 2.0 GHz minimum</li>
                    <li>• RAM: 4 GB minimum, 8 GB recommended</li>
                    <li>• Storage: 500 MB free space</li>
                    <li>• Network: HTTPS (443) outbound</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-text-secondary">CPU Usage</span>
                  <span className="font-semibold">&lt; 2%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-text-secondary">Memory Usage</span>
                  <span className="font-semibold">&lt; 100 MB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-text-secondary">Network Bandwidth</span>
                  <span className="font-semibold">&lt; 50 KB/day</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-text-secondary">Battery Impact</span>
                  <span className="font-semibold">&lt; 1%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-text-secondary">Boot Time Impact</span>
                  <span className="font-semibold">0 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Every Endpoint?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of organizations using Keystrike's physical input verification 
            to protect their endpoints with continuous identity validation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Schedule Demo
            </button>
          </div>
          <div className="text-blue-100 text-sm">
            <p>30-day free trial • No credit card required • 5-minute setup</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}