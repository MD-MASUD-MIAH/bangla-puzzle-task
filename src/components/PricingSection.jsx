import React from 'react';
import { Check, Zap } from 'lucide-react';
import { pricingPlans } from '../data/mockData';

export default function PricingSection({ onPlanSelect }) {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#fafbfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#5842ed] bg-purple-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose the plan that fits your needs. No surprise fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan) => {
            const isFeatured = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#5842ed] text-white shadow-2xl shadow-indigo-500/25 lg:-translate-y-2 border-2 border-[#5842ed]'
                    : 'bg-white text-slate-900 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-purple-200'
                }`}
              >
                {/* Popular Pill Badge */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="mb-6">
                    <h3 className={`text-xl font-bold mb-1.5 ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${isFeatured ? 'text-purple-100' : 'text-slate-500'}`}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span className={`text-sm font-medium ${isFeatured ? 'text-purple-200' : 'text-slate-500'}`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                            isFeatured
                              ? 'bg-white/20 text-white'
                              : 'bg-purple-50 text-[#5842ed]'
                          }`}
                        >
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <span className={`text-sm ${isFeatured ? 'text-purple-50' : 'text-slate-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action Button */}
                <button
                  type="button"
                  onClick={() => onPlanSelect?.(plan)}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all cursor-pointer text-center ${
                    isFeatured
                      ? 'bg-white text-[#5842ed] hover:bg-slate-50 shadow-md shadow-indigo-900/20'
                      : plan.buttonVariant === 'secondary'
                      ? 'bg-purple-50 hover:bg-purple-100 text-[#5842ed] border border-purple-200'
                      : 'bg-[#5842ed] hover:bg-[#4833dd] text-white shadow-xs'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

