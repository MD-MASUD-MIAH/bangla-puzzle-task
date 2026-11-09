import React from 'react';
import { statsData } from '../data/mockData';

export default function StatsSection() {
  return (
    <section className="bg-[#5842ed] text-white py-10 md:py-14 shadow-lg shadow-indigo-600/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-slate-400/20 md:divide-x">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-4">
              <span className="font-black text-[clamp(1.6rem,4vw,2.4rem)] text-white leading-none">
                {stat.value}
              </span>
              <span className="text-[0.85rem] text-white/80 mt-[6px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

