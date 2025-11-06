'use client';

import React, { useState } from 'react';
import { useNotification } from '@/hooks/useNotification';
import NotificationModal from '@/components/ui/NotificationModal';

export default function WebinarsPage() {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [email, setEmail] = useState('');
  
  const {
    notification,
    hideNotification,
    showLoginPrompt,
    showSuccess,
    showError,
  } = useNotification();

  const handleRegisterWebinar = () => {
    showLoginPrompt();
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      showError('Please enter your email address to subscribe.', 'Email Required');
      return;
    }
    
    if (!emailRegex.test(email)) {
      showError('Please enter a valid email address.', 'Invalid Email');
      return;
    }
    
    // Show success notification
    showSuccess(`We'll send upcoming webinar notifications to ${email}. Check your inbox for a confirmation email.`, 'Successfully Subscribed!');
    
    // Clear email field
    setEmail('');
  };

  const upcomingWebinars = [
    {
      id: 1,
      title: 'Resume Optimization for ATS Systems',
      date: '2025-11-15',
      time: '6:00 PM IST',
      duration: '60 mins',
      speaker: 'Rajesh Kumar',
      speakerTitle: 'Senior Career Coach',
      speakerCompany: 'Ex-Infosys',
      attendees: 247,
      category: 'Resume Tips',
      description: 'Learn how to optimize your resume to pass through Applicant Tracking Systems used by Indian companies. Discover the secrets to getting your resume seen by real recruiters.',
      whatYouLearn: [
        'Understanding how ATS systems work in India',
        'Keyword optimization techniques',
        'Formatting best practices',
        'Common ATS mistakes to avoid',
        'Tools to test your resume ATS score'
      ],
      isPremium: false,
      featured: true
    },
    {
      id: 2,
      title: 'Mastering the Behavioral Interview',
      date: '2025-11-18',
      time: '7:00 PM IST',
      duration: '75 mins',
      speaker: 'Priyanka Mehta',
      speakerTitle: 'Interview Coach',
      speakerCompany: 'Ex-Amazon',
      attendees: 189,
      category: 'Interview Skills',
      description: 'Master the STAR method and tackle common behavioral interview questions with confidence.',
      whatYouLearn: [
        'STAR method framework',
        'Common behavioral questions',
        'Crafting compelling stories',
        'Body language tips',
        'Post-interview follow-up'
      ],
      isPremium: false,
      featured: false
    },
    {
      id: 3,
      title: 'Salary Negotiation Masterclass',
      date: '2025-11-20',
      time: '8:00 PM IST',
      duration: '90 mins',
      speaker: 'Arun Nambiar',
      speakerTitle: 'Negotiation Expert',
      speakerCompany: 'Ex-Deloitte',
      attendees: 312,
      category: 'Salary & Negotiation',
      description: 'Learn proven strategies to negotiate higher salaries in the Indian job market.',
      whatYouLearn: [
        'Research salary benchmarks in India',
        'Negotiation timing and tactics',
        'Handling multiple offers',
        'Counter-offer strategies',
        'Non-salary benefits negotiation'
      ],
      isPremium: true,
      featured: false
    },
    {
      id: 4,
      title: 'LinkedIn Profile Makeover Live',
      date: '2025-11-22',
      time: '6:30 PM IST',
      duration: '60 mins',
      speaker: 'Swati Chatterjee',
      speakerTitle: 'Personal Branding Coach',
      speakerCompany: 'Ex-LinkedIn',
      attendees: 156,
      category: 'Personal Branding',
      description: 'Transform your LinkedIn profile to attract Indian recruiters and hiring managers.',
      whatYouLearn: [
        'Optimizing your headline and summary',
        'Showcasing your experience effectively',
        'Building your network strategically',
        'Content strategy for visibility',
        'Using LinkedIn for job search'
      ],
      isPremium: false,
      featured: false
    },
    {
      id: 5,
      title: 'Career Change Strategy Workshop',
      date: '2025-11-25',
      time: '7:30 PM IST',
      duration: '90 mins',
      speaker: 'Vikram Malhotra',
      speakerTitle: 'Career Transition Specialist',
      speakerCompany: 'Ex-McKinsey',
      attendees: 198,
      category: 'Career Strategy',
      description: 'Successfully transition to a new career with proven strategies and frameworks.',
      whatYouLearn: [
        'Identifying transferable skills',
        'Positioning yourself for new industries',
        'Building relevant experience',
        'Networking in new fields',
        'Managing career change risks'
      ],
      isPremium: true,
      featured: false
    },
    {
      id: 6,
      title: 'Building Your Personal Brand',
      date: '2025-11-28',
      time: '6:00 PM IST',
      duration: '60 mins',
      speaker: 'Neha Kapoor',
      speakerTitle: 'Personal Branding Expert',
      speakerCompany: 'Founder, BrandYou',
      attendees: 142,
      category: 'Personal Branding',
      description: 'Create a powerful personal brand that sets you apart in the competitive Indian job market.',
      whatYouLearn: [
        'Defining your unique value proposition',
        'Building online presence',
        'Content creation strategies',
        'Networking for brand building',
        'Maintaining brand consistency'
      ],
      isPremium: false,
      featured: false
    }
  ];

  const pastWebinars = [
    {
      id: 101,
      title: 'Remote Work Success Strategies',
      date: '2025-10-28',
      duration: '55 mins',
      views: 1842,
      speaker: 'Amit Verma',
      category: 'Career Development',
      isPremium: false
    },
    {
      id: 102,
      title: 'Tech Interview Preparation',
      date: '2025-10-25',
      duration: '120 mins',
      views: 2156,
      speaker: 'Karthik Iyer',
      category: 'Interview Skills',
      isPremium: true
    },
    {
      id: 103,
      title: 'Networking in the Digital Age',
      date: '2025-10-20',
      duration: '60 mins',
      views: 1523,
      speaker: 'Divya Krishnan',
      category: 'Networking',
      isPremium: false
    },
    {
      id: 104,
      title: 'Job Search Strategies for 2025',
      date: '2025-10-15',
      duration: '75 mins',
      views: 2891,
      speaker: 'Rajesh Kumar',
      category: 'Job Search',
      isPremium: false
    }
  ];

  const featuredWebinar = upcomingWebinars.find(w => w.featured);
  const regularWebinars = upcomingWebinars.filter(w => !w.featured);

  // Helper function for consistent date formatting (avoiding hydration mismatch)
  const formatLongDate = (dateString: string) => {
    const date = new Date(dateString);
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return `${weekdays[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section relative py-24 lg:py-32 text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-10">
              <span className="text-sm font-medium text-white/95 mr-2">
                Free & Premium Webinars
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-2xl">
                Learn From
              </span>
              <span className="block gradient-text-gold drop-shadow-2xl pb-2">
                Industry Experts
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-4xl mx-auto">
              Free webinars, workshops, and career development events
            </p>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
        <div className="container">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedTab === 'upcoming'
                  ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg'
                  : 'bg-white text-brand-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setSelectedTab('past')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedTab === 'past'
                  ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg'
                  : 'bg-white text-brand-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Past Recordings
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      {selectedTab === 'upcoming' && (
        <>
          {/* Featured Webinar */}
          {featuredWebinar && (
            <section className="py-24 bg-white">
              <div className="container">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 rounded-full text-sm font-medium mb-8">
                  ⭐ Featured Webinar
                </div>

                <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border-2 border-brand-gray-300 shadow-xl hover:border-brand-navy transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-brand-navy to-brand-teal text-white text-xs font-semibold rounded-full mb-4">
                        {featuredWebinar.category}
                      </div>

                      <h2 className="text-4xl font-bold text-brand-gray-900 mb-4">
                        {featuredWebinar.title}
                      </h2>

                      <p className="text-lg text-brand-gray-700 mb-6 leading-relaxed">
                        {featuredWebinar.description}
                      </p>

                      <div className="flex items-center space-x-6 mb-8">
                        <div>
                          <div className="text-sm text-brand-gray-600 mb-1">Date</div>
                          <div className="font-semibold text-brand-gray-900">
                            {new Date(featuredWebinar.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-brand-gray-600 mb-1">Time</div>
                          <div className="font-semibold text-brand-gray-900">{featuredWebinar.time}</div>
                        </div>
                        <div>
                          <div className="text-sm text-brand-gray-600 mb-1">Duration</div>
                          <div className="font-semibold text-brand-gray-900">{featuredWebinar.duration}</div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border-2 border-brand-gray-300 shadow-sm hover:shadow-lg hover:border-brand-teal transition-all duration-300 mb-8">
                        <h4 className="font-bold text-brand-gray-900 mb-3">What You&apos;ll Learn</h4>
                        <ul className="space-y-2">
                          {featuredWebinar.whatYouLearn.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-brand-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button 
                        onClick={handleRegisterWebinar}
                        className="btn-gradient w-full py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Register Free
                      </button>

                      <p className="text-sm text-brand-gray-600 text-center mt-4">
                        {featuredWebinar.attendees} people registered
                      </p>
                    </div>

                    <div>
                      <div className="bg-white rounded-2xl p-8 border-2 border-brand-gray-300 shadow-sm hover:shadow-lg hover:border-brand-teal transition-all duration-300 mb-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                            {featuredWebinar.speaker.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h4 className="font-bold text-brand-gray-900">{featuredWebinar.speaker}</h4>
                            <p className="text-sm text-brand-gray-600">{featuredWebinar.speakerTitle}</p>
                            <p className="text-sm text-brand-gray-500">{featuredWebinar.speakerCompany}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-brand-navy to-brand-teal text-white rounded-2xl p-8 mb-6">
                        <h4 className="font-bold mb-4">Event Details</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{formatLongDate(featuredWebinar.date)}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{featuredWebinar.time}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span>Online (Link sent after registration)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Regular Webinars */}
          <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
                  More Upcoming
                  <span className="block gradient-text mt-2">
                    Webinars
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularWebinars.map((webinar) => (
                  <div key={webinar.id} className="bg-white rounded-2xl p-6 border-2 border-brand-gray-300 shadow-lg hover:shadow-2xl hover:border-brand-navy hover-lift transition-all duration-300">
                    {webinar.isPremium && (
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full mb-4">
                        ⭐ Premium
                      </div>
                    )}

                    <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full mb-4">
                      {webinar.category}
                    </div>

                    <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                      {webinar.title}
                    </h3>

                    <p className="text-sm text-brand-gray-600 mb-4 leading-relaxed">
                      {webinar.description}
                    </p>

                    <div className="flex items-center space-x-2 mb-4 text-sm text-brand-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(webinar.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })} • {webinar.time}</span>
                    </div>

                    <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-200">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {webinar.speaker.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-brand-gray-900">{webinar.speaker}</div>
                        <div className="text-xs text-brand-gray-600">{webinar.speakerCompany}</div>
                      </div>
                    </div>

                    <button 
                      onClick={handleRegisterWebinar}
                      className="w-full btn-gradient py-3 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      {webinar.isPremium ? 'Register (Premium)' : 'Register Free'}
                    </button>

                    <p className="text-xs text-brand-gray-500 text-center mt-3">
                      {webinar.attendees} registered
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Past Webinars */}
      {selectedTab === 'past' && (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
                Past Webinar
                <span className="block gradient-text mt-2">
                  Recordings
                </span>
              </h2>
              <p className="text-xl text-brand-gray-600">
                Watch recordings of our popular webinars anytime
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-white rounded-2xl p-6 border-2 border-brand-gray-300 shadow-lg hover:shadow-2xl hover:border-brand-navy hover-lift transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-brand-navy to-brand-teal rounded-xl mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>

                  {webinar.isPremium && (
                    <div className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full mb-2">
                      Premium
                    </div>
                  )}

                  <div className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full mb-3">
                    {webinar.category}
                  </div>

                  <h3 className="text-lg font-bold text-brand-gray-900 mb-2">
                    {webinar.title}
                  </h3>

                  <p className="text-sm text-brand-gray-600 mb-3">
                    {webinar.speaker}
                  </p>

                  <div className="flex items-center justify-between text-xs text-brand-gray-500 mb-4">
                    <span>{webinar.duration}</span>
                    <span>{webinar.views.toLocaleString()} views</span>
                  </div>

                  <button 
                    onClick={handleRegisterWebinar}
                    className="w-full py-3 bg-gradient-to-r from-brand-navy to-brand-teal text-white font-semibold rounded-xl hover:shadow-lg hover:from-brand-navy/90 hover:to-brand-teal/90 transition-all duration-300 flex items-center justify-center group"
                  >
                    <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                    {webinar.isPremium ? 'Watch (Premium)' : 'Watch Now'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Never Miss
            <span className="block gradient-text-gold mt-2">
              an Event
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Get notified about upcoming webinars and career development events
          </p>
          
          <div className="max-w-md mx-auto px-4">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-white/30 text-brand-gray-900"
              />
              <button 
                type="submit"
                className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white bg-white/20 backdrop-blur-sm rounded-xl border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
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

