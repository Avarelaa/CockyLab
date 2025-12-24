import { useEffect } from 'react';

// REEMPLAZA CON TU ID REAL
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; 

export const useAnalytics = (currentPage) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!document.getElementById('ga-script')) {
      const script = document.createElement('script');
      script.id = 'ga-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
    }
  }, []);

  useEffect(() => {
    if (window.gtag) {
      const title = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
      window.gtag('event', 'page_view', {
        page_title: title,
        page_location: window.location.href,
        page_path: `/${currentPage}`
      });
    }
  }, [currentPage]);
};

export const trackEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};
