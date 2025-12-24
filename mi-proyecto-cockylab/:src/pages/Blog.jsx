import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { SectionTitle } from '../components/SectionTitle';
import { trackEvent } from '../hooks/useAnalytics';

export const BlogPage = () => (
  <div className="pt-24 pb-20 bg-[#f2ede2] min-h-screen animate-fade-in">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-[#ed6a6d] font-bold tracking-wider uppercase">The Lab Journal</span>
        <SectionTitle>Lifestyle & Bienestar</SectionTitle>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Consejos, historias y rutinas para el hombre moderno que busca confianza y estilo.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div key={post.id} onClick={() => trackEvent('view_blog_post', { post_id: post.id, title: post.title })} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-[#00ab85] bg-[#00ab85]/10 px-2 py-1 rounded mb-3 inline-block">
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-[#283a42] mb-3 leading-tight group-hover:text-[#00ab85] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                {post.excerpt}
              </p>
              <span className="text-[#ed6a6d] font-bold text-sm flex items-center gap-1">
                Leer más <ArrowRight size={16} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);