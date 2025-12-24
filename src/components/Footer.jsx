import React from 'react';
import { ShieldCheck, Instagram, Mail } from 'lucide-react';

export const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-[#283a42] text-[#f2ede2] py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-2xl font-black text-[#00ab85] mb-4">COCKYLAB.</h3>
              <p className="text-gray-400 text-sm">
                Boost your confidence. Productos de estilo de vida para el hombre que siempre está listo.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Explora</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => navigateTo('product')} className="hover:text-[#00ab85] text-left">Fibra+</button></li>
                <li><button onClick={() => navigateTo('blog')} className="hover:text-[#00ab85] text-left">Blog</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-[#00ab85] text-left">Sobre Nosotros</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#00ab85]">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-[#00ab85]">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-[#00ab85]">Envíos y Devoluciones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#f2ede2]/10 rounded-full flex items-center justify-center hover:bg-[#00ab85] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#f2ede2]/10 rounded-full flex items-center justify-center hover:bg-[#00ab85] transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} CockyLab. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#00ab85]" />
              <span>Compra segura procesada por Mercado Libre</span>
            </div>
          </div>
        </div>
      </footer>
  );
};
