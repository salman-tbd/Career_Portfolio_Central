'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useNotification } from '@/hooks/useNotification';
import NotificationModal from '@/components/ui/NotificationModal';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const {
    notification,
    hideNotification,
    showLoginPrompt,
  } = useNotification();

  const handleDownload = () => {
    showLoginPrompt();
  };

  const categories = [
    { 
      id: 'all', 
      name: 'All Resources', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 011-1.732l4-2.5a1 1 0 011 0l4 2.5A1 1 0 0118 5v2M7 7h10" />
        </svg>
      )
    },
    { 
      id: 'templates', 
      name: 'Templates', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      id: 'guides', 
      name: 'Guides & eBooks', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      id: 'tools', 
      name: 'Tools & Calculators', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      id: 'checklists', 
      name: 'Checklists', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    { 
      id: 'videos', 
      name: 'Video Tutorials', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const resources = [
    // Templates
    {
      category: 'templates',
      title: 'Professional Resume Templates',
      description: '50+ ATS-optimized resume templates for Indian job market',
      type: 'PDF Templates',
      isPremium: false,
      downloads: '50K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      category: 'templates',
      title: 'Cover Letter Templates',
      description: 'Professionally designed cover letter templates',
      type: 'Word & PDF',
      isPremium: false,
      downloads: '35K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      category: 'templates',
      title: 'LinkedIn Profile Template',
      description: 'Optimize your LinkedIn profile for Indian recruiters',
      type: 'PDF Guide',
      isPremium: false,
      downloads: '28K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    // Guides
    {
      category: 'guides',
      title: 'Complete Resume Writing Guide',
      description: 'A comprehensive 50-page guide to writing winning resumes',
      type: 'PDF eBook',
      isPremium: false,
      downloads: '45K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      category: 'guides',
      title: 'Salary Negotiation Toolkit',
      description: 'Master salary negotiations in the Indian job market',
      type: 'PDF + Templates',
      isPremium: true,
      downloads: '22K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      category: 'guides',
      title: 'Career Change Playbook',
      description: 'Step-by-step guide for successful career transitions',
      type: 'PDF eBook',
      isPremium: false,
      downloads: '18K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    // Tools
    {
      category: 'tools',
      title: 'Salary Calculator',
      description: 'Calculate your expected salary based on role, experience, and location',
      type: 'Interactive Tool',
      isPremium: false,
      downloads: '65K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      category: 'tools',
      title: 'Resume ATS Score Checker',
      description: 'Check how well your resume passes ATS systems',
      type: 'Online Tool',
      isPremium: false,
      downloads: '52K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      category: 'tools',
      title: 'Career Path Finder Quiz',
      description: 'Discover your ideal career path based on your interests and skills',
      type: 'Interactive Quiz',
      isPremium: false,
      downloads: '38K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    // Checklists
    {
      category: 'checklists',
      title: 'Job Search Checklist',
      description: 'Complete checklist to organize your job search',
      type: 'PDF Checklist',
      isPremium: false,
      downloads: '42K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      category: 'checklists',
      title: 'Interview Preparation Checklist',
      description: 'Everything you need to prepare for your next interview',
      type: 'PDF Checklist',
      isPremium: false,
      downloads: '55K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      category: 'checklists',
      title: 'First 90 Days Checklist',
      description: 'Make a great impression in your new job',
      type: 'PDF Checklist',
      isPremium: false,
      downloads: '25K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    // Videos
    {
      category: 'videos',
      title: 'Resume Writing Masterclass',
      description: 'Complete video series on creating perfect resumes',
      type: '5 Videos',
      isPremium: false,
      downloads: '32K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      category: 'videos',
      title: 'Interview Techniques',
      description: 'Master common interview questions and techniques',
      type: '8 Videos',
      isPremium: true,
      downloads: '28K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      category: 'videos',
      title: 'LinkedIn Optimization',
      description: 'Optimize your LinkedIn profile for maximum visibility',
      type: '4 Videos',
      isPremium: false,
      downloads: '19K+',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      )
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section relative py-24 lg:py-32 text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-10">
              <span className="text-sm font-medium text-white/95 mr-2">
                Free & Premium Resources
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-2xl">
                Free Career Resources
              </span>
              <span className="block gradient-text-gold drop-shadow-2xl">
                to Accelerate Your Success
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-4xl mx-auto">
              Templates, guides, tools, and expert advice at your fingertips
            </p>

            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-6 py-4 rounded-2xl border-none focus:outline-none focus:ring-4 focus:ring-white/30 text-brand-gray-900"
              />
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg'
                    : 'bg-white text-brand-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              {categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-brand-gray-600">
              {filteredResources.length} resources available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-lg hover:shadow-2xl hover:border-gray-400 hover-lift transition-all duration-300">
                {resource.isPremium && (
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full mb-4">
                    ⭐ Premium
                  </div>
                )}

                <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl flex items-center justify-center text-white mb-6">
                  {resource.icon}
                </div>

                <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                  {resource.title}
                </h3>

                <p className="text-brand-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <span className="text-sm text-brand-gray-600">{resource.type}</span>
                  <span className="text-sm font-semibold text-brand-navy">{resource.downloads} downloads</span>
                </div>

                <button 
                  onClick={handleDownload}
                  className="w-full btn-gradient py-3 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  {resource.isPremium ? 'Upgrade to Access' : 'Download Free'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Unlock 100+
            <span className="block gradient-text-gold mt-2">
              Premium Resources
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Get access to exclusive templates, advanced tools, and expert content
          </p>
          
          <Link href="/pricing">
            <button className="relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold text-white bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              Upgrade to Premium
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

