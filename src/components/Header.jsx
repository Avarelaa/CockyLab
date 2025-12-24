import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { BRAND } from '../data/brand';
import { trackEvent } from '../hooks/useAnalytics';

export const Header = ({ navigateTo, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  const NavLink = ({ page, label }) => (
    <button 
      onClick={() => handleNavClick(page)}
      className={`text-sm font-bold uppercase tracking-wider hover:text-[#00ab85] transition-colors ${currentPage === page ? 'text-[#00ab85]' : 'text-[#283a42]'}`}
    >
      {label}
    </button>
  );

  return (
    <header className="fixed w-full top-8 z-50 bg-[#f2ede2]/90 backdrop-blur-md border-b border-[#00ab85]/10 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-black text-[#00ab85] cursor-pointer flex items-center gap-2 tracking-tighter"
            onClick={() => handleNavClick('home')}
          >
            COCKYLAB.
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink page="home" label="Home" />
            <NavLink page="product" label="Fibra+" />
            <NavLink page="blog" label="Blog" />
            <NavLink page="about" label="Nosotros" />
            <NavLink page="contact" label="Contacto" />
            
            <button 
              onClick={() => {
                trackEvent('click_nav_buy', { origin: 'navbar' });
                window.open(BRAND.links.mercadolibre, '_blank');
              }}
              className="bg-[#283a42] text-white hover:bg-[#00ab85] px-5 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-2"
            >
              Comprar <ShoppingBag size={16} />
            </button>
          </nav>

          <button className="md:hidden text-[#283a42]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-20 left-0 w-full shadow-xl border-t border-gray-100 p-6 flex flex-col gap-6 animate-fade-in">
            <NavLink page="home" label="Home" />
            <NavLink page="product" label="Fibra+" />
            <NavLink page="blog" label="Blog" />
            <NavLink page="about" label="Nosotros" />
            <NavLink page="contact" label="Contacto" />
            <button 
              onClick={() => {
                trackEvent('click_nav_buy', { origin: 'mobile_menu' });
                window.open(BRAND.links.mercadolibre, '_blank');
              }}
              className="bg-[#00ab85] text-white w-full py-3 rounded-lg font-bold flex justify-center items-center gap-2"
            >
              Comprar en Mercado Libre
            </button>
          </div>
        )}
      </header>
  );
};
