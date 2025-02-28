
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  index,
}) => {
  const delays = ["", "animate-delay-100", "animate-delay-200", "animate-delay-300"];
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg border border-vercel-100 bg-white p-6 shadow-subtle transition-all duration-300 hover:shadow-medium opacity-0",
        "animate-fadeIn",
        delays[index % delays.length]
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-vercel-50 text-vercel-900 transition-colors duration-300 group-hover:bg-vercel-100">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-vercel-900">{title}</h3>
      <p className="text-vercel-600">{description}</p>
      
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-vercel-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
};

export default FeatureCard;
