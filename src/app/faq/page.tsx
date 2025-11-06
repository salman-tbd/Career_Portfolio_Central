'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const categories = [
    { 
      id: 'all', 
      name: 'All Questions', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 'getting-started', 
      name: 'Getting Started', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      id: 'account', 
      name: 'Account & Billing', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    { 
      id: 'resume', 
      name: 'Resume Builder', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      id: 'portfolio', 
      name: 'Portfolio', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z" />
        </svg>
      )
    },
    { 
      id: 'jobs', 
      name: 'Job Listings', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    { 
      id: 'counseling', 
      name: 'Career Counseling', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      id: 'membership', 
      name: 'Membership', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    { 
      id: 'technical', 
      name: 'Technical Support', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const faqs = [
    // Getting Started
    {
      id: 'gs-1',
      category: 'getting-started',
      question: 'How do I create an account?',
      answer: 'Creating an account is simple! Click on the "Sign Up" button at the top right of our website. Fill in your basic information including name, email, and password. You\'ll receive a verification email - click the link to activate your account and start using our services immediately.'
    },
    {
      id: 'gs-2',
      category: 'getting-started',
      question: 'Is Career Portfolio Central really free?',
      answer: 'Yes! Our basic plan is completely free forever. You get access to resume building with 3 templates, basic portfolio features, job listings, and community forum. You can upgrade to Premium or Pro plans anytime to unlock advanced features like AI optimization, career counseling, and premium templates.'
    },
    {
      id: 'gs-3',
      category: 'getting-started',
      question: 'What services are included in the free plan?',
      answer: 'The free plan includes: Resume Builder with 3 professional templates, Basic Portfolio showcase, Access to 50,000+ job listings, Community forum access, 5 resume downloads per month, and access to basic career resources and blog articles.'
    },
    {
      id: 'gs-4',
      category: 'getting-started',
      question: 'How do I get started with my first resume?',
      answer: 'After signing in, go to the Resume Builder section. Choose from our 3 free templates (or 50+ templates in Premium). Follow the step-by-step wizard to add your personal information, work experience, education, and skills. You can preview your resume in real-time and download it as PDF once complete.'
    },
    {
      id: 'gs-5',
      category: 'getting-started',
      question: 'Do I need to download any software?',
      answer: 'No downloads required! Career Portfolio Central is a completely web-based platform. You can access all features directly through your browser on any device - desktop, laptop, tablet, or smartphone. Just log in and start building your career!'
    },

    // Account & Billing
    {
      id: 'ab-1',
      category: 'account',
      question: 'How do I update my profile information?',
      answer: 'Log in to your account and click on your profile picture or name in the top right corner. Select "Account Settings" from the dropdown menu. Here you can update your personal information, contact details, and professional information.'
    },
    {
      id: 'ab-2',
      category: 'account',
      question: 'Can I change my email address?',
      answer: 'Yes! Go to Account Settings > Email & Password. Enter your new email address and click "Update Email". We\'ll send a verification link to your new email address. Click the link to confirm the change.'
    },
    {
      id: 'ab-3',
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password?" on the login page. Enter your registered email address. We\'ll send you a password reset link. Click the link and create a new password. Make sure your new password is strong and unique!'
    },
    {
      id: 'ab-4',
      category: 'account',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, UPI (Google Pay, PhonePe, PayTM), net banking from all major Indian banks, and popular digital wallets. All payments are processed securely through encrypted payment gateways.'
    },
    {
      id: 'ab-5',
      category: 'account',
      question: 'When will I be charged?',
      answer: 'For monthly subscriptions, you\'re charged immediately upon signing up and then on the same date each month. For annual subscriptions, you\'re charged once upfront for the full year. We\'ll send you a reminder email 7 days before your renewal date.'
    },
    {
      id: 'ab-6',
      category: 'account',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription anytime from your Account Settings > Subscription section. Your access continues until the end of your current billing period. No cancellation fees or penalties. We\'re sad to see you go, but we understand!'
    },
    {
      id: 'ab-7',
      category: 'account',
      question: 'How do refunds work?',
      answer: 'We offer a 30-day money-back guarantee on all paid plans. If you\'re not satisfied, contact our support team within 30 days of your purchase for a full refund. Refunds typically process within 5-7 business days and appear in your original payment method.'
    },
    {
      id: 'ab-8',
      category: 'account',
      question: 'Do you offer student discounts?',
      answer: 'Yes! Students with valid college ID or email get 40% off on Premium and Pro plans. To claim your discount, contact our support team at support@careerportfoliocentral.com with proof of enrollment. We verify within 24 hours and apply your discount immediately.'
    },

    // Resume Builder
    {
      id: 'rb-1',
      category: 'resume',
      question: 'How many resume templates are available?',
      answer: 'Free plan users get access to 3 professional templates. Premium users get 50+ industry-specific templates including modern, classic, creative, and ATS-optimized designs. All templates are mobile-responsive and customizable to match your personal brand.'
    },
    {
      id: 'rb-2',
      category: 'resume',
      question: 'Can I use my own design?',
      answer: 'While we don\'t support custom template uploads, our Premium templates are highly customizable. You can change colors, fonts, section layouts, spacing, and more. Our drag-and-drop editor makes it easy to create a unique resume that stands out.'
    },
    {
      id: 'rb-3',
      category: 'resume',
      question: 'How do I download my resume?',
      answer: 'Once your resume is complete, click the "Download" button in the top right corner of the resume builder. Choose your preferred format (PDF, Word, or plain text). Your resume will download immediately. Free users get 5 downloads per month, Premium users get unlimited downloads.'
    },
    {
      id: 'rb-4',
      category: 'resume',
      question: 'What file formats are supported?',
      answer: 'You can download your resume in PDF (most common for job applications), Microsoft Word (.docx), and plain text (.txt) formats. We recommend PDF for final submissions as it preserves formatting across all devices and ATS systems.'
    },
    {
      id: 'rb-5',
      category: 'resume',
      question: 'Can I edit my resume after downloading?',
      answer: 'Yes! Your resume is always saved in your account. You can log in anytime to make edits, create new versions, or download updated copies. We also save your edit history, so you can revert to previous versions if needed.'
    },
    {
      id: 'rb-6',
      category: 'resume',
      question: 'Is my resume ATS-compatible?',
      answer: 'All our templates are designed to be ATS (Applicant Tracking System) compatible. We use standard fonts, proper formatting, and clean structure that ATS systems can easily parse. Premium users also get our ATS Score Checker tool to verify compatibility.'
    },
    {
      id: 'rb-7',
      category: 'resume',
      question: 'How does the AI optimization work?',
      answer: 'Our AI analyzes your resume content and suggests improvements for better impact. It recommends stronger action verbs, identifies missing keywords based on your target job, optimizes bullet points, and checks for grammar and formatting issues. Available in Premium and Pro plans.'
    },
    {
      id: 'rb-8',
      category: 'resume',
      question: 'Can I create multiple versions of my resume?',
      answer: 'Yes! You can create unlimited resume versions to tailor each application. Save different versions for different job types, industries, or experience levels. Premium users can also compare versions side-by-side to choose the best fit.'
    },

    // Portfolio
    {
      id: 'p-1',
      category: 'portfolio',
      question: 'What can I include in my portfolio?',
      answer: 'You can showcase: Work samples and projects, Case studies with detailed descriptions, Images and videos of your work, Certifications and awards, Testimonials and recommendations, Links to live projects or GitHub repositories, and Professional achievements.'
    },
    {
      id: 'p-2',
      category: 'portfolio',
      question: 'How many projects can I add?',
      answer: 'Free users can add up to 5 projects. Premium users get unlimited projects. Each project can include multiple images, videos, descriptions, and links. Organize your projects by category, date, or custom tags for easy navigation.'
    },
    {
      id: 'p-3',
      category: 'portfolio',
      question: 'Can I customize my portfolio design?',
      answer: 'Yes! Premium users can customize colors, fonts, layouts, and sections. Choose from multiple portfolio themes or create your own style. You can also add custom CSS if you\'re comfortable with code. Free users get one default template.'
    },
    {
      id: 'p-4',
      category: 'portfolio',
      question: 'How do I share my portfolio?',
      answer: 'Your portfolio gets a unique URL (e.g., careerportfoliocentral.com/yourname). Share this link on your resume, LinkedIn, email signature, or anywhere online. Premium users can use custom domains for a more professional look.'
    },
    {
      id: 'p-5',
      category: 'portfolio',
      question: 'Can I make my portfolio private?',
      answer: 'Yes! You can set your portfolio to: Public (visible to everyone), Private (requires password), or Listed (visible only to people with the link). Control your privacy settings anytime from your portfolio dashboard.'
    },

    // Jobs
    {
      id: 'j-1',
      category: 'jobs',
      question: 'How often are jobs updated?',
      answer: 'Our job database is updated daily with fresh listings from top Indian companies. We add 500+ new jobs every day and remove expired listings. Premium users get early access to new postings - 24 hours before they appear publicly.'
    },
    {
      id: 'j-2',
      category: 'jobs',
      question: 'Can I save jobs for later?',
      answer: 'Yes! Click the bookmark icon on any job listing to save it to your "Saved Jobs" list. Access your saved jobs anytime from your dashboard. You\'ll also get notifications if saved jobs are closing soon or if similar jobs are posted.'
    },
    {
      id: 'j-3',
      category: 'jobs',
      question: 'How does the job matching algorithm work?',
      answer: 'Our AI analyzes your resume, skills, experience, and preferences to recommend the most relevant jobs. We consider: Your job title and industry, Years of experience, Location preferences, Salary expectations, Skills match percentage, and Company preferences. Premium users get smarter matching with continuous learning.'
    },
    {
      id: 'j-4',
      category: 'jobs',
      question: 'Can I set up job alerts?',
      answer: 'Absolutely! Create custom job alerts based on keywords, location, salary range, company, or job type. Choose your notification frequency (instant, daily, or weekly). Receive alerts via email or in-app notifications. Create multiple alerts for different job searches.'
    },

    // Counseling
    {
      id: 'c-1',
      category: 'counseling',
      question: 'How do I book a counseling session?',
      answer: 'Go to Career Counseling section, browse our counselors by specialty or industry, choose a counselor, select an available time slot from their calendar, confirm your booking and pay (if required). You\'ll receive a confirmation email with video call link and preparation tips.'
    },
    {
      id: 'c-2',
      category: 'counseling',
      question: 'What types of counseling sessions are available?',
      answer: 'We offer: Career Planning & Strategy, Resume & LinkedIn Review, Mock Interviews (behavioral & technical), Salary Negotiation Coaching, Career Transition Guidance, Job Search Strategy, Industry Insights, and Personal Branding.'
    },
    {
      id: 'c-3',
      category: 'counseling',
      question: 'How long are counseling sessions?',
      answer: 'Standard sessions are 45 minutes. Deep-dive sessions (available in Pro plan) are 90 minutes. You can book multiple sessions or package deals for ongoing support. Each session includes: Pre-session questionnaire, Live video consultation, Session notes and action items, and Follow-up email with resources.'
    },
    {
      id: 'c-4',
      category: 'counseling',
      question: 'Can I choose my counselor?',
      answer: 'Yes! Browse counselor profiles including their background, specializations, industries, experience, client ratings, and availability. Book with any counselor that matches your needs. You can also favorite counselors for future sessions.'
    },
    {
      id: 'c-5',
      category: 'counseling',
      question: 'Are counselors certified?',
      answer: 'Yes! All our counselors are certified career coaches with: Minimum 5 years of industry experience, Recognized coaching certifications (ICF, NCDA, or equivalent), Proven track record of helping professionals, Regular training updates on latest career trends. We thoroughly vet every counselor before onboarding.'
    },

    // Membership
    {
      id: 'm-1',
      category: 'membership',
      question: 'What\'s the difference between Free, Premium, and Pro?',
      answer: 'Free: Basic resume builder, 3 templates, 5 portfolio projects, job access. Premium (₹1,499/month): 50+ templates, AI optimization, unlimited portfolio, 1 counseling session/month, priority support. Pro (₹3,999/month): Everything in Premium + 4 counseling sessions/month, personal strategist, LinkedIn optimization, mock interviews, custom portfolio design.'
    },
    {
      id: 'm-2',
      category: 'membership',
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, anytime! To upgrade: Go to Account Settings > Subscription, select your new plan, pay the prorated difference. To downgrade: Your new plan takes effect at the next billing cycle, no refunds for unused time. All your data remains safe during plan changes.'
    },
    {
      id: 'm-3',
      category: 'membership',
      question: 'Do you offer annual discounts?',
      answer: 'Yes! Save 17% with annual billing. Premium: ₹14,990/year (vs ₹17,988 monthly). Pro: ₹39,990/year (vs ₹47,988 monthly). Pay once, save thousands! Plus get 2 bonus months free. Cancel anytime and get prorated refund for unused months.'
    },

    // Technical
    {
      id: 't-1',
      category: 'technical',
      question: 'Which browsers are supported?',
      answer: 'We support all modern browsers: Chrome (recommended), Firefox, Safari, Edge, and Opera. For best experience, use the latest version. Mobile browsers also fully supported on iOS and Android devices.'
    },
    {
      id: 't-2',
      category: 'technical',
      question: 'Is the platform mobile-friendly?',
      answer: 'Yes! Our platform is fully responsive and works seamlessly on smartphones and tablets. Build resumes, manage your portfolio, apply for jobs, and attend video counseling sessions - all from your mobile device.'
    },
    {
      id: 't-3',
      category: 'technical',
      question: 'Is my data secure?',
      answer: 'Absolutely! We use: 256-bit SSL encryption for all data transmission, Secure cloud storage with automatic backups, GDPR and ISO 27001 compliance, Regular security audits, No selling of your data to third parties. Your privacy and security are our top priorities.'
    },
    {
      id: 't-4',
      category: 'technical',
      question: 'How do I delete my account?',
      answer: 'We\'re sorry to see you go! Go to Account Settings > Privacy & Security > Delete Account. We\'ll ask for confirmation and the reason (optional). Your data will be permanently deleted within 30 days. Download your data before deletion if needed.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section relative py-12 md:py-20 lg:py-28 text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-6 md:mb-8">
              <span className="text-xs md:text-sm font-medium text-white/95 mr-2">
                Quick answers to common questions
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="block text-white drop-shadow-2xl">
                Frequently Asked
              </span>
              <span className="block gradient-text-gold drop-shadow-2xl">
                Questions
              </span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-white/95 mb-6 md:mb-10 leading-relaxed max-w-4xl mx-auto">
              Find answers to common questions about our platform
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 pl-10 md:pl-14 rounded-xl md:rounded-2xl border-none focus:outline-none focus:ring-4 focus:ring-white/30 text-brand-gray-900 text-sm md:text-base"
                />
                <svg className="absolute left-3 md:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-brand-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <p className="mt-4 md:mt-6 text-sm md:text-base text-white/80">
              Can&apos;t find an answer? <Link href="/contact" className="underline hover:text-white">Contact Support</Link>
            </p>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </section>

      {/* Categories */}
      <section className="py-4 md:py-8 bg-gray-50 border-b border-gray-200 sticky top-16 lg:top-18 z-10">
        <div className="container">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center px-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-2 md:px-5 md:py-2.5 rounded-full font-medium transition-all duration-300 flex items-center space-x-1.5 md:space-x-2 text-xs md:text-sm border-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg border-transparent'
                    : 'bg-white text-brand-gray-700 hover:bg-gray-100 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg'
                }`}
              >
                <span className="hidden md:inline">{category.icon}</span>
                <span className="whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 md:mb-8 text-center">
              <p className="text-sm md:text-lg text-brand-gray-600">
                Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-300 shadow-lg hover:shadow-xl hover:border-gray-400 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-4 py-4 md:px-6 md:py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-sm md:text-lg font-bold text-brand-gray-900 pr-3 md:pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 md:w-6 md:h-6 text-brand-navy transform transition-transform duration-300 flex-shrink-0 ${
                        openFaqId === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqId === faq.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-4 pb-4 pt-2 md:px-6 md:pb-5 md:pt-2">
                      <p className="text-sm md:text-base text-brand-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-brand-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xl text-brand-gray-500 mb-4">No questions found</p>
                <p className="text-brand-gray-400">Try adjusting your search or category filter</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-10 border border-gray-200 shadow-lg text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-brand-navy to-brand-teal rounded-full flex items-center justify-center text-white mx-auto mb-4 md:mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-brand-gray-900">
              Still Have Questions?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-brand-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-gradient px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Support
                </button>
              </Link>
              <Link href="/help">
                <button className="px-8 py-4 bg-white border-2 border-brand-gray-300 text-brand-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300">
                  Visit Help Center
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

