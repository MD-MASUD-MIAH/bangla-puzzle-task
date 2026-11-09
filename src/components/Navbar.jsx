import { useState } from "react";
import logo from "../assets/img/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b font-sans sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* logo asdfaf */}

        <button className="flex items-center">
          <img
            alt="thetiny.site"
            className="object-contain"
            src={logo}
            style={{ height: 64, width: "auto" }}
          />
        </button>

        {/* Desktop  nav */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600">
          <a href="#" className="text-[#5B21F3]">
            Home
          </a>
          <a href="#" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Terms
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="font-semibold text-sm bg-transparent border-[1.5px] border-gray-200 rounded-lg px-[18px] py-[7px] cursor-pointer text-[#1a1a1a]"
          >
            Log In
          </a>
          <a
            href="#"
            className="font-semibold text-sm bg-[#5b21f3] text-white border-none rounded-lg px-[18px] py-2 cursor-pointer"
          >
            Get Started Free
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden text-gray-800 p-1 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile  Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 border-t border-gray-100 flex flex-col gap-4 text-base font-semibold text-slate-800">
          <a href="#" className="text-[#5B21F3] py-1">
            Home
          </a>
          <a href="#" className="py-1">
            About
          </a>
          <a href="#" className="py-1">
            Blog
          </a>
          <a href="#" className="py-1">
            Terms
          </a>

          <div className="flex flex-col gap-2.5 pt-4">
            <a
              href="#"
              className="w-full text-center py-2.5 text-sm font-medium text-slate-800 border border-gray-200 rounded-lg"
            >
              Log In
            </a>
            <a
              href="#"
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#5B21F3] rounded-lg"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
