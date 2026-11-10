import { ArrowRight, Check } from "lucide-react";
import { pricingPlans } from "../data/mockData";

export default function PricingSection({ onPlanSelect }) {
  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-bold text-xs tracking-widest uppercase text-[#1a1a1a]/40 mb-3">
            Pricing
          </p>
          <h2 className="font-extrabold text-[clamp(1.8rem,4vw,2.6rem)] text-[#1a1a1a] leading-tight">
            Simple, transparent pricing.
          </h2>
          <p className="text-base text-gray-500 mt-3">
            No hidden fees. Start free, scale when you're ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingPlans.map((plan) => {
            const isFeatured = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-[#5b21f3] text-white shadow-[0_8px_40px_rgba(91,33,243,0.25)] border-0"
                    : "bg-white text-[#1a1a1a] border-[1.5px] border-gray-200"
                }`}
              >
                <div>
                  <div className="mb-6">
                    <p
                      className={`font-bold text-[0.8rem] tracking-wider uppercase mb-3 ${
                        isFeatured ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {plan.name}
                    </p>

                    <div className="flex items-end gap-2 mb-3">
                      <span
                        className={`font-black text-[2.6rem] leading-none ${
                          isFeatured ? "text-white" : "text-[#1a1a1a]"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm mb-1.5 ${
                          isFeatured ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>

                    <p
                      className={`text-[0.9rem] ${
                        isFeatured ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 flex-1 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            isFeatured ? "bg-white/20" : "bg-[#5b21f3]/10"
                          }`}
                        >
                          <Check
                            className={`w-[11px] h-[11px] stroke-[2] ${
                              isFeatured ? "text-white" : "text-[#5b21f3]"
                            }`}
                          />
                        </div>
                        <span
                          className={`text-sm ${
                            isFeatured ? "text-white/85" : "text-[#1a1a1a]"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onPlanSelect?.(plan)}
                  className={`w-full py-3 rounded-[10px] text-[0.925rem] font-bold cursor-pointer flex items-center justify-center gap-2 transition-opacity hover:opacity-90 active:scale-95 ${
                    isFeatured
                      ? "bg-white text-[#5b21f3]"
                      : "bg-[#5b21f3] text-white"
                  }`}
                >
                  <span>{plan.buttonText || "Get Started Free"}</span>
                  <ArrowRight className="w-[15px] h-[15px]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
