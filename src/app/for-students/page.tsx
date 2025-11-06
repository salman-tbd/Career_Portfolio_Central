'use client';

import React from 'react';
import Link from 'next/link';
import { useNotification } from '@/hooks/useNotification';
import NotificationModal from '@/components/ui/NotificationModal';

export default function ForStudentsPage() {
  const {
    notification,
    hideNotification,
    showLoginPrompt,
  } = useNotification();

  const handleDownload = () => {
    showLoginPrompt();
  };

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Free Forever Account',
      description: 'Complete access to our platform at no cost for students'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Student Resume Templates',
      description: 'Entry-level templates designed for freshers with no experience'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
        </svg>
      ),
      title: 'Internship & Entry-Level Jobs',
      description: 'Curated job listings specifically for students and graduates'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: '40% Student Discount',
      description: 'Special pricing on Premium and Pro plans with college ID'
    }
  ];

  const journeySteps = [
    {
      step: '1',
      title: 'Build Your First Resume',
      description: 'Create a professional resume highlighting your education, projects, and skills',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      step: '2',
      title: 'Access Student Resources',
      description: 'Learn from guides, templates, and webinars designed for students',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      step: '3',
      title: 'Apply for Internships',
      description: 'Find and apply to internships and entry-level positions',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      step: '4',
      title: 'Land Your First Job',
      description: 'Get expert guidance and successfully start your career',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const resources = [
    {
      title: 'Your First Resume Guide',
      description: 'Complete guide to creating your first professional resume',
      type: 'PDF Guide',
      downloads: '45K+',
      icon: (
        <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Internship Application Toolkit',
      description: 'Everything you need to apply for internships successfully',
      type: 'Toolkit',
      downloads: '32K+',
      icon: '🎒'
    },
    {
      title: 'Campus Placement Preparation',
      description: 'Comprehensive prep guide for campus recruitment',
      type: 'eBook',
      downloads: '28K+',
      icon: (
        <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'LinkedIn for Students',
      description: 'Build a professional LinkedIn profile as a student',
      type: 'Video Guide',
      downloads: '19K+',
      icon: (
        <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
        </svg>
      )
    },
    {
      title: 'Cover Letter Templates',
      description: 'Entry-level cover letter templates with examples',
      type: 'Templates',
      downloads: '38K+',
      icon: '✉️'
    },
    {
      title: 'Interview Preparation',
      description: 'Common interview questions for freshers',
      type: 'Checklist',
      downloads: '41K+',
      icon: (
        <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  const successStories = [
    {
      name: 'Rahul Patel',
      college: 'Gujarat University',
      role: 'Associate Software Engineer at TCS',
      salary: '₹4.5 LPA',
      quote: 'The student resources helped me create a resume that stood out during campus placements!',
      image: 'RP'
    },
    {
      name: 'Priya Malhotra',
      college: 'Delhi University',
      role: 'Marketing Intern at Flipkart',
      salary: '₹2.5 LPA',
      quote: 'I got my dream internship within 2 weeks of using the platform!',
      image: 'PM'
    },
    {
      name: 'Arjun Menon',
      college: 'Anna University',
      role: 'Graduate Engineer Trainee at L&T',
      salary: '₹5.2 LPA',
      quote: 'The interview prep resources were invaluable for my campus placement.',
      image: 'AM'
    },
    {
      name: 'Sneha Gupta',
      college: 'Mumbai University',
      role: 'Business Analyst at Accenture',
      salary: '₹4.8 LPA',
      quote: 'As a fresher, I was worried about my resume. This platform made it so easy!',
      image: 'SG'
    },
    {
      name: 'Vikram Singh',
      college: 'IIT Delhi',
      role: 'Software Developer at Amazon',
      salary: '₹18 LPA',
      quote: 'The tech resume templates and portfolio builder helped me showcase my projects perfectly.',
      image: 'VS'
    },
    {
      name: 'Anjali Reddy',
      college: 'BITS Pilani',
      role: 'Data Analyst at Microsoft',
      salary: '₹12 LPA',
      quote: 'Got placed in my dream company thanks to the interview preparation resources!',
      image: 'AR'
    }
  ];

  const careerPaths = [
    { 
      name: 'Business & Marketing', 
      icon: (
        <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ), 
      jobs: '2,500+' 
    },
    { 
      name: 'Engineering & Tech', 
      icon: (
        <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ), 
      jobs: '8,200+' 
    },
    { 
      name: 'Arts & Design', 
      icon: (
        <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2H7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25c0-2.485 0-2.485-3-2.485" />
        </svg>
      ), 
      jobs: '1,800+' 
    },
    { 
      name: 'Healthcare', 
      icon: (
        <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ), 
      jobs: '1,200+' 
    },
    { 
      name: 'Liberal Arts', 
      icon: (
        <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ), 
      jobs: '950+' 
    },
    { 
      name: 'Science & Research', 
      icon: (
        <svg className="w-8 h-8 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ), 
      jobs: '1,400+' 
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
                10,000+ students launched their careers
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-2xl">
                Launch Your Career
              </span>
              <span className="block gradient-text-gold drop-shadow-2xl">
                With Confidence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-4xl mx-auto">
              Resources designed for students and recent graduates to land their first jobs
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={handleDownload}
                className="btn-gradient px-10 py-5 text-lg font-semibold text-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 group"
              >
                Get Started Free
                <svg className="ml-3 w-5 h-5 inline transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <Link href="/pricing" className="group">
                <button className="glass-card px-10 py-5 text-lg font-semibold text-white rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  View Student Discount
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-brand-navy rounded-full text-sm font-medium mb-8">
              Student Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Everything You Need
              <span className="block gradient-text mt-2">
                As a Student
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-gray-400 hover-lift transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-brand-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Your Student to
              <span className="block gradient-text mt-2">
                Professional Journey
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-brand-gray-300 shadow-sm hover:shadow-lg hover:border-brand-navy transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    {step.step}
                  </div>
                  
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 text-brand-navy shadow-sm">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-brand-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < journeySteps.length - 1 && (
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

      {/* Resources Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Student Career
              <span className="block gradient-text mt-2">
                Resources
              </span>
            </h2>
            <p className="text-xl text-brand-gray-600">
              Free templates, guides, and tools designed for students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-gray-400 hover-lift transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {resource.icon}
                </div>
                
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-brand-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-brand-gray-600">{resource.type}</span>
                  <span className="text-sm font-semibold text-brand-navy">{resource.downloads}</span>
                </div>

                <button 
                  onClick={handleDownload}
                  className="w-full btn-gradient py-3 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Student Success
              <span className="block gradient-text mt-2">
                Stories
              </span>
            </h2>
            <p className="text-xl text-brand-gray-600">
              See how students landed their first jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-brand-gray-300 shadow-lg hover:shadow-xl hover:border-brand-navy hover-lift transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {story.image}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-gray-900">{story.name}</h3>
                    <p className="text-sm text-brand-gray-600">{story.college}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-brand-navy mb-1">{story.role}</div>
                  <div className="text-lg font-bold text-green-600">{story.salary}</div>
                </div>

                <div className="bg-blue-50 border-l-4 border-brand-teal p-4 rounded-r-lg">
                  <p className="text-sm text-brand-gray-700 italic">
                    &quot;{story.quote}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Career Paths by
              <span className="block gradient-text mt-2">
                Major
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {careerPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-gray-400 hover-lift transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-teal rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {path.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">
                  {path.name}
                </h3>
                <p className="text-brand-navy font-semibold">{path.jobs} entry-level jobs</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Career
            <span className="block gradient-text-gold mt-2">
              Journey Today
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join thousands of students who landed their first jobs with our platform
          </p>
          
          <Link href="/signup">
            <button className="relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold text-white bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              Create Free Student Account
            </button>
          </Link>
          
          <p className="mt-6 text-white/80">
            No credit card required • Free forever • Start in minutes
          </p>
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

