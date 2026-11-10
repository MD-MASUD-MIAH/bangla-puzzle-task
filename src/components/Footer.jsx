import { Mail, Phone } from "lucide-react";
import logo from "../assets/img/logo.png";
import { footerLinks } from "../data/mockData";
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./SocialIcons";

export default function Footer() {
  return (
    <footer id="footer" className="mt-auto border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <button type="button" className="block mb-5 cursor-pointer">
              <img
                alt="thetiny.site"
                className="h-[34px] w-auto object-contain"
                src={logo}
              />
            </button>

            <p className="text-[0.9rem] text-gray-500 leading-relaxed max-w-[320px]">
              The fastest way to shorten, track, and manage your URLs. Trusted
              by thousands of marketers, developers, and businesses across
              Bangladesh and beyond.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:opacity-80 transition-opacity"
              >
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>

              <a
                href="https://bd.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:opacity-80 transition-opacity"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:opacity-80 transition-opacity"
              >
                <TwitterIcon className="w-[18px] h-[18px]" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:opacity-80 transition-opacity"
              >
                <GithubIcon className="w-[18px] h-[18px]" />
              </a>
            </div>

            <div className="flex flex-col gap-2 mt-4 text-[0.85rem] text-gray-500">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#5b21f3]" />
                <span>banglapuzzle@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#5b21f3]" />
                <span>+880 1880-811048</span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold text-xs text-gray-500 tracking-widest uppercase mb-4">
              Product
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks?.products?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href || "#"}
                  className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors"
                >
                  {item.name}
                </a>
              )) || (
                <>
                  <button
                    type="button"
                    className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors cursor-pointer"
                  >
                    Features
                  </button>
                  <button
                    type="button"
                    className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors cursor-pointer"
                  >
                    Pricing
                  </button>
                  <span className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] cursor-pointer transition-colors">
                    API Docs
                  </span>
                  <span className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] cursor-pointer transition-colors">
                    Browser Extension
                  </span>
                  <button
                    type="button"
                    className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors cursor-pointer"
                  >
                    Report Malicious URL
                  </button>
                </>
              )}
            </div>
          </div>

          <div>
            <p className="font-bold text-xs text-gray-500 tracking-widest uppercase mb-4">
              Company
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks?.company?.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href || "#"}
                  className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors"
                >
                  {item.name}
                </a>
              )) || (
                <>
                  <button
                    type="button"
                    className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                  <button
                    type="button"
                    className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors cursor-pointer"
                  >
                    Blog
                  </button>
                  <button
                    type="button"
                    className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors cursor-pointer"
                  >
                    Terms &amp; Conditions
                  </button>
                  <button
                    type="button"
                    className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                  <button
                    type="button"
                    className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors cursor-pointer"
                  >
                    Cookie Policy
                  </button>
                  <button
                    type="button"
                    className="text-[0.9rem] text-gray-500 hover:text-[#5b21f3] text-left transition-colors cursor-pointer"
                  >
                    Refund Policy
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.85rem] text-gray-500">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://banglapuzzle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5b21f3] hover:underline"
            >
              Bangla Puzzle Limited
            </a>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-6 flex-wrap justify-center text-[0.85rem] text-gray-500">
            <button
              type="button"
              className="hover:text-[#5b21f3] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="hover:text-[#5b21f3] transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
            <button
              type="button"
              className="hover:text-[#5b21f3] transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              type="button"
              className="hover:text-[#5b21f3] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
