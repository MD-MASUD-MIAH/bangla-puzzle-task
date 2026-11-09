import React, { useState } from 'react';
import { X, Copy, Check, Download, QrCode } from 'lucide-react';

export default function QrModal({ link, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!link) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(link.shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate standard QR code image via Google charts API or SVG placeholder
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    link.shortUrl
  )}&color=58-66-237`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#5842ed] mx-auto flex items-center justify-center mb-4">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-1">
          QR Code Preview
        </h3>
        <p className="text-xs text-slate-500 mb-6 truncate max-w-xs mx-auto">
          {link.title || link.shortUrl}
        </p>

        {/* QR Code Container */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 inline-block mb-6 shadow-inner">
          <img
            src={qrImageUrl}
            alt={`QR code for ${link.shortUrl}`}
            className="w-48 h-48 rounded-lg object-contain mx-auto"
            loading="lazy"
          />
        </div>

        {/* URL Pill */}
        <div className="bg-purple-50/70 border border-purple-100 rounded-xl px-3 py-2 text-xs font-mono text-[#5842ed] mb-6 truncate">
          {link.shortUrl}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#5842ed] hover:bg-[#4833dd] text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <a
            href={qrImageUrl}
            target="_blank"
            download="qrcode.png"
            rel="noreferrer"
            className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Save</span>
          </a>
        </div>
      </div>
    </div>
  );
}

