'use client';

import { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      quote: "In critical infrastructure, protection across all layers of cyber defense is non-negotiable. Keystrike strengthens one of the earliest and most overlooked layers: verifying that the person behind a remote connection is genuinely the human authorized to be there. By inserting an additional control between multi-factor authentication and the first keystroke, it gives us another defensive barrier before any action can take place.",
      author: "Chief Information Security Officer",
      organization: "National Power Grid Operator"
    },
    {
      id: 2,
      quote: "Under DORA, financial institutions must demonstrate not just strong controls, but operational resilience under stress. For a central bank, credential compromise is not an IT issue, it is systemic risk. Keystrike strengthens our control framework by continuously validating real user presence during privileged sessions, reducing the likelihood of unauthorized access to critical financial infrastructure and reinforcing trust in the stability of the financial system.",
      author: "CISO",
      organization: "Nordic Central Bank"
    },
    {
      id: 3,
      quote: "For a city government, cybersecurity is about maintaining continuity of essential public services and protecting citizen data. Credential-based attacks against municipal systems can disrupt operations and erode public trust. Keystrike strengthens our resilience by continuously validating real user presence during privileged sessions, reducing the risk of unauthorised access across critical city infrastructure.",
      author: "CISO",
      organization: "City of Tulsa"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  return (
    <div className="max-w-lg w-full" 
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}>
      <div className="bg-[#1A2E40] p-9 border-l-[3px] border-l-[#0A3746] rounded-tr-md rounded-br-md rounded-bl-md">
        {/* Stars */}
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="text-[#E2E8F0] mb-6 italic text-left leading-[1.75]">
          "{testimonials[currentIndex].quote}"
        </p>

        {/* Author */}
        <div className="text-left">
          <div className="font-semibold text-white text-[0.9rem]">{testimonials[currentIndex].author}</div>
          <div className="text-[#94A3B8] text-[0.8rem]">{testimonials[currentIndex].organization}</div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-[#0A3746]' 
                : 'bg-white bg-opacity-30 hover:bg-opacity-50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;