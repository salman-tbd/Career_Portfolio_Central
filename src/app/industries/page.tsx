'use client';

import React from 'react';
import Link from 'next/link';
import { useNotification } from '@/hooks/useNotification';
import NotificationModal from '@/components/ui/NotificationModal';

export default function IndustriesPage() {
  const {
    notification,
    hideNotification,
    showLoginPrompt,
  } = useNotification();

  const handleExploreIndustry = () => {
    showLoginPrompt();
  };

  const industries = [
    {
      id: 'it-software',
      name: 'Technology & IT',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-600',
      jobs: '15,000+',
      counselors: '120+',
      description: 'Software development, IT services, and technology consulting',
      skills: ['React', 'Python', 'Java', 'Cloud Computing', 'DevOps', 'Data Science'],
      avgSalary: '₹6-20 LPA',
      topCompanies: ['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra', 'Google India']
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Medical',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: 'from-red-500 to-pink-600',
      jobs: '5,500+',
      counselors: '45+',
      description: 'Hospitals, pharmaceuticals, and medical devices',
      skills: ['Clinical Care', 'Medical Research', 'Healthcare Management', 'Pharmacy', 'Nursing'],
      avgSalary: '₹5-18 LPA',
      topCompanies: ['Apollo Hospitals', 'Fortis', 'Max Healthcare', 'Dr. Reddy\'s', 'Sun Pharma']
    },
    {
      id: 'finance',
      name: 'Finance & Banking',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-yellow-500 to-orange-600',
      jobs: '8,200+',
      counselors: '85+',
      description: 'Banking, financial services, and fintech',
      skills: ['Financial Analysis', 'Risk Management', 'Investment Banking', 'Accounting', 'Trading'],
      avgSalary: '₹7-25 LPA',
      topCompanies: ['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Deloitte', 'EY', 'PwC']
    },
    {
      id: 'marketing',
      name: 'Marketing & Advertising',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-600',
      jobs: '6,800+',
      counselors: '65+',
      description: 'Digital marketing, brand management, and advertising',
      skills: ['Digital Marketing', 'SEO/SEM', 'Content Strategy', 'Social Media', 'Analytics'],
      avgSalary: '₹4-15 LPA',
      topCompanies: ['Flipkart', 'Amazon', 'Ogilvy', 'WPP', 'Publicis', 'Dentsu']
    },
    {
      id: 'education',
      name: 'Education & Training',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-600',
      jobs: '4,200+',
      counselors: '38+',
      description: 'EdTech, teaching, and corporate training',
      skills: ['Teaching', 'Curriculum Development', 'E-learning', 'Training & Development'],
      avgSalary: '₹3-12 LPA',
      topCompanies: ['Byju\'s', 'Unacademy', 'Vedantu', 'Upgrad', 'Coursera']
    },
    {
      id: 'engineering',
      name: 'Engineering & Construction',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-600',
      jobs: '7,500+',
      counselors: '52+',
      description: 'Civil, mechanical, and construction engineering',
      skills: ['AutoCAD', 'Project Management', 'Civil Engineering', 'Mechanical Design', 'Quality Control'],
      avgSalary: '₹5-16 LPA',
      topCompanies: ['L&T', 'Tata Projects', 'Shapoorji Pallonji', 'Godrej', 'Mahindra']
    },
    {
      id: 'sales',
      name: 'Sales & Business Development',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-600',
      jobs: '9,300+',
      counselors: '72+',
      description: 'B2B/B2C sales and business growth',
      skills: ['Sales Strategy', 'Lead Generation', 'Negotiation', 'CRM', 'Business Development'],
      avgSalary: '₹4-18 LPA',
      topCompanies: ['Oracle', 'Salesforce', 'SAP', 'Microsoft', 'AWS']
    },
    {
      id: 'hr',
      name: 'Human Resources',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-600',
      jobs: '3,800+',
      counselors: '42+',
      description: 'Talent acquisition, HR operations, and employee relations',
      skills: ['Recruitment', 'HR Operations', 'Employee Relations', 'Performance Management', 'HRIS'],
      avgSalary: '₹4-14 LPA',
      topCompanies: ['Deloitte', 'Accenture', 'Cognizant', 'TCS', 'Wipro']
    },
    {
      id: 'legal',
      name: 'Legal & Compliance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      gradient: 'from-gray-500 to-slate-700',
      jobs: '2,100+',
      counselors: '28+',
      description: 'Corporate law, compliance, and legal advisory',
      skills: ['Corporate Law', 'Compliance', 'Contract Management', 'Legal Research', 'IP Law'],
      avgSalary: '₹6-22 LPA',
      topCompanies: ['Khaitan & Co', 'AZB', 'Cyril Amarchand', 'J Sagar Associates']
    },
    {
      id: 'creative',
      name: 'Creative & Design',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-600',
      jobs: '4,600+',
      counselors: '35+',
      description: 'Graphic design, UX/UI, and creative direction',
      skills: ['UI/UX Design', 'Graphic Design', 'Adobe Creative Suite', 'Figma', 'Branding'],
      avgSalary: '₹3-12 LPA',
      topCompanies: ['Adobe', 'Flipkart', 'Amazon', 'Zomato', 'Swiggy']
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      gradient: 'from-teal-500 to-green-600',
      jobs: '3,200+',
      counselors: '25+',
      description: 'Property development, sales, and management',
      skills: ['Property Management', 'Real Estate Sales', 'Market Analysis', 'Leasing', 'Valuation'],
      avgSalary: '₹4-15 LPA',
      topCompanies: ['DLF', 'Godrej Properties', 'Prestige Group', 'Brigade Group']
    },
    {
      id: 'hospitality',
      name: 'Hospitality & Tourism',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      gradient: 'from-sky-500 to-blue-600',
      jobs: '2,900+',
      counselors: '22+',
      description: 'Hotels, travel, and tourism services',
      skills: ['Hotel Management', 'Customer Service', 'Event Management', 'Travel Operations'],
      avgSalary: '₹3-10 LPA',
      topCompanies: ['Taj Hotels', 'ITC Hotels', 'Marriott', 'OYO', 'MakeMyTrip']
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Production',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: 'from-amber-500 to-orange-600',
      jobs: '6,400+',
      counselors: '48+',
      description: 'Production, quality control, and supply chain',
      skills: ['Production Planning', 'Quality Assurance', 'Lean Manufacturing', 'Supply Chain', 'Six Sigma'],
      avgSalary: '₹5-16 LPA',
      topCompanies: ['Tata Motors', 'Mahindra', 'Maruti Suzuki', 'Bosch', 'Siemens']
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-violet-500 to-purple-600',
      jobs: '7,100+',
      counselors: '58+',
      description: 'Retail operations and online commerce',
      skills: ['Retail Management', 'E-commerce', 'Merchandising', 'Inventory Management', 'Customer Service'],
      avgSalary: '₹3-12 LPA',
      topCompanies: ['Flipkart', 'Amazon', 'Reliance Retail', 'Big Basket', 'Myntra']
    },
    {
      id: 'consulting',
      name: 'Consulting',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
        </svg>
      ),
      gradient: 'from-slate-600 to-gray-800',
      jobs: '4,500+',
      counselors: '56+',
      description: 'Management and strategy consulting',
      skills: ['Strategy', 'Business Analysis', 'Problem Solving', 'Project Management', 'Client Management'],
      avgSalary: '₹8-28 LPA',
      topCompanies: ['McKinsey', 'BCG', 'Bain', 'Deloitte', 'Accenture', 'EY']
    },
    {
      id: 'nonprofit',
      name: 'Non-Profit & Social Services',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-600',
      jobs: '1,800+',
      counselors: '18+',
      description: 'Social work and community development',
      skills: ['Program Management', 'Fundraising', 'Community Outreach', 'Grant Writing', 'Impact Assessment'],
      avgSalary: '₹3-8 LPA',
      topCompanies: ['NGOs', 'Foundations', 'Social Enterprises', 'UN Agencies']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section relative py-24 lg:py-32 text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-10">
              <span className="text-sm font-medium text-white/95 mr-2">
                16+ Industries Covered
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-2xl">
                Industry-Specific
              </span>
              <span className="block gradient-text-gold drop-shadow-2xl">
                Career Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-4xl mx-auto">
              Tailored resources and guidance for your industry
            </p>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Find Your
              <span className="block gradient-text mt-2">
                Industry
              </span>
            </h2>
            <p className="text-xl text-brand-gray-600">
              Select your industry to access specialized resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="bg-white rounded-2xl p-6 border-2 border-brand-gray-300 shadow-lg hover:shadow-2xl hover:border-brand-navy hover-lift transition-all duration-300 animate-on-scroll"
                style={{animationDelay: `${index * 50}ms`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {industry.icon}
                </div>
                
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">
                  {industry.name}
                </h3>
                
                <p className="text-sm text-brand-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <div className="text-xs text-brand-gray-500 mb-1">Jobs</div>
                    <div className="text-sm font-bold text-brand-navy">{industry.jobs}</div>
                  </div>
                  <div>
                    <div className="text-xs text-brand-gray-500 mb-1">Experts</div>
                    <div className="text-sm font-bold text-brand-navy">{industry.counselors}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-brand-gray-500 mb-2">Avg Salary</div>
                  <div className="text-lg font-bold text-green-600">{industry.avgSalary}</div>
                </div>

                <button 
                  onClick={handleExploreIndustry}
                  className="w-full btn-gradient py-2.5 text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Explore {industry.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industry Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border-2 border-brand-gray-300 shadow-xl hover:border-brand-navy transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Featured: Technology & IT
                </div>

                <h2 className="text-4xl font-bold text-brand-gray-900 mb-6">
                  Technology & IT Career Resources
                </h2>

                <p className="text-lg text-brand-gray-700 mb-8 leading-relaxed">
                  India&apos;s largest tech job market with opportunities at top companies. From software development to cloud computing, find your perfect tech role.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-gray-900">15,000+ Active Jobs</h4>
                      <p className="text-sm text-brand-gray-600">New positions added daily from top tech companies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-gray-900">120+ Expert Counselors</h4>
                      <p className="text-sm text-brand-gray-600">Specialists from TCS, Infosys, Google, and more</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-gray-900">Specialized Templates</h4>
                      <p className="text-sm text-brand-gray-600">Tech-focused resume templates optimized for ATS</p>
                    </div>
                  </div>
                </div>

                <Link href="/job-listings?industry=it">
                  <button className="btn-gradient px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Explore Tech Jobs
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border-2 border-brand-gray-300 shadow-sm hover:shadow-lg hover:border-brand-teal transition-all duration-300">
                  <h4 className="font-bold text-brand-gray-900 mb-3">In-Demand Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Python', 'Java', 'Cloud', 'DevOps', 'Data Science', 'AI/ML', 'Cybersecurity'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-brand-gray-300 shadow-sm hover:shadow-lg hover:border-brand-teal transition-all duration-300">
                  <h4 className="font-bold text-brand-gray-900 mb-3">Top Hiring Companies</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra', 'Google'].map((company) => (
                      <div key={company} className="text-center p-3 bg-gray-50 rounded-lg text-sm font-medium text-brand-gray-700">
                        {company}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-brand-navy to-brand-teal text-white rounded-xl p-6">
                  <h4 className="font-bold mb-2">Average Salary Range</h4>
                  <div className="text-3xl font-bold">₹6-20 LPA</div>
                  <p className="text-sm text-white/80 mt-2">Based on 10,000+ placements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Perfect
            <span className="block gradient-text-gold mt-2">
              Career Path
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Get personalized career guidance tailored to your industry
          </p>
          
          <Link href="/signup">
            <button className="relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold text-white bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              Get Started Free
            </button>
          </Link>
        </div>
      </section>

      {/* Notification Modal */}
      {notification.config && (
        <NotificationModal
          isOpen={notification.isOpen}
          onClose={hideNotification}
          {...notification.config}
        />
      )}
    </div>
  );
}

