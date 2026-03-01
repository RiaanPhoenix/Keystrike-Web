import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Network Protection Solution | Zero Trust Architecture',
  description: 'Advanced network protection with zero trust architecture and physical input verification. Real-time traffic analysis, automated threat response, and comprehensive network security.',
  keywords: [
    'network protection',
    'network security',
    'zero trust architecture',
    'physical input verification',
    'network monitoring',
    'traffic analysis',
    'network threat detection',
    'perimeter security',
    'network access control'
  ],
  openGraph: {
    title: 'Keystrike Network Protection | Zero Trust Security',
    description: 'Comprehensive network protection with zero trust principles. Monitor, analyze, and protect network traffic with physical input verification technology.',
    url: '/solutions/network',
    images: [
      {
        url: '/og-network.jpg',
        width: 1200,
        height: 630,
        alt: 'Keystrike Network Protection Solution',
      },
    ],
  },
  alternates: {
    canonical: '/solutions/network',
  },
};

export default function NetworkProtection() {
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
                  CONTROL • GOVERN • SECURE
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
                Network Protection{" "}
                <span className="text-accent">Evolved</span>
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Defend your digital perimeter with intelligent network access governance. Physical input 
                verification ensures that network access is granted only to verified users, not just authenticated credentials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn btn-primary text-lg px-8 py-3">
                  Request Demo
                </button>
                <button className="btn btn-secondary text-lg px-8 py-3">
                  Free Assessment
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-text-muted">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Zero-trust networking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Real-time monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Automated response</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-secondary rounded-lg p-8 border border-border">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">Network Access Map</h3>
                <p className="text-text-secondary mb-6">Real-time visualization of network access patterns and user behavior</p>
                <div className="bg-surface rounded-lg p-6 border border-border">
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-text-secondary">Verified Users</div>
                      <div className="font-bold text-green-600">127</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      </div>
                      <div className="text-text-secondary">Under Review</div>
                      <div className="font-bold text-yellow-600">3</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <div className="text-text-secondary">Blocked</div>
                      <div className="font-bold text-red-600">0</div>
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
              The Network Security Challenge
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Traditional network security assumes trust after authentication. But in a world where credentials 
              are compromised daily, authentication alone isn't enough.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Perimeter Dissolution</h3>
              <p className="text-text-secondary text-sm">
                Remote work has eliminated the traditional network perimeter. VPNs provide access, not governance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Lateral Movement</h3>
              <p className="text-text-secondary text-sm">
                Once inside, attackers move freely. Network segmentation is complex and often ineffective.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Visibility Gaps</h3>
              <p className="text-text-secondary text-sm">
                Network monitoring shows traffic patterns but can't verify user identity at the access level.
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
              Zero-Trust Network Access
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Keystrike transforms network access from "authenticate once, trust always" to "verify continuously, 
              grant precisely." Every network connection is validated through physical input verification.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Network Visibility */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">SEE</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Complete Network Visibility</h4>
              <ul className="text-left space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>User-to-resource mapping</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Real-time access patterns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Network topology discovery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Behavioral analytics</span>
                </li>
              </ul>
            </div>

            {/* Access Control */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">CONTROL</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Dynamic Access Control</h4>
              <ul className="text-left space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Micro-segmentation enforcement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Just-in-time access provisioning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Automated threat response</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Policy-based routing</span>
                </li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">PROVE</h3>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Network Access Governance</h4>
              <ul className="text-left space-y-2 text-sm text-text-secondary">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Complete access audit trails</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Compliance reporting automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Risk assessment dashboards</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span>Incident reconstruction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Advanced Network Security Features
            </h2>
            <p className="text-xl text-text-secondary">
              Comprehensive network protection through intelligent access governance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">Software-Defined Perimeter</h3>
                  <p className="text-text-secondary mb-4">
                    Dynamic network perimeters that adapt to user behavior and context. Network access 
                    is granted based on continuous verification, not static credentials.
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Identity-based network segmentation</li>
                    <li>• Zero-trust network architecture</li>
                    <li>• Dynamic policy enforcement</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">Network Behavior Analytics</h3>
                  <p className="text-text-secondary mb-4">
                    Machine learning algorithms analyze network access patterns to identify anomalies 
                    and potential security threats in real-time.
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Baseline behavior modeling</li>
                    <li>• Anomaly detection algorithms</li>
                    <li>• Risk scoring and alerts</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">Intelligent Traffic Analysis</h3>
                  <p className="text-text-secondary mb-4">
                    Deep packet inspection combined with user behavior analysis provides comprehensive 
                    visibility into network communications and data flows.
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Protocol analysis and classification</li>
                    <li>• Data flow visualization</li>
                    <li>• Encrypted traffic insights</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">Automated Incident Response</h3>
                  <p className="text-text-secondary mb-4">
                    When threats are detected, automated response systems immediately contain the threat 
                    while preserving evidence for forensic analysis.
                  </p>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Real-time threat containment</li>
                    <li>• Automated network isolation</li>
                    <li>• Evidence preservation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Network Infrastructure Integration
            </h2>
            <p className="text-xl text-text-secondary">
              Seamlessly integrates with your existing network infrastructure and security tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6">Network Platforms</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">C</span>
                  </div>
                  <span className="font-medium text-text-primary">Cisco Networking</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-green-600">J</span>
                  </div>
                  <span className="font-medium text-text-primary">Juniper Networks</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-purple-600">A</span>
                  </div>
                  <span className="font-medium text-text-primary">Aruba Networks</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-orange-600">F</span>
                  </div>
                  <span className="font-medium text-text-primary">Fortinet FortiGate</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6">Security Tools</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-red-600">PA</span>
                  </div>
                  <span className="font-medium text-text-primary">Palo Alto Networks</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">Z</span>
                  </div>
                  <span className="font-medium text-text-primary">Zscaler ZIA</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">CS</span>
                  </div>
                  <span className="font-medium text-text-primary">CrowdStrike Falcon</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600">S</span>
                  </div>
                  <span className="font-medium text-text-primary">Splunk SIEM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-6">Cloud Platforms</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-orange-600">AWS</span>
                  </div>
                  <span className="font-medium text-text-primary">Amazon VPC</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">AZ</span>
                  </div>
                  <span className="font-medium text-text-primary">Azure Virtual Network</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-600">GCP</span>
                  </div>
                  <span className="font-medium text-text-primary">Google Cloud VPC</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-surface-secondary rounded-lg">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-red-600">K8s</span>
                  </div>
                  <span className="font-medium text-text-primary">Kubernetes CNI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="bg-surface-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Network Security ROI
            </h2>
            <p className="text-xl text-text-secondary">
              Quantifiable business impact from intelligent network access governance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">89%</div>
              <div className="text-text-secondary text-sm">Reduction in lateral movement attacks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">73%</div>
              <div className="text-text-secondary text-sm">Faster incident response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$3.2M</div>
              <div className="text-text-secondary text-sm">Average savings from prevented breaches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">45%</div>
              <div className="text-text-secondary text-sm">Reduction in network admin overhead</div>
            </div>
          </div>
          
          <div className="card p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-primary mb-4">Customer Success Story</h3>
              <div className="max-w-4xl mx-auto">
                <div className="bg-surface-muted p-6 rounded-lg italic text-text-secondary mb-6">
                  "Keystrike transformed our network security from reactive to proactive. We now have complete 
                  visibility into who's accessing what, when, and why. The physical input verification caught 
                  a credential stuffing attack that our traditional network monitoring missed entirely."
                </div>
                <div className="text-center">
                  <div className="font-bold text-text-primary">Michael Chen</div>
                  <div className="text-text-muted text-sm">CISO, Global Manufacturing Corp</div>
                  <div className="text-text-muted text-sm">15,000 employees • $2.8B revenue</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-bold text-text-primary mb-2">Challenge</h4>
                <p className="text-text-secondary text-sm">
                  Complex hybrid network with 50+ locations and thousands of remote workers accessing 
                  critical manufacturing systems
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-text-primary mb-2">Solution</h4>
                <p className="text-text-secondary text-sm">
                  Implemented Keystrike network protection across all access points with behavioral 
                  analytics and automated response
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-text-primary mb-2">Results</h4>
                <p className="text-text-secondary text-sm">
                  92% reduction in security incidents, $4.1M in prevented breach costs, 
                  60% faster threat detection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Network Security?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Move beyond perimeter-based security to continuous network access governance. 
            Experience zero-trust networking with physical input verification.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button className="bg-white text-accent px-8 py-3 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-white hover:text-accent transition-colors">
              Free Network Assessment
            </button>
          </div>
          <div className="text-blue-100 text-sm">
            <p>Free 30-day trial • Expert implementation support • No long-term contracts</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}