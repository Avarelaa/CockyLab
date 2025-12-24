import React from 'react';
import { Mail } from 'lucide-react';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { SectionTitle } from '../components/SectionTitle';
import { trackEvent } from '../hooks/useAnalytics';

export const ContactPage = () => (
  <div className="pt-24 pb-20 bg-[#f2ede2] min-h-screen animate-fade-in">
    <div className="container mx-auto px-6 max-w-xl">
      <div className="text-center mb-10">
        <SectionTitle>Hablemos</SectionTitle>
        <p className="text-gray-600">
          ¿Tienes dudas sobre el producto o tu pedido? Estamos aquí.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            trackEvent('form_submission', { type: 'contact' });
            alert('Gracias, mensaje enviado (Simulación)');
        }}>
          <div>
            <label className="block text-sm font-bold text-[#283a42] mb-2">Nombre</label>
            <input type="text" className="w-full bg-[#f9f9f9] border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#00ab85]" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#283a42] mb-2">Email</label>
            <input type="email" className="w-full bg-[#f9f9f9] border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#00ab85]" placeholder="tu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#283a42] mb-2">Mensaje</label>
            <textarea className="w-full bg-[#f9f9f9] border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#00ab85] h-32" placeholder="¿En qué podemos ayudarte?"></textarea>
          </div>
          <ButtonPrimary className="w-full">Enviar Mensaje</ButtonPrimary>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 mb-2">También puedes escribirnos directo:</p>
          <a href="mailto:hola@cockylab.com" className="text-[#00ab85] font-bold flex items-center justify-center gap-2 hover:underline">
            <Mail size={18} /> hola@cockylab.com
          </a>
        </div>
      </div>
    </div>
  </div>
);
