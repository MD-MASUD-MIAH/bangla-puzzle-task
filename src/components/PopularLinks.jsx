import { Check, Copy, MousePointerClick, QrCode } from "lucide-react";
import { useState } from "react";

export default function PopularLinks({ links, onSelectQr }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link.shortUrl);
    setCopiedId(link.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-[clamp(1.5rem,4vw,2rem)] mb-3 text-slate-900">
            Most Popular Links
          </h2>
          <p className="text-gray-500">
            Check out the most clicked links on our platform
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {links.map((link) => {
            const isCopied = copiedId === link.id;

            return (
              <div
                key={link.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl hover:shadow-md transition-shadow bg-gray-50 border border-gray-200"
              >
                <div className="flex-1 min-w-0">
                  <a
                    href={link.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm inline-block hover:underline text-[#5b21f3] break-all"
                  >
                    {link.shortUrl}
                  </a>

                  <div className="mt-1 group relative">
                    <p className="text-xs text-gray-400 truncate">
                      {link.originalUrl}
                    </p>
                    <div className="hidden sm:block invisible group-hover:visible absolute left-0 top-full mt-1 z-10 p-2 bg-gray-900 text-white text-xs rounded shadow-lg whitespace-normal max-w-md pointer-events-none">
                      {link.originalUrl}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white border border-gray-100">
                    <MousePointerClick className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      {link.clicks?.toLocaleString() || 0} clicks
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(link)}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 hover:scale-105 bg-[#5b21f3] text-white cursor-pointer active:scale-95"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    title="Generate QR Code"
                    onClick={() => onSelectQr?.(link)}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 hover:scale-105 bg-gray-200 text-[#5b21f3] cursor-pointer active:scale-95 hover:bg-gray-300"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>QR</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
