/**
 * Tracking Library for Google Analytics & Google Ads
 * Only loads scripts when user has given consent
 */

// Replace these with your actual IDs
export const GA_MEASUREMENT_ID = 'UA-XXXXXXXXX-X'; // Your Google Analytics ID
export const GOOGLE_ADS_ID = 'AW-XXXXXXXXX'; // Your Google Ads ID
export const GOOGLE_ADS_CONVERSION_LABEL = 'XXXXX'; // Your Conversion Label

interface CookiePreferences {
  essential: boolean;
  externalMedia: boolean;
  analytics: boolean;
  marketing: boolean;
}

/**
 * Load Google Analytics Script
 */
export const loadGoogleAnalytics = () => {
  if (typeof window === 'undefined') return;

  // Check if already loaded
  if (window.gtag) {
    console.log('[Tracking] Google Analytics already loaded');
    return;
  }

  console.log('[Tracking] Loading Google Analytics...');

  // Create script elements
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  `;
  document.head.appendChild(script2);

  console.log('[Tracking] Google Analytics loaded');
};

/**
 * Load Google Ads Script
 */
export const loadGoogleAds = () => {
  if (typeof window === 'undefined') return;

  // Check if gtag exists (needs GA to be loaded first)
  if (!window.gtag) {
    console.warn('[Tracking] Google Ads requires Google Analytics. Loading GA first...');
    loadGoogleAnalytics();
  }

  console.log('[Tracking] Loading Google Ads...');

  // Configure Google Ads
  if (window.gtag) {
    window.gtag('config', GOOGLE_ADS_ID);
    console.log('[Tracking] Google Ads configured');
  }
};

/**
 * Track a page view
 */
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

/**
 * Track a custom event
 */
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * Track a conversion (Google Ads)
 */
export const trackConversion = (conversionLabel?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${conversionLabel || GOOGLE_ADS_CONVERSION_LABEL}`,
  });
};

/**
 * Initialize tracking based on user consent
 */
export const initializeTracking = () => {
  if (typeof window === 'undefined') return;

  // Get cookie preferences from localStorage
  const cookieConsent = localStorage.getItem('cookieConsent');
  
  if (!cookieConsent) {
    console.log('[Tracking] No consent given yet');
    return;
  }

  try {
    const preferences: CookiePreferences = JSON.parse(cookieConsent);

    // Load Google Analytics if consent given
    if (preferences.analytics) {
      loadGoogleAnalytics();
    }

    // Load Google Ads if consent given
    if (preferences.marketing) {
      loadGoogleAds();
    }

    console.log('[Tracking] Initialized with preferences:', preferences);
  } catch (error) {
    console.error('[Tracking] Error parsing cookie preferences:', error);
  }
};

/**
 * Remove all tracking cookies and scripts
 */
export const removeTracking = () => {
  if (typeof window === 'undefined') return;

  console.log('[Tracking] Removing all tracking...');

  // Remove Google Analytics cookies
  const gaCookies = ['_ga', '_gat', '_gid', '_gat_gtag_' + GA_MEASUREMENT_ID];
  gaCookies.forEach((cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });

  // Remove Google Ads cookies
  const adsCookies = ['_gcl_au', '_gcl_aw', '_gcl_dc', '_gcl_gb'];
  adsCookies.forEach((cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });

  // Reload page to remove scripts
  window.location.reload();
};

// Type declarations for window.gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

