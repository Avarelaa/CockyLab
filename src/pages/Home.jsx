import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Heart, CheckCircle } from 'lucide-react';
import { BRAND } from '../data/brand';
import { PRODUCT } from '../data/products';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { ButtonSecondary } from '../components/ButtonSecondary';
import { SectionTitle } from '../components/SectionTitle';
import { trackEvent } from '../hooks/useAnalytics';

export const HomePage = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0">
                <img 
                src="/assets/image_7f7c87.jpg" 
                alt="Hero BG" 
                className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f2ede2]/95 via-[#f2ede2]/70 to-transparent md:via-[#f2ede2]/40"></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                <span className="text-[#ed6a6d] font-bold tracking-wider uppercase mb-4 block animate-fade-in">Siempre listo</span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#283a42] mb-6 leading-tight">
                    {BRAND.claim}
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                    Confianza, estilo y bienestar para hombres que quieren disfrutar sin preocupaciones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <ButtonPrimary onClick={() => {
                        trackEvent('begin_checkout', { item: 'Fibra+', origin: 'hero_banner' });
                        window.open(BRAND.links.mercadolibre, '_blank');
                    }}>
                        Comprar ahora <ArrowRight size={20} />
                    </ButtonPrimary>
                    <ButtonSecondary onClick={() => navigateTo('product')}>
                        Descubre cómo funciona
                    </ButtonSecondary>
                </div>
                </div>
            </div>
        </section>

        {/* PROBLEMA / TENSIÓN */}
        <section className="py-24 bg-[#283a42] text-[#f2ede2]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute -inset-4 bg-[#ed6a6d]/20 rounded-2xl transform rotate-3"></div>
                        <img 
                            src="/assets/image_7f7c66.jpg" 
                            alt="Pensativo en la cama" 
                            className="relative rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover h-[500px]"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            ¿La preocupación corta el momento?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Sabemos que los procesos previos pueden ser tediosos. La incertidumbre incomoda y te saca del juego. 
                            No deberías tener que elegir entre espontaneidad y tranquilidad.
                        </p>
                        <div className="flex items-center gap-4 text-[#ed6a6d]">
                            <Zap size={32} />
                            <span className="font-bold text-xl">Recupera la espontaneidad</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SOLUCIÓN & MARCA */}
        <section className="py-20 bg-[#f2ede2]">
            <div className="container mx-auto px-6 text-center max-w-3xl">
                <SectionTitle>Esto es {BRAND.name}</SectionTitle>
                <p className="text-xl text-gray-600 mb-12">
                    No somos una farmacéutica clínica. Somos una marca de estilo de vida diseñada para que te sientas seguro, ligero y preparado.
                    Bienestar simple para tu rutina diaria.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Seguridad", text: "Siéntete en control de tu cuerpo." },
                        { icon: Zap, title: "Espontaneidad", text: "Listo cuando tú lo estés." },
                        { icon: Heart, title: "Disfrute", text: "Conéctate sin preocupaciones." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-[#00ab85]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#00ab85]">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-[#283a42] mb-2">{item.title}</h3>
                            <p className="text-gray-500">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* PRODUCTO TEASER */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-[#f2ede2] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-sm flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#00ab85]/5 rounded-full filter blur-3xl transform scale-75"></div>
                            <img 
                                src="/assets/image_7f7f34.png" 
                                alt="Fibra+ Frasco" 
                                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <span className="bg-[#ed6a6d] text-white px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">Producto Estrella</span>
                        <h2 className="text-4xl font-bold text-[#283a42] mb-6">Conoce {PRODUCT.name}</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Mejora tu digestión, mantente ligero y prepárate para disfrutar. 
                            Un solo producto hoy, una marca que crece contigo.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {PRODUCT.benefits.slice(0,3).map((benefit, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={20} className="text-[#00ab85]" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        <ButtonPrimary onClick={() => window.open(BRAND.links.mercadolibre, '_blank')}>
                            Comprar en Mercado Libre
                        </ButtonPrimary>
                        <p className="mt-4 text-xs text-gray-400 flex items-center gap-1">
                            <ShieldCheck size={14} /> Compra 100% segura, envío discreto.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};
