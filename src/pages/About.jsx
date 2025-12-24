import React from 'react';
import { SectionTitle } from '../components/SectionTitle';

export const AboutPage = () => (
  <div className="pt-24 pb-20 bg-[#f2ede2] min-h-screen animate-fade-in">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-[#283a42] mb-6 text-center">
          About <span className="text-[#00ab85]">CockyLab</span>
        </h1>
        
        <div className="prose prose-lg mx-auto text-gray-600">
          <p className="lead text-xl text-center mb-8 font-medium">
            Creemos que la confianza es el accesorio más importante que puedes llevar.
          </p>
          
          <img 
            src="/assets/image_7f7c4b.jpg" 
            alt="Lifestyle CockyLab" 
            className="w-full h-64 object-cover rounded-xl mb-8"
          />

          <h3 className="text-2xl font-bold text-[#283a42] mb-4">¿Por qué existimos?</h3>
          <p className="mb-6">
            Nacimos para eliminar el estigma y la incomodidad de la preparación. Entendemos que el hombre moderno quiere cuidarse, sentirse bien y disfrutar de su intimidad sin planificaciones complejas ni preocupaciones médicas.
          </p>

          <h3 className="text-2xl font-bold text-[#283a42] mb-4">Nuestra Visión</h3>
          <p className="mb-6">
            Comenzamos con <strong>Fibra+</strong> porque creemos que el bienestar empieza desde adentro. Pero CockyLab es más que un producto; es un laboratorio de confianza. Estamos desarrollando una línea completa de esenciales para potenciar tu seguridad diaria.
          </p>

          <blockquote className="border-l-4 border-[#ed6a6d] pl-4 italic text-gray-800 my-8">
            "Boost your confidence. Be ready, feel confident."
          </blockquote>
        </div>
      </div>
    </div>
  </div>
);
