
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // Create a radial gradient that follows the mouse
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative flex min-h-[calc(100vh-5rem)] w-full flex-col justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 80%)",
      }}
    >
      {/* Background subtle gradient  */}
      <div className="absolute inset-0 bg-gradient-to-b from-vercel-50/60 to-white pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        {/* Pretitle tag */}
        <div className="mb-4 animate-fadeIn rounded-full border border-vercel-200 bg-white/50 px-4 py-1 shadow-subtle backdrop-blur-sm">
          <p className="text-center text-sm font-medium text-vercel-800">
            Announcing our $150M Series D
          </p>
        </div>
        
        {/* Main headline */}
        <h1 className="animate-fadeIn text-balance mb-6 text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Develop.<br className="md:hidden" /> Preview.<br className="md:hidden" /> Ship.
        </h1>
        
        {/* Subheading */}
        <p className="animate-fadeIn animate-delay-100 mb-10 max-w-xl text-center text-lg text-vercel-600 md:text-xl">
          Vercel's frontend cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web.
        </p>
        
        {/* CTA buttons */}
        <div className="animate-fadeIn animate-delay-200 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button variant="glow" size="lg" className="group">
            Start Deploying
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button variant="outline" size="lg">
            Get a Demo
          </Button>
        </div>
        
        {/* Floating code preview */}
        <div className="animate-fadeIn animate-delay-300 relative mt-16 max-w-3xl rounded-lg border border-vercel-200 bg-white shadow-medium">
          <div className="flex items-center border-b border-vercel-100 bg-vercel-50 px-4 py-2">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-vercel-300" />
              <div className="h-3 w-3 rounded-full bg-vercel-300" />
              <div className="h-3 w-3 rounded-full bg-vercel-300" />
            </div>
            <div className="mx-auto text-xs font-medium text-vercel-500">
              Terminal
            </div>
          </div>
          <div className="overflow-hidden bg-vercel-950 p-4 text-left">
            <div className="whitespace-nowrap font-mono text-sm text-green-400">
              <span className="text-gray-500">$</span> npx create-next-app@latest
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
        
        {/* Gradient orb */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-[500px] w-[700px] -translate-x-1/2 animate-float opacity-30">
          <div className="absolute h-full w-full animate-gradientBackground rounded-full bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-100 blur-3xl" />
        </div>
      </div>
      
      {/* Bottom wave design */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
};

export default Hero;
