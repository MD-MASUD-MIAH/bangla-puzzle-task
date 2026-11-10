import { BarChart3, Clock, Globe, Lock, QrCode, Zap } from "lucide-react";
import { whyChooseCards } from "../data/mockData";

const iconMap = {
  Zap: Zap,
  BarChart3: BarChart3,
  Globe: Globe,
  QrCode: QrCode,
  Lock: Lock,
  Clock: Clock,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-extrabold text-[clamp(1.8rem,4vw,2.5rem)] text-[#1a1a1a] mb-3">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-500 text-base">
            Everything you need to manage and track your links
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseCards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Zap;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200"
              >
                <IconComponent className="w-8 h-8 text-[#5b21f3] stroke-[2]" />

                <h3 className="font-bold text-[1.1rem] text-[#1a1a1a] mt-4 mb-2">
                  {card.title}
                </h3>

                <p className="text-[0.9rem] text-gray-500 leading-normal">
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
