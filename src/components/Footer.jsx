import React from 'react';
import { Link2, Mail, Phone } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from './SocialIcons';
import { footerLinks } from '../data/mockData';

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand Info (2 columns wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#5842ed] to-[#7c66ff] flex items-center justify-center text-white shadow-sm">
                <Link2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                thetiny<span className="text-[#5842ed]">.site</span>
              </span>
            </a>

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              The fastest, most reliable URL shortening and link management platform. Built with modern technology for maximum performance and security.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-[#5842ed] hover:border-[#5842ed] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-[#5842ed] hover:border-[#5842ed] transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-[#5842ed] hover:border-[#5842ed] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-[#5842ed] hover:border-[#5842ed] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Contact */}
            <div className="space-y-1.5 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#5842ed]" />
                <span>support@thetiny.site</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#5842ed]" />
                <span>+880 (17) 0000-0000</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {footerLinks.products.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-[#5842ed] transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {footerLinks.company.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-[#5842ed] transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              {footerLinks.legal.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-[#5842ed] transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-slate-700">thetiny.site</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#footer" className="hover:text-[#5842ed] transition-colors">
              Privacy Policy
            </a>
            <a href="#footer" className="hover:text-[#5842ed] transition-colors">
              Terms of Service
            </a>
            <a href="#footer" className="hover:text-[#5842ed] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
