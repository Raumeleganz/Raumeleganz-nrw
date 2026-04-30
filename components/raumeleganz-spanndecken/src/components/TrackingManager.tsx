'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initializeTracking, trackPageView } from '@/lib/tracking';

/**
 * Tracking Manager Component
 * Initializes tracking scripts based on user consent
 * Tracks page views automatically on route changes
 */
export default function TrackingManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize tracking on mount
  useEffect(() => {
    // Initialize tracking based on saved consent
    initializeTracking();

    // Listen for cookie consent changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookieConsent' && e.newValue) {
        console.log('[TrackingManager] Cookie preferences changed, reinitializing...');
        initializeTracking();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      trackPageView(url);
    }
  }, [pathname, searchParams]);

  // This component doesn't render anything
  return null;
}

