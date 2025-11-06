'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for getting started',
      features: [
        { text: 'Resume Builder (3 templates)', included: true },
        { text: 'Basic Portfolio', included: true },
        { text: 'Job Listings Access', included: true },
        { text: 'Community Forum Access', included: true },
        { text: '5 Resume Downloads/month', included: true },
        { text: 'Basic Templates', included: true },
        { text: 'AI Resume Optimization', included: false },
        { text: 'Career Coaching', included: false },
        { text: 'Priority Support', included: false }
      ],
      cta: 'Get Started Free',
      href: '/signup',
      popular: false,
      color: 'gray'
    },
    {
      name: 'Premium',
      price: { monthly: 1499, annual: 14990 },
      description: 'Best for job seekers',
      features: [
        { text: 'Everything in Free', included: true },
        { text: 'Unlimited Resume Templates', included: true },
        { text: 'AI-Powered Optimization', included: true },
        { text: 'Priority Job Matching', included: true },
        { text: '1 Career Coaching Session/month', included: true },
        { text: 'Premium Portfolio Features', included: true },
        { text: 'Unlimited Downloads', included: true },
        { text: 'Resume Analytics', included: true },
        { text: 'Priority Support', included: true }
      ],
      cta: 'Start Premium Trial',
      href: '/signup?plan=premium',
      popular: true,
      color: 'teal'
    },
    {
      name: 'Pro',
      price: { monthly: 3999, annual: 39990 },
      description: 'For serious career growth',
      features: [
        { text: 'Everything in Premium', included: true },
        { text: '4 Career Coaching Sessions/month', included: true },
        { text: 'Personal Career Strategist', included: true },
        { text: 'LinkedIn Profile Optimization', included: true },
        { text: 'Mock Interview Sessions', included: true },
        { text: 'Salary Negotiation Support', included: true },
        { text: 'Custom Portfolio Design', included: true },
        { text: 'White-glove Service', included: true },
        { text: 'Job Application Assistance', included: true }
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false,
      color: 'yellow'
    }
  ];

  const faqs = [
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes! You can cancel your subscription anytime from your account settings. There are no cancellation fees or penalties.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, UPI, net banking, and digital wallets including PayTM, PhonePe, and Google Pay.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with our service, contact us within 30 days for a full refund.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can upgrade or downgrade your plan anytime. When upgrading, you\'ll be charged a prorated amount. When downgrading, your new plan takes effect at the next billing cycle.'
    },
    {
      question: 'Is there a student discount?',
      answer: 'Yes! Students with a valid college ID get 40% off on Premium and Pro plans. Contact our support team to verify your student status.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your resumes, portfolios, and account data remain accessible for 90 days after cancellation. You can download your data anytime during this period.'
    },
    {
      question: 'Do you offer enterprise plans?',
      answer: 'Yes! We offer custom enterprise plans for organizations and educational institutions. Contact our sales team for more information.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees whatsoever! The price you see is the price you pay. No setup fees, no transaction fees, no surprises.'
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
                30-day money-back guarantee
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white drop-shadow-2xl">
                Plans That Grow
              </span>
              <span className="block gradient-text-gold drop-shadow-2xl">
                With Your Career
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-4xl mx-auto">
              Start free, upgrade when you&apos;re ready
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-brand-navy shadow-lg'
                    : 'text-white hover:text-white/80'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                  billingCycle === 'annual'
                    ? 'bg-white text-brand-navy shadow-lg'
                    : 'text-white hover:text-white/80'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 px-2 py-1 bg-green-400 text-white text-xs rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float animate-delay-300"></div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-brand-teal shadow-2xl scale-105 lg:scale-110 hover:border-brand-navy'
                    : 'border-brand-gray-300 shadow-lg hover:shadow-xl hover:border-brand-teal'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-navy to-brand-teal text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-brand-gray-900 mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-brand-gray-600 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-brand-gray-900">
                        ₹{billingCycle === 'monthly' 
                          ? plan.price.monthly 
                          : Math.floor(plan.price.annual / 12)
                        }
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-brand-gray-600 ml-2">/month</span>
                      )}
                    </div>
                    {billingCycle === 'annual' && plan.price.annual > 0 && (
                      <div className="text-sm text-brand-gray-500 mt-2">
                        Billed ₹{plan.price.annual} annually
                      </div>
                    )}
                  </div>

                  <Link href={plan.href}>
                    <button
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-lg hover:shadow-xl'
                          : 'bg-brand-gray-100 text-brand-gray-900 hover:bg-brand-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </Link>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        feature.included
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {feature.included ? (
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className={feature.included ? 'text-brand-gray-700' : 'text-brand-gray-400 line-through'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-gray-900">
              Frequently Asked
              <span className="block gradient-text mt-2">
                Questions
              </span>
            </h2>
            <p className="text-xl text-brand-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-brand-gray-300 shadow-lg hover:shadow-xl hover:border-brand-teal transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-brand-gray-700 leading-relaxed text-lg">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform
            <span className="block gradient-text-gold mt-2">
              Your Career?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Start with our free plan today, no credit card required
          </p>
          
          <Link href="/signup">
            <button className="relative inline-flex items-center justify-center px-12 py-6 text-xl font-semibold text-white bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl hover:shadow-3xl hover:bg-white/30 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
              Get Started Free
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

