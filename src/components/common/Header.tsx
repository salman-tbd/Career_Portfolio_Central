'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import { NAVIGATION_ITEMS } from '@/utils/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Define primary navigation items and filter arrays
  const PRIMARY_ROUTES_BEFORE_SERVICES = ['/', '/about'];
  const PRIMARY_ROUTES_AFTER_SERVICES = ['/pricing', '/blog', '/contact'];
  
  // Services dropdown - only actual services
  const SERVICES_ROUTES = ['/services', '/resume-builder', '/portfolio-showcase', '/job-listings', '/career-counselling', '/membership'];
  
  // Resources dropdown - informational pages
  const RESOURCES_ROUTES = ['/resources', '/success-stories', '/industries', '/webinars', '/for-students', '/faq'];
  
  const PRIMARY_ITEMS_BEFORE = NAVIGATION_ITEMS.filter(item => PRIMARY_ROUTES_BEFORE_SERVICES.includes(item.href));
  const PRIMARY_ITEMS_AFTER = NAVIGATION_ITEMS.filter(item => PRIMARY_ROUTES_AFTER_SERVICES.includes(item.href));
  const SERVICES_ITEMS = NAVIGATION_ITEMS.filter(item => SERVICES_ROUTES.includes(item.href));
  const RESOURCES_ITEMS = NAVIGATION_ITEMS.filter(item => RESOURCES_ROUTES.includes(item.href));

  // Check if current page is in dropdowns
  const isCurrentPageInServices = SERVICES_ITEMS.some(item => item.href === pathname);
  const isCurrentPageInResources = RESOURCES_ITEMS.some(item => item.href === pathname);

  // Handle scroll effect for backdrop blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle More dropdown behavior
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
        setIsResourcesOpen(false);
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Close Services dropdown if clicking outside
      if (isServicesOpen && !servicesDropdownRef.current?.contains(target) && !servicesButtonRef.current?.contains(target)) {
        setIsServicesOpen(false);
      }
      
      // Close Resources dropdown if clicking outside
      if (isResourcesOpen && !resourcesDropdownRef.current?.contains(target) && !resourcesButtonRef.current?.contains(target)) {
        setIsResourcesOpen(false);
      }
      
      // Close mobile menu if clicking outside
      if (isMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMenuOpen(false);
      }
    };

    if (isServicesOpen || isResourcesOpen || isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden'; // Prevent background scroll
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isServicesOpen, isResourcesOpen, isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        'bg-white backdrop-blur-lg border-b border-brand-gray-100/50',
        isScrolled 
          ? 'shadow-xl' 
          : 'shadow-sm'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group focus:outline-none rounded-xl p-2 -m-2 transition-all duration-300 hover:bg-white/50"
            aria-label="Career Portfolio Central Homepage"
          >
            <div className="relative w-40 h-12 lg:w-48 lg:h-14 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent rounded-xl"></div>
              <Image
                src="/assets/logo/original-logo.png"
                alt="Career Portfolio Central Logo"
                fill
                className="object-contain hover:scale-105 transition-transform duration-300 relative z-10"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Primary navigation">
            {/* Primary Navigation Items - Before Services */}
            {PRIMARY_ITEMS_BEFORE.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out',
                  'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
                  'hover:bg-brand-gray-100/80',
                  pathname === item.href
                    ? 'text-brand-navy bg-brand-gray-100 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-brand-navy after:rounded-full'
                    : 'text-brand-gray-700 hover:text-brand-navy'
                )}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                ref={servicesButtonRef}
                onMouseEnter={() => {
                  setIsServicesOpen(true);
                  setIsResourcesOpen(false);
                }}
                onFocus={() => {
                  setIsServicesOpen(true);
                  setIsResourcesOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsServicesOpen(!isServicesOpen);
                    setIsResourcesOpen(false);
                  }
                }}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out',
                  'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
                  'hover:bg-brand-gray-100/80 flex items-center space-x-1',
                  isCurrentPageInServices || isServicesOpen
                    ? 'text-brand-navy bg-brand-gray-100'
                    : 'text-brand-gray-700 hover:text-brand-navy'
                )}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="services-dropdown"
              >
                <span>Services</span>
                <svg
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    isServicesOpen ? 'rotate-180' : ''
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div
                  id="services-dropdown"
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-brand-gray-200 py-2 z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {SERVICES_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsServicesOpen(false)}
                      className={cn(
                        'block px-4 py-2 text-sm font-medium transition-colors duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 focus:ring-offset-white',
                        pathname === item.href
                          ? 'text-brand-navy bg-brand-gray-100 border-l-4 border-brand-navy'
                          : 'text-brand-gray-700 hover:text-brand-navy hover:bg-brand-gray-50'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesDropdownRef}>
              <button
                ref={resourcesButtonRef}
                onMouseEnter={() => {
                  setIsResourcesOpen(true);
                  setIsServicesOpen(false);
                }}
                onFocus={() => {
                  setIsResourcesOpen(true);
                  setIsServicesOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsResourcesOpen(!isResourcesOpen);
                    setIsServicesOpen(false);
                  }
                }}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out',
                  'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
                  'hover:bg-brand-gray-100/80 flex items-center space-x-1',
                  isCurrentPageInResources || isResourcesOpen
                    ? 'text-brand-navy bg-brand-gray-100'
                    : 'text-brand-gray-700 hover:text-brand-navy'
                )}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
                aria-controls="resources-dropdown"
              >
                <span>Resources</span>
                <svg
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    isResourcesOpen ? 'rotate-180' : ''
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Resources Dropdown Menu */}
              {isResourcesOpen && (
                <div
                  id="resources-dropdown"
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-brand-gray-200 py-2 z-50"
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  {RESOURCES_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsResourcesOpen(false)}
                      className={cn(
                        'block px-4 py-2 text-sm font-medium transition-colors duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 focus:ring-offset-white',
                        pathname === item.href
                          ? 'text-brand-navy bg-brand-gray-100 border-l-4 border-brand-navy'
                          : 'text-brand-gray-700 hover:text-brand-navy hover:bg-brand-gray-50'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Navigation Items - After Services */}
            {PRIMARY_ITEMS_AFTER.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out',
                  'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
                  'hover:bg-brand-gray-100/80',
                  pathname === item.href
                    ? 'text-brand-navy bg-brand-gray-100 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-brand-navy after:rounded-full'
                    : 'text-brand-gray-700 hover:text-brand-navy'
                )}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link 
              href="/login"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-brand-gray-700 bg-transparent border border-brand-gray-300 rounded-lg hover:bg-brand-gray-50 hover:text-brand-navy hover:border-brand-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 transition-all duration-200"
            >
              Login
            </Link>
            <Link 
              href="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-brand-navy to-brand-teal rounded-lg hover:from-brand-navy/90 hover:to-brand-teal/90 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-lg text-brand-gray-700 hover:text-brand-navy hover:bg-brand-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 transition-all duration-200"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            data-mobile-menu
          >
            <svg
              className="w-6 h-6 transition-transform duration-200 ease-in-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            'lg:hidden transition-all duration-300 ease-in-out',
            isMenuOpen 
              ? 'max-h-[calc(100vh-80px)] opacity-100 pb-6 overflow-y-auto' 
              : 'max-h-0 opacity-0 pb-0 overflow-hidden'
          )}
          data-mobile-menu
        >
          <div className="border-t border-brand-gray-200 pt-4">
            <nav className="flex flex-col space-y-1" role="navigation" aria-label="Mobile navigation">
              {/* Primary Navigation Items - Before Services */}
              {PRIMARY_ITEMS_BEFORE.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className={cn(
                    'px-4 py-3 text-base font-medium rounded-lg transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
                    pathname === item.href
                      ? 'text-brand-navy bg-brand-gray-100 border-l-4 border-brand-navy'
                      : 'text-brand-gray-700 hover:text-brand-navy hover:bg-brand-gray-50'
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services Section */}
              <div className="mt-2">
                <button
                  onClick={() => {
                    setIsMobileServicesOpen(!isMobileServicesOpen);
                    setIsMobileResourcesOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsMobileServicesOpen(!isMobileServicesOpen);
                      setIsMobileResourcesOpen(false);
                    }
                  }}
                  className={cn(
                    'w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 text-left flex items-center justify-between',
                    'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
                    isCurrentPageInServices || isMobileServicesOpen
                      ? 'text-brand-navy bg-brand-gray-100'
                      : 'text-brand-gray-700 hover:text-brand-navy hover:bg-brand-gray-50'
                  )}
                  aria-expanded={isMobileServicesOpen}
                  aria-controls="mobile-services-items"
                >
                  <span>Services</span>
                  <svg
                    className={cn(
                      'w-5 h-5 transition-transform duration-200',
                      isMobileServicesOpen ? 'rotate-180' : ''
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Collapsible Services Items */}
                <div
                  id="mobile-services-items"
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    isMobileServicesOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="pl-4 space-y-1">
                    {SERVICES_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={toggleMenu}
                        className={cn(
                          'block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200',
                          'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
                          pathname === item.href
                            ? 'text-brand-navy bg-brand-gray-100 border-l-4 border-brand-navy'
                            : 'text-brand-gray-700 hover:text-brand-navy hover:bg-brand-gray-50'
                        )}
                        aria-current={pathname === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Resources Section */}
              <div className="mt-2">
                <button
                  onClick={() => {
                    setIsMobileResourcesOpen(!isMobileResourcesOpen);
                    setIsMobileServicesOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsMobileResourcesOpen(!isMobileResourcesOpen);
                      setIsMobileServicesOpen(false);
                    }
                  }}
                  className={cn(
                    'w-full px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 text-left flex items-center justify-between',
                    'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
                    isCurrentPageInResources || isMobileResourcesOpen
                      ? 'text-brand-navy bg-brand-gray-100'
                      : 'text-brand-gray-700 hover:text-brand-navy hover:bg-brand-gray-50'
                  )}
                  aria-expanded={isMobileResourcesOpen}
                  aria-controls="mobile-resources-items"
                >
                  <span>Resources</span>
                  <svg
                    className={cn(
                      'w-5 h-5 transition-transform duration-200',
                      isMobileResourcesOpen ? 'rotate-180' : ''
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Collapsible Resources Items */}
                <div
                  id="mobile-resources-items"
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    isMobileResourcesOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="pl-4 space-y-1">
                    {RESOURCES_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={toggleMenu}
                        className={cn(
                          'block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200',
                          'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
                          pathname === item.href
                            ? 'text-brand-navy bg-brand-gray-100 border-l-4 border-brand-navy'
                            : 'text-brand-gray-700 hover:text-brand-navy hover:bg-brand-gray-50'
                        )}
                        aria-current={pathname === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Primary Navigation Items - After Services */}
              {PRIMARY_ITEMS_AFTER.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className={cn(
                    'px-4 py-3 text-base font-medium rounded-lg transition-all duration-200',
                    'focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2',
                    pathname === item.href
                      ? 'text-brand-navy bg-brand-gray-100 border-l-4 border-brand-navy'
                      : 'text-brand-gray-700 hover:text-brand-navy hover:bg-brand-gray-50'
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3 pt-6 border-t border-brand-gray-200 mt-4">
                <Link 
                  href="/login" 
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-brand-gray-700 bg-transparent border border-brand-gray-300 rounded-lg hover:bg-brand-gray-50 hover:text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 transition-all duration-200"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-brand-navy to-brand-teal rounded-lg hover:from-brand-navy/90 hover:to-brand-teal/90 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:ring-offset-2 transition-all duration-200 shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
