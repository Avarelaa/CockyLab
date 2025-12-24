import React from 'react';
import { CheckCircle } from 'lucide-react';
import { BRAND } from '../data/brand';
import { PRODUCT } from '../data/products';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { SectionTitle } from '../components/SectionTitle';
import { trackEvent } from '../hooks/useAnalytics';

export const ProductPage = () => (
  <div className="pt-24 pb-20 bg-[#f2ede2] min-h-screen animate-fade-in">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl p-6 md:p-12 shadow-xl">
        <div className="space-y-4">
          <div className="bg-[#f2ede2] rounded-2xl h-96 flex items-center justify-center relative overflow-hidden p-8">
             <img 
               src="/assets/image_7f7f34.png" 
               alt="Fibra+ Producto" 
               className="w-full h-full object-contain drop-shadow-xl"
             />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="/assets/image_7f7c66.jpg" className="rounded-xl h-32 object-cover w-full opacity-80 hover:opacity-100 transition-opacity" alt="Detalle" />
             <img src="/assets/image_7f7c87.jpg" className="rounded-xl h-32 object-cover w-full opacity-80 hover:opacity-100 transition-opacity" alt="Uso diario" />
          </div>
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#283a42] mb-2">{PRODUCT.name}</h1>
          <p className="text-xl text-[#00ab85] font-bold mb-6">{PRODUCT.price}</p>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            {PRODUCT.description} Formulado para integrarse a tu rutina diaria sin complicaciones. 
            Fibra+ te ayuda a mantener tu sistema digestivo regulado, permitiéndote sentirte seguro y preparado en cualquier momento.
          </p>

          <div className="bg-[#f9f9f9] p-6 rounded-xl mb-8">
            <h3 className="font-bold text-[#283a42] mb-4">Por qué te va a gustar:</h3>
            <ul className="space-y-3">
              {PRODUCT.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle size={20} className="text-[#00ab85] mt-1 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <ButtonPrimary className="w-full justify-center" onClick={() => {
              trackEvent('begin_checkout', { item: 'Fibra+', origin: 'product_detail_main' });
              window.open(BRAND.links.mercadolibre, '_blank');
            }}>
              Comprar ahora en Mercado Libre
            </ButtonPrimary>
            <p className="text-center text-sm text-gray-400">
              Serás redirigido a Mercado Libre para un pago y envío seguros.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <SectionTitle>Simple de usar</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { title: "1. Toma", text: "3 cápsulas con abundante agua." },
            { title: "2. Repite", text: "Dos veces al día, mañana y noche." },
            { title: "3. Disfruta", text: "Siente la diferencia en tu confianza." }
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-6xl font-black text-[#ed6a6d] opacity-20 mb-4">{i + 1}</div>
              <h3 className="text-xl font-bold text-[#283a42] mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
