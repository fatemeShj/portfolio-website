"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const t = useTranslations();
  const projects = [
    {
      title: "Positron pay",
      description: "dummy",
      image: "/positron.png",
      tags: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
      demo: "https://positronpay.com",
    },
    {
      title: "Jabalrayan",
      description: "dummy",
      image: "/jabal.png",
      tags: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
      demo: "https://jabalrayan.com/",
    },
    {
      title: "Prima Luxury",
      description: "dummy",
      image: "/prima.png",
      tags: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
      demo: "https://offplan.primaluxury.com/",
    },
    // {
    //   title: "Hanus",
    //   description: "dummy",
    //   image: "/hanus.png",
    //   tags: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
    //   demo: "https://hanusart.ir",
    // },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            {t("projects.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-accent/10 text-primary rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t("projects.viewProject")}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
