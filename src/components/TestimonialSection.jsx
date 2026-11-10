import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "../data/mockData";

export default function TestimonialSection() {
  const [visibleCards, setVisibleCards] = useState(3);
  const originalLength = testimonials.length;

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedTestimonials = [
    ...testimonials.slice(-3),
    ...testimonials,
    ...testimonials.slice(0, 3),
  ];

  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isMoving = useRef(false);

  const prevSlide = () => {
    if (isMoving.current) return;
    isMoving.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (isMoving.current) return;
    isMoving.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    isMoving.current = false;

    if (currentIndex >= originalLength + 3) {
      setIsTransitioning(false);
      setCurrentIndex(3);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(originalLength);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, visibleCards]);

  const activeDotIndex = (currentIndex - 3 + originalLength) % originalLength;

  return (
    <section className="py-20 px-6 bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-bold text-xs tracking-widest uppercase text-[#1a1a1a]/40 mb-3">
            Testimonials
          </p>
          <h2 className="font-extrabold text-[clamp(1.8rem,4vw,2.4rem)] text-[#1a1a1a] leading-tight">
            Loved by 80,000+ users worldwide.
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 text-[#1a1a1a] flex items-center justify-center shadow-md hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-200 text-[#1a1a1a] flex items-center justify-center shadow-md hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-out"
                  : "transition-none"
              }`}
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((item, idx) => (
                <div key={idx} className="w-full md:w-1/3 shrink-0 p-3 flex">
                  <div className="w-full rounded-2xl p-6 bg-white border border-gray-200 shadow-sm flex flex-col justify-between min-h-[220px]">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#5b21f3] text-[#5b21f3]"
                          />
                        ))}
                      </div>

                      <p className="text-[0.9rem] text-[#1a1a1a] leading-relaxed mb-6 font-medium">
                        "{item.quote || item.text}"
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-[0.875rem] text-[#1a1a1a]">
                        {item.name}
                      </p>
                      <p className="text-[0.8rem] text-gray-500">
                        {item.role
                          ? `${item.role}${item.company ? `, ${item.company}` : ""}`
                          : "User"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (isMoving.current) return;
                  setIsTransitioning(true);
                  setCurrentIndex(idx + 3);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDotIndex === idx
                    ? "w-6 bg-[#5b21f3]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
