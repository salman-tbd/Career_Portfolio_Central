'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupFormSchema, type SignupFormData } from '@/utils/validations';
import { useNotification } from '@/hooks/useNotification';
import { authUtils } from '@/utils/auth';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import PasswordInput from '@/components/ui/PasswordInput';
import NotificationModal from '@/components/ui/NotificationModal';

const SignupPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    notification,
    hideNotification,
    showSignupSuccess,
  } = useNotification();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupFormSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
      
      // Store user credentials in localStorage
      authUtils.registerUser({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      
      reset();
      // Show the success notification
      showSignupSuccess();
    }, 1000);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-12">
        {/* Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-teal"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full p-8">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="border border-white rounded-sm"></div>
              ))}
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-32 right-20 w-3 h-3 bg-white opacity-40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-60 left-32 w-2 h-2 bg-brand-teal opacity-60 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-40 right-40 w-4 h-4 bg-white opacity-30 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
          <div className="absolute bottom-32 left-20 w-2.5 h-2.5 bg-brand-teal opacity-50 rounded-full animate-bounce" style={{animationDelay: '0.8s'}}></div>
        </div>

        <div className="max-w-md w-full space-y-8 relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-2">
              Create Your Account
            </h2>
            <p className="text-xl text-white/90">
              Join Career Portfolio Central and advance your career
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-white/95 backdrop-blur-xl py-10 px-8 shadow-2xl rounded-2xl border border-white/20 relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-brand-teal/10 to-transparent rounded-full transform -translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tr from-brand-navy/10 to-transparent rounded-full transform translate-x-6 translate-y-6"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit(onSubmit)}>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  {...register('firstName')}
                  type="text"
                  label="First Name"
                  placeholder="First name"
                  error={errors.firstName?.message}
                />
                <Input
                  {...register('lastName')}
                  type="text"
                  label="Last Name"
                  placeholder="Last name"
                  error={errors.lastName?.message}
                />
              </div>

              {/* Email Field */}
              <Input
                {...register('email')}
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                error={errors.email?.message}
                fullWidth
                startIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                }
              />

              {/* Password Field */}
              <PasswordInput
                {...register('password')}
                label="Password"
                placeholder="Create a password"
                error={errors.password?.message}
                fullWidth
                helperText="Must contain uppercase, lowercase, and number"
                startIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
              />

              {/* Confirm Password Field */}
              <PasswordInput
                {...register('confirmPassword')}
                label="Confirm Password"
                placeholder="Confirm your password"
                error={errors.confirmPassword?.message}
                fullWidth
                startIcon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />

              {/* Terms Checkbox */}
              <div className="flex items-start">
                <input
                  {...register('terms')}
                  type="checkbox"
                  className="mt-1 h-4 w-4 text-brand-navy focus:ring-blue-500 border-brand-gray-300 rounded"
                />
                <label className="ml-3 text-sm text-brand-gray-600">
                  I agree to the{' '}
                  <Link href="/terms" className="text-brand-navy hover:text-brand-teal">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-brand-navy hover:text-brand-teal">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-600">{errors.terms.message}</p>
              )}

              {/* Signup Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={isLoading}
              >
                Create Account
              </Button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-brand-gray-600">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-medium text-brand-navy hover:text-brand-teal transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center">
            <p className="text-sm text-white/80">
              By creating an account, you agree to our{' '}
              <Link href="/terms" className="text-white hover:text-white/90 underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-white hover:text-white/90 underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Notification Modal */}
      {notification.config && (
        <NotificationModal
          isOpen={notification.isOpen}
          onClose={hideNotification}
          {...notification.config}
        />
      )}
    </>
  );
};

export default SignupPage;
