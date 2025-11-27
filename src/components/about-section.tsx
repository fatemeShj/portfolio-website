"use client";

import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations();

  const skills = [
    "TypeScript",
    "React.js",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui",
    "Radix UI",
    "React Hook Form",
    "Zod",
    "TanStack Query",
    "Next-Intl",
    "Responsive Design",
    "UI/UX Logic",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
    "Zustand",
    "Axios",
    "Git",
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            {t("about.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                {t("about.description")}
              </p>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                {t("skills.title")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
