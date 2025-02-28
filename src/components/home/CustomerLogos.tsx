
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  name: string;
  delay: string;
}

// Placeholder for actual company logos
const Logo: React.FC<LogoProps> = ({ name, delay }) => {
  return (
    <div
      className={cn(
        "flex h-8 items-center justify-center px-4 opacity-0 sm:h-10",
        `animate-fadeIn ${delay}`
      )}
    >
      <div className="flex items-center justify-center rounded-md bg-vercel-50 px-4 py-2">
        <span className="text-sm font-semibold text-vercel-700">{name}</span>
      </div>
    </div>
  );
};

const CustomerLogos = () => {
  const logos = [
    { name: "Airbnb", delay: "animate-delay-100" },
    { name: "GitHub", delay: "animate-delay-200" },
    { name: "Netflix", delay: "animate-delay-300" },
    { name: "Uber", delay: "animate-delay-400" },
    { name: "Spotify", delay: "animate-delay-500" },
    { name: "Shopify", delay: "animate-delay-600" },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-vercel-500">
          Trusted by the world's most innovative teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, index) => (
            <Logo key={index} name={logo.name} delay={logo.delay} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
