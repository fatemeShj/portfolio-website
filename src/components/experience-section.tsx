"use client";

import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function ExperienceSection() {
  const t = useTranslations();

  const experiences = [
    {
      title: "Frontend Developer",
      company: "positron",
      period: "May 2025 - present ",
      description: "dummy",
    },
    {
      title: "Frontend Developer",
      company: "Manizan",
      period: "Mar 2025 - May 2025",
      description: "dummy",
    },
    {
      title: "Frontend Developer",
      company: "Prima Luxury ",
      period: "Aug 2024 - Feb 2025",
      description: "dummy",
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            {t("experience.title")}
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-primary font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
