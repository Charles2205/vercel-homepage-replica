
import React from "react";
import FeatureCard from "./FeatureCard";
import { Globe, Zap, Shield, Code } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Global Edge Network",
      description:
        "Deploy content at the edge for faster sites and applications with minimal latency.",
      icon: Globe,
    },
    {
      title: "Performance Optimized",
      description:
        "Automatically optimize images, fonts, and code for the fastest possible page loads.",
      icon: Zap,
    },
    {
      title: "Enterprise Security",
      description:
        "Built-in protection against DDoS attacks, with automatic SSL certificates.",
      icon: Shield,
    },
    {
      title: "Developer Experience",
      description:
        "Preview deployments for every git push and instant rollbacks if something goes wrong.",
      icon: Code,
    },
  ];

  return (
    <section id="features" className="bg-vercel-50/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-vercel-900 sm:text-4xl">
            Why choose Vercel
          </h2>
          <p className="mt-4 text-lg text-vercel-600">
            Everything you need to build and deploy your sites, faster.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
