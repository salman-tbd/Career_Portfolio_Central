'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SuccessStoriesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');

  const successStories = [
    {
      id: 1,
      name: 'Priya Sharma',
      image: '/assets/testimonials/avatar-1.jpg',
      previousRole: 'Software Developer at Local IT Firm',
      currentRole: 'Senior Developer at Infosys',
      location: 'Bangalore, Karnataka',
      industry: 'IT/Software',
      salaryJump: '₹6 LPA → ₹14 LPA',
      timeToSuccess: '5 weeks',
      increase: '133%',
      quote: 'The career counseling sessions were game-changing. My counselor understood the Indian job market and helped me negotiate my salary confidently.',
      story: 'After working for 3 years at a small IT company in Pune, I knew I had the skills but not the confidence to apply to bigger companies. Career Portfolio Central helped me completely transform my approach.',
      services: ['Resume Builder', 'Career Counseling', 'Interview Prep'],
      featured: true,
      type: 'it',
      category: 'career-switch'
    },
    {
      id: 2,
      name: 'Rahul Patel',
      image: '/assets/testimonials/avatar-2.jpg',
      previousRole: 'B.Tech Graduate, Gujarat',
      currentRole: 'Associate Software Engineer at TCS',
      location: 'Pune, Maharashtra',
      industry: 'IT/Software',
      salaryJump: 'First job - ₹4.5 LPA',
      timeToSuccess: '3 weeks',
      quote: 'As a fresher with no experience, I was worried. The student resources and entry-level resume templates made all the difference!',
      services: ['Resume Builder', 'For Students'],
      featured: false,
      type: 'it',
      category: 'fresher'
    },
    {
      id: 3,
      name: 'Anjali Reddy',
      image: '/assets/testimonials/avatar-3.jpg',
      previousRole: 'Teacher (5 years)',
      currentRole: 'Digital Marketing Manager at Byju\'s',
      location: 'Bangalore, Karnataka',
      industry: 'Education → Marketing',
      salaryJump: '₹4.2 LPA → ₹9.5 LPA',
      timeToSuccess: '8 weeks',
      increase: '126%',
      quote: 'I never thought I could switch from teaching to marketing at 30. The career counselor helped me identify transferable skills.',
      services: ['Career Counseling', 'Resume Builder', 'Portfolio Showcase'],
      featured: false,
      type: 'other',
      category: 'career-switch'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      image: '/assets/testimonials/avatar-4.jpg',
      previousRole: 'Assistant Manager, HDFC Bank',
      currentRole: 'Branch Manager, ICICI Bank',
      location: 'Gurgaon, Haryana',
      industry: 'Banking & Finance',
      salaryJump: '₹8 LPA → ₹15 LPA',
      timeToSuccess: '6 weeks',
      increase: '88%',
      quote: 'The premium templates and LinkedIn optimization helped me stand out in the competitive banking sector.',
      services: ['Premium Membership', 'Resume Builder'],
      featured: false,
      type: 'other',
      category: 'career-switch'
    },
    {
      id: 5,
      name: 'Dr. Meera Nair',
      image: '/assets/testimonials/avatar-5.jpg',
      previousRole: 'Junior Doctor, Government Hospital',
      currentRole: 'Medical Officer at Apollo Hospitals',
      location: 'Mumbai, Maharashtra',
      industry: 'Healthcare',
      salaryJump: '₹5 LPA → ₹12 LPA',
      timeToSuccess: '4 weeks',
      increase: '140%',
      quote: 'The healthcare-specific resume templates highlighted my qualifications perfectly for private hospitals.',
      services: ['Resume Builder', 'Industry Templates'],
      featured: false,
      type: 'other',
      category: 'career-switch'
    },
    {
      id: 6,
      name: 'Arjun Menon',
      image: '/assets/testimonials/avatar-6.jpg',
      previousRole: 'Mechanical Engineering Graduate',
      currentRole: 'Graduate Engineer Trainee at L&T',
      location: 'Chennai, Tamil Nadu',
      industry: 'Engineering',
      salaryJump: 'First job - ₹5.2 LPA',
      timeToSuccess: '6 weeks',
      quote: 'The mock interviews and technical interview prep helped me crack L&T campus placement!',
      services: ['Interview Prep', 'Career Counseling'],
      featured: false,
      type: 'other',
      category: 'fresher'
    },
    {
      id: 7,
      name: 'Sneha Kapoor',
      image: '/assets/testimonials/avatar-7.jpg',
      previousRole: 'Marketing Executive at Startup',
      currentRole: 'Senior Marketing Manager at Flipkart',
      location: 'Bangalore, Karnataka',
      industry: 'E-commerce & Marketing',
      salaryJump: '₹7 LPA → ₹18 LPA',
      timeToSuccess: '7 weeks',
      increase: '157%',
      quote: 'My portfolio showcase featuring my campaigns caught Flipkart\'s attention immediately!',
      services: ['Portfolio Showcase', 'Resume Builder'],
      featured: false,
      type: 'other',
      category: 'career-switch'
    },
    {
      id: 8,
      name: 'Karthik Iyer',
      image: '/assets/testimonials/avatar-8.jpg',
      previousRole: 'Accountant at Manufacturing Firm',
      currentRole: 'Financial Analyst at Deloitte India',
      location: 'Hyderabad, Telangana',
      industry: 'Finance & Consulting',
      salaryJump: '₹6 LPA → ₹13 LPA',
      timeToSuccess: '6 weeks',
      increase: '117%',
      quote: 'Career Portfolio Central helped me transition from traditional accounting to analytics and consulting.',
      services: ['Career Counseling', 'Resume Builder'],
      featured: false,
      type: 'other',
      category: 'career-switch'
    },
    {
      id: 9,
      name: 'Pooja Deshmukh',
      image: '/assets/testimonials/avatar-9.jpg',
      previousRole: 'HR Executive',
      currentRole: 'Senior HR Manager at Wipro',
      location: 'Pune, Maharashtra',
      industry: 'Human Resources',
      salaryJump: '₹5.5 LPA → ₹11 LPA',
      timeToSuccess: '5 weeks',
      increase: '100%',
      quote: 'The expert guidance helped me position myself for senior leadership roles.',
      services: ['Career Counseling', 'Premium Membership'],
      featured: false,
      type: 'other',
      category: 'career-switch'
    },
    {
      id: 10,
      name: 'Amit Gupta',
      image: '/assets/testimonials/avatar-10.jpg',
      previousRole: 'Sales Executive, Pharma',
      currentRole: 'Regional Sales Manager at Sun Pharma',
      location: 'Mumbai, Maharashtra',
      industry: 'Pharmaceuticals',
      salaryJump: '₹6 LPA → ₹14 LPA + incentives',
      timeToSuccess: '8 weeks',
      increase: '133%',
      quote: 'The platform helped me showcase my sales achievements effectively.',
      services: ['Resume Builder', 'Portfolio Showcase'],
      featured: false,
      type: 'other',
      category: 'career-switch'
    },
    {
      id: 11,
      name: 'Divya Krishnan',
      image: '/assets/testimonials/avatar-11.jpg',
      previousRole: 'Data Entry Operator',
      currentRole: 'Data Analyst at Amazon India',
      location: 'Bangalore, Karnataka',
      industry: 'IT & Analytics',
      salaryJump: '₹3 LPA → ₹9.5 LPA',
      timeToSuccess: '10 weeks',
      increase: '217%',
      quote: 'I upskilled and used the platform to showcase my projects. Amazon noticed my portfolio!',
      services: ['Portfolio Showcase', 'Resume Builder'],
      featured: false,
      type: 'it',
      category: 'career-switch'
    },
    {
      id: 12,
      name: 'Kavita Joshi',
      image: '/assets/testimonials/avatar-12.jpg',
      previousRole: 'Career break (3 years)',
      currentRole: 'Project Manager at Tech Mahindra',
      location: 'Noida, Uttar Pradesh',
      industry: 'IT Services',
      salaryJump: 'Returned at ₹10 LPA',
      timeToSuccess: '12 weeks',
      quote: 'After a 3-year career break, I was nervous. The counselors helped me rebuild my confidence and resume.',
      services: ['Career Counseling', 'Resume Builder'],
      featured: false,
      type: 'it',
      category: 'career-switch'
    }
  ];

  // Filter stories based on category and city
  const filteredStories = successStories.filter(story => {
    // Filter by category
    const categoryMatch = selectedFilter === 'all' || 
      (selectedFilter === 'fresher' && story.category === 'fresher') ||
      (selectedFilter === 'career-switch' && story.category === 'career-switch') ||
      (selectedFilter === 'it' && story.type === 'it');

    // Filter by city
    const cityMatch = selectedCity === 'all' || 
      story.location.toLowerCase().includes(selectedCity.toLowerCase());

    return categoryMatch && cityMatch;
  });

  const featuredStory = filteredStories.find(story => story.featured) || successStories.find(story => story.featured);
  const regularStories = filteredStories.filter(story => !story.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section relative py-24 lg:py-32 text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-10 animate-fade-in-down hover:scale-105 transition-transform duration-300">
              <span className="text-sm font-medium text-white/95 mr-2">
                10,000+ Indian Success Stories
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              <span className="block text-white drop-shadow-2xl">
                Real Indian Professionals.
              </span>
              <span className="block gradient-text-gold drop-shadow-2xl animate-delay-200">
                Real Career Transformations.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed animate-fade-in-up animate-delay-400 max-w-4xl mx-auto">
              Discover how Indian professionals like you achieved their career dreams
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
                <div className="text-sm text-white/90">Hired Within 3 Months</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">₹5-8 LPA</div>
                <div className="text-sm text-white/90">Average Salary Increase</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-sm text-white/90">Cities Across India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === 'all'
                    ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg'
                    : 'bg-white text-brand-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                All Stories
              </button>
              <button
                onClick={() => setSelectedFilter('fresher')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === 'fresher'
                    ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg'
                    : 'bg-white text-brand-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                Freshers
              </button>
              <button
                onClick={() => setSelectedFilter('career-switch')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === 'career-switch'
                    ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg'
                    : 'bg-white text-brand-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                Career Switchers
              </button>
              <button
                onClick={() => setSelectedFilter('it')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === 'it'
                    ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg'
                    : 'bg-white text-brand-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                IT/Software
              </button>
            </div>

            <div className="flex gap-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-6 py-2 rounded-full bg-white border border-gray-300 text-brand-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-brand-teal"
              >
                <option value="all">All Cities</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi NCR</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="pune">Pune</option>
                <option value="chennai">Chennai</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      {featuredStory && (
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 rounded-full text-sm font-medium mb-8">
                ⭐ Featured Success Story
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border-2 border-brand-gray-300 hover:border-brand-navy transition-all duration-300">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {featuredStory.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-gray-900">{featuredStory.name}</h3>
                      <p className="text-brand-gray-600">{featuredStory.location}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-brand-gray-600">{featuredStory.previousRole}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-brand-navy font-semibold">{featuredStory.currentRole}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-4 border-2 border-brand-gray-300 shadow-lg hover:shadow-xl hover:border-brand-teal transition-all duration-300">
                      <div className="text-sm text-brand-gray-600 mb-1">Salary Jump</div>
                      <div className="text-xl font-bold text-green-600">{featuredStory.salaryJump}</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-2 border-brand-gray-300 shadow-lg hover:shadow-xl hover:border-brand-teal transition-all duration-300">
                      <div className="text-sm text-brand-gray-600 mb-1">Time to Success</div>
                      <div className="text-xl font-bold text-brand-navy">{featuredStory.timeToSuccess}</div>
                    </div>
                  </div>

                  <p className="text-lg text-brand-gray-700 mb-6 leading-relaxed">
                    {featuredStory.story}
                  </p>

                  <div className="bg-blue-50 border-l-4 border-brand-teal p-6 rounded-r-xl mb-6">
                    <p className="text-brand-gray-700 italic leading-relaxed">
                      &quot;{featuredStory.quote}&quot;
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredStory.services.map((service, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-brand-navy to-brand-teal text-white text-sm rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-brand-navy to-brand-teal text-white rounded-2xl p-8 text-center">
                    <div className="text-6xl font-bold mb-2">{featuredStory.increase}</div>
                    <div className="text-xl">Salary Increase</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-6 border-2 border-brand-gray-300 shadow-lg hover:shadow-xl hover:border-brand-teal transition-all duration-300 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm text-brand-gray-600">Industry</div>
                      <div className="font-semibold text-brand-gray-900">{featuredStory.industry}</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border-2 border-brand-gray-300 shadow-lg hover:shadow-xl hover:border-brand-teal transition-all duration-300 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-sm text-brand-gray-600">Timeline</div>
                      <div className="font-semibold text-brand-gray-900">{featuredStory.timeToSuccess}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              More Success
              <span className="block gradient-text mt-2">
                Stories
              </span>
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Join thousands of Indian professionals who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStories.map((story, index) => (
              <div key={story.id} className="bg-white rounded-2xl p-6 border-2 border-brand-gray-300 shadow-lg hover:shadow-2xl hover:border-brand-navy hover-lift transition-all duration-300 animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-gray-900">{story.name}</h3>
                    <p className="text-sm text-brand-gray-600">{story.location}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-brand-gray-600 mb-2">{story.previousRole}</div>
                  <div className="flex items-center space-x-2 mb-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-brand-navy">{story.currentRole}</div>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <div className="text-xs text-brand-gray-600 mb-1">Salary</div>
                    <div className="text-sm font-bold text-green-600">{story.salaryJump}</div>
                  </div>
                  <div>
                    <div className="text-xs text-brand-gray-600 mb-1">Time</div>
                    <div className="text-sm font-bold text-brand-navy">{story.timeToSuccess}</div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-brand-teal p-4 rounded-r-lg mb-4">
                  <p className="text-sm text-brand-gray-700 italic">
                    &quot;{story.quote}&quot;
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                    {story.industry}
                  </span>
                  {story.increase && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">
                      +{story.increase}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-1">
                  {story.services.map((service, sIndex) => (
                    <span key={sIndex} className="px-2 py-1 bg-gray-100 text-brand-gray-700 text-xs rounded">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-gray-900">
              Success By The
              <span className="block gradient-text mt-2">
                Numbers
              </span>
            </h2>
            <p className="text-lg text-brand-gray-600">
              Real data from thousands of career transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Metric 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">₹5-8L</div>
              <div className="text-sm font-semibold text-brand-gray-700 mb-1">Average Salary Jump</div>
              <div className="text-xs text-brand-gray-600">Based on 10,000+ placements</div>
            </div>

            {/* Metric 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">6-8</div>
              <div className="text-sm font-semibold text-brand-gray-700 mb-1">Weeks to Job Offer</div>
              <div className="text-xs text-brand-gray-600">Average time to placement</div>
            </div>

            {/* Metric 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-sm font-semibold text-brand-gray-700 mb-1">Success Rate</div>
              <div className="text-xs text-brand-gray-600">Users who land interviews</div>
            </div>

            {/* Metric 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-sm font-semibold text-brand-gray-700 mb-1">Cities Covered</div>
              <div className="text-xs text-brand-gray-600">Across India</div>
            </div>
          </div>

          {/* Industry Distribution */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-brand-gray-900 mb-8 text-center">Top Industries</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-brand-navy mb-1">40%</div>
                <div className="text-sm text-brand-gray-600">IT & Software</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-brand-navy mb-1">18%</div>
                <div className="text-sm text-brand-gray-600">Finance</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-brand-navy mb-1">12%</div>
                <div className="text-sm text-brand-gray-600">Healthcare</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-brand-navy mb-1">15%</div>
                <div className="text-sm text-brand-gray-600">Marketing</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 011-1.732l4-2.5a1 1 0 011 0l4 2.5A1 1 0 0118 5v2M7 7h10" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-brand-navy mb-1">15%</div>
                <div className="text-sm text-brand-gray-600">Others</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Success Story
              <span className="block gradient-text-gold mt-2">
                Starts Here
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join 10,000+ Indian professionals who transformed their careers with our platform
            </p>
            
            <Link href="/signup" className="group">
              <button className="relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold text-white bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                Create Free Account
                <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
            
            <p className="mt-6 text-white/80">
              No credit card required • Start in Hindi or English
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

