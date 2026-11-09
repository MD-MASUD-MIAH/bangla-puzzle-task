const HeroSection = () => {
  return (
    <div>
      <section className="pt-12 pb-20 px-6 bg-gradient-to-br from-[#f8f9fc] to-[#eef0ff]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-[#5b21f3]/[0.08] border border-[#5b21f3]/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5b21f3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 7h6v6" />
                <path d="m22 7-8.5 8.5-5-5L2 17" />
              </svg>
              <span className="text-[0.8rem] font-semibold text-[#5b21f3]">
                Trusted by thousands of users
              </span>
            </div>

            <h1 className="font-black text-3xl sm:text-5xl md:text-6xl leading-[1.1] mb-5 text-[#1a1a1a]">
              Shorten Your URL
              <br />
              <span className="text-[#5b21f3]">in seconds</span>
            </h1>

            <p className="text-[1.1rem] text-gray-500 leading-relaxed max-w-[520px] mx-auto mb-9">
              Create short, memorable links that you can share anywhere. Track
              every click with powerful analytics.
            </p>
          </div>

          <div className="rounded-2xl p-8 md:p-12 text-center bg-white shadow-[0_4px_40px_rgba(91,33,243,0.1)] border border-gray-200 max-w-[720px] mx-auto">
            <div className="inline-flex items-center justify-center rounded-full mb-5 w-16 h-16 bg-[#5b21f3]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5b21f3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>

            <h3 className="font-extrabold text-[1.4rem] mb-2.5 text-[#1a1a1a]">
              Login to make your URL short
            </h3>

            <p className="text-[0.95rem] text-gray-500 leading-relaxed max-w-[440px] mx-auto mb-[26px]">
              Sign in or create a free account to start shortening links,
              generating QR codes, and tracking every click in real time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-[#5b21f3] text-white rounded-xl px-[30px] py-[13px] text-[0.95rem] font-bold cursor-pointer inline-flex items-center justify-center gap-2 hover:bg-[#4d1bd6] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Login to Make URL
              </button>

              <button className="bg-white text-[#5b21f3] border-2 border-[#5b21f3] rounded-xl px-[30px] py-[13px] text-[0.95rem] font-bold cursor-pointer inline-flex items-center justify-center gap-2 hover:bg-[#5b21f3]/5 transition-colors">
                Sign Up Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
