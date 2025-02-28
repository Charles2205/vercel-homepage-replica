
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-24" ref={ctaRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-vercel-900 py-16 px-8 shadow-medium">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-vercel-800 to-vercel-950" />
          
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start building the future
            </h2>
            <p className="mt-4 text-lg text-vercel-200">
              Deploy your first project in seconds.
            </p>
            <div className="mt-10">
              <Button
                variant="default"
                className="bg-white text-vercel-900 hover:bg-vercel-50"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[400px] w-[400px] rounded-full bg-vercel-800/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[300px] w-[300px] rounded-full bg-vercel-800/50 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
