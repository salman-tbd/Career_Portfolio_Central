'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Resume Builder',
      description: 'Create ATS-optimized resumes with AI assistance and industry-specific templates that get you interviews',
      features: [
        'AI-powered content suggestions',
        'ATS optimization for Indian companies',
        '50+ professional templates',
        'Real-time preview & editing',
        'Export to PDF, Word, and plain text',
        'Multiple resume versions'
      ],
      href: '/resume-builder',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      badge: 'AI Powered'
    },
    {
      title: 'Portfolio Showcase',
      description: 'Display your work with interactive galleries, case studies, and professional presentations',
      features: [
        'Stunning portfolio templates',
        'Image & video galleries',
        'Project case studies',
        'Custom domain support',
        'Analytics & insights',
        'Share via unique URLs'
      ],
      href: '/portfolio-showcase',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      badge: 'Interactive'
    },
    {
      title: 'Smart Job Matching',
      description: 'Discover curated opportunities with AI-powered matching based on your skills and preferences',
      features: [
        'AI-powered job recommendations',
        '50,000+ active job listings',
        'Filter by location, salary, skills',
        'Save jobs & set alerts',
        'Direct application tracking',
        'Salary insights & company reviews'
      ],
      href: '/job-listings',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
        </svg>
      ),
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      badge: 'Smart Match'
    },
    {
      title: 'Expert Career Coaching',
      description: 'One-on-one sessions with certified career coaches who understand your industry and the Indian job market',
      features: [
        '500+ certified counselors',
        'Industry-specific expertise',
        'Resume & LinkedIn reviews',
        'Mock interviews & feedback',
        'Salary negotiation coaching',
        'Career transition guidance'
      ],
      href: '/career-counselling',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      badge: 'Expert Led'
    },
    {
      title: 'Premium Membership',
      description: 'Unlock advanced features, priority support, and exclusive career resources',
      features: [
        'Unlimited resume downloads',
        'Premium templates & designs',
        'Priority job matching',
        'Advanced analytics',
        'Priority customer support',
        'Exclusive webinars & resources'
      ],
      href: '/membership',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      gradient: 'from-yellow-500 to-yellow-600',
      bgGradient: 'from-yellow-50 to-yellow-100',
      badge: 'Premium'
    },
    {
      title: 'Learning Resources',
      description: 'Access courses, webinars, and industry insights to continuously develop your skills',
      features: [
        'Weekly career webinars',
        'Industry expert workshops',
        'Downloadable templates',
        'Career guides & eBooks',
        'Video tutorials',
        'Blog articles & insights'
      ],
      href: '/blog',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100',
      badge: 'Updated Daily'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Sign Up',
      description: 'Create your free account in less than 2 minutes',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      step: '2',
      title: 'Build',
      description: 'Create your professional resume and portfolio',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      step: '3',
      title: 'Connect',
      description: 'Find perfect job matches and expert counselors',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      step: '4',
      title: 'Succeed',
      description: 'Land your dream career with confidence',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section relative py-24 lg:py-32 text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-10 animate-fade-in-down hover:scale-105 transition-transform duration-300">
              <span className="text-sm font-medium text-white/95 mr-2">
                Comprehensive Career Platform
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              <span className="block text-white drop-shadow-2xl">
                Comprehensive Career
              </span>
              <span className="block gradient-text-gold drop-shadow-2xl animate-delay-200">
                Development Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed animate-fade-in-up animate-delay-400 max-w-4xl mx-auto">
              Everything you need to build, showcase, and advance your career all in one powerful platform
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up animate-delay-600">
              <Link href="/signup" className="group">
                <button className="btn-gradient relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                  Get Started Free
                  <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              
              <Link href="/pricing" className="group">
                <button className="glass-card relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white rounded-2xl hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  View Pricing
                  <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-1">100K+</div>
                <div className="text-sm text-white/90">Active Users</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-1">95%</div>
                <div className="text-sm text-white/90">Success Rate</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="text-sm text-white/90">Expert Counselors</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                <div className="text-2xl font-bold text-yellow-400 mb-1">50K+</div>
                <div className="text-sm text-white/90">Job Opportunities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-brand-navy rounded-full text-sm font-medium mb-8">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-brand-gray-900">
              Everything You Need for
              <span className="block gradient-text mt-2">
                Career Success
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-brand-gray-600 max-w-4xl mx-auto leading-relaxed">
              From resume building to job placement, we provide comprehensive career development tools and expert guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <div className="relative p-8 bg-white rounded-3xl border-2 border-brand-gray-300 shadow-lg hover:shadow-2xl hover:border-brand-navy hover-lift overflow-hidden h-full transition-all duration-300">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-brand-navy to-brand-teal text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.badge}
                  </div>
                  
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} text-white rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-brand-gray-900 group-hover:text-brand-navy transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-brand-gray-600 mb-6 leading-relaxed group-hover:text-brand-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-2 text-sm text-brand-gray-600">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <div className="inline-flex items-center text-brand-navy font-semibold group-hover:text-brand-teal transition-all duration-300 transform group-hover:translate-x-1">
                      <span>Learn More</span>
                      <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container relative">
          <div className="text-center mb-20 animate-on-scroll">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-brand-navy rounded-full text-sm font-medium mb-8">
              Simple & Effective
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-brand-gray-900">
              How It
              <span className="block gradient-text mt-2">
                Works
              </span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Get started in 4 simple steps and transform your career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative animate-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-brand-gray-300 shadow-sm hover:shadow-lg hover:border-brand-teal transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 text-brand-navy shadow-sm">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-brand-gray-900">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-brand-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Arrow (hidden on mobile and last item) */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform
              <span className="block gradient-text-gold mt-2">
                Your Career?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 100,000+ professionals who have accelerated their careers with our comprehensive platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/signup" className="group">
                <button className="btn-gradient-reverse relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold bg-white rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                  Start Your Free Account
                  <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              
              <Link href="/contact" className="group">
                <button className="glass-card relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold text-white rounded-2xl border-2 border-white hover:bg-white hover:text-brand-navy focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  Contact Sales
                  <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-medium">Free forever plan</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-medium">Setup in 5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

