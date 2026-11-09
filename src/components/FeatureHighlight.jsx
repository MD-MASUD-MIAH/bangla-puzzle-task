import React from 'react';
import { BarChart3, Check } from 'lucide-react';
import { featureBullets, liveAnalyticsData } from '../data/mockData';

export default function FeatureHighlight() {
  return (
    <section id="features" className="py-20 px-6 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-bold text-xs tracking-widest uppercase text-[#5b21f3] mb-3">
            Premium
          </p>

          <h2 className="font-extrabold text-[clamp(1.8rem,4vw,2.4rem)] text-[#1a1a1a] leading-tight mb-5">
            Unlock powerful tools for serious growth.
          </h2>

          <p className="text-[0.95rem] text-gray-500 leading-relaxed mb-7">
            Go beyond basic shortening with a full suite of marketing and developer tools — custom branded links, UTM builders, deep analytics, QR codes, and a REST API for your apps.
          </p>

          <div className="flex flex-col gap-3">
            {featureBullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[#5b21f3]/[0.12]">
                  <Check className="w-[11px] h-[11px] text-[#5b21f3] stroke-[2.5]" />
                </div>
                <span className="text-[0.9rem] text-[#1a1a1a] font-medium">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-8 bg-[#5b21f3]">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-white" />
            <span className="font-bold text-[0.95rem] text-white">
              Link Analytics Dashboard
            </span>
          </div>

          <div className="space-y-5">
            {liveAnalyticsData.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-mono text-[0.8rem] text-white/60">
                    {item.channel || item.link || item.shortUrl}
                  </span>
                  <span className="font-mono text-[0.8rem] font-semibold text-white">
                    {item.clicks.toLocaleString()}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/[0.12] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-white"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}