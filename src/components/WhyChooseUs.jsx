import React from 'react';
import { Zap, BarChart3, QrCode, Layers, ShieldCheck, Clock } from 'lucide-react';
import { whyChooseCards } from '../data/mockData';

const iconMap = {
  Zap: Zap,
  BarChart3: BarChart3,
  QrCode: QrCode,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  Clock: Clock,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-[#fafbfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Why Choose Our Platform?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to manage and scale your links with complete reliability
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseCards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Zap;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs hover:shadow-lg hover:border-purple-200 transition-all duration-300 group"
              >
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5842ed] group-hover:bg-[#5842ed] group-hover:text-white transition-colors flex items-center justify-center mb-5 shadow-xs">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#5842ed] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

