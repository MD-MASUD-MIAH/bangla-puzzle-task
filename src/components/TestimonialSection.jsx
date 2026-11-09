import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

export default function TestimonialSection() {
  const item = testimonials[0];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
          Loved by 80,000+ users worldwide.
        </h2>

        {/* Testimonial Card */}
        <div className="bg-[#fcfcff] border border-purple-100/80 rounded-3xl p-8 sm:p-12 shadow-sm text-left max-w-2xl mx-auto relative">
          
          <Quote className="w-10 h-10 text-purple-200 mb-4 stroke-1" />

          {/* 5 Stars */}
          <div className="flex items-center gap-1 mb-5">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Testimonial Quote */}
          <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed mb-6">
            "{item.quote}"
          </p>

          {/* User Bio */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#5842ed] to-[#8d79ff] flex items-center justify-center text-white font-bold text-sm shadow-xs">
              {item.name.charAt(0)}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
              <p className="text-xs text-slate-500">{item.role}, {item.company}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

