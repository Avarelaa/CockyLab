import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { ProductPage } from './pages/Product';
import { BlogPage } from './pages/Blog';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { useAnalytics } from './hooks/useAnalytics';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useAnalytics(currentPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = page;
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage navigateTo={navigateTo} />;
      case 'product': return <ProductPage />;
      case 'blog': return <BlogPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="font-sans bg-[#f2ede2] text-[#283a42] min-h-screen flex flex-col selection:bg-[#00ab85] selection:text-white">
      <div className="bg-[#283a42] text-white text-xs font-bold py-2 text-center tracking-wider">
        ENVÍOS SEGUROS Y DISCRETOS A TODO EL PAÍS 🇨🇱
      </div>
      
      <Header navigateTo={navigateTo} currentPage={currentPage} />

      <main className="flex-grow pt-8">
        {renderPage()}
      </main>

      <Footer navigateTo={navigateTo} />
    </div>
  );
}
