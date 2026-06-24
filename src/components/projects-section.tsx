"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const tagIcons: Record<string, string> = {
  "Next.js": "/tech/next.svg",
  "React.js": "/tech/react.svg",
  "Node.js": "/tech/node.svg",
  TypeScript: "/tech/typescript.svg",
  Redux: "/tech/redux.svg",
  Tailwind: "/tech/tailwind.svg",
};

const CARD_BG = "oklch(0.12 0.03 145)";
const GRADIENT_BORDER = `linear-gradient(${CARD_BG}, ${CARD_BG}) padding-box, linear-gradient(135deg, oklch(0.62 0.22 145) 0%, #ffffff 100%) border-box`;

const projects = [
  {
    title: "Abrisham",
    description:
      "A stylish e-commerce platform offering a curated collection of clothing, footwear, bags, accessories, and home décor — delivering a seamless shopping experience for a premium lifestyle.",
    image: "/abrisham.png",
    tags: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
    demo: "#",
  },
  {
    title: "Positron Pay",
    description:
      "Positron Pay offers e-wallets, credit, and installment payment solutions to simplify finance for users.",
    image: "/positron.png",
    tags: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
    demo: "https://positronpay.com",
  },
  {
    title: "Prima Luxury",
    description:
      "A premium luxury real estate website connecting buyers with exclusive high-end properties and world-class listings across Dubai.",
    image: "/primaluxury.png",
    tags: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
    demo: "https://primaluxury.com",
  },
  {
    title: "Prima Luxury — Off Plan",
    description:
      "A real estate platform showcasing off-plan properties, providing detailed specifications, floor plans, and pricing for each development.",
    image: "/prima.png",
    tags: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
    demo: "https://offplan.primaluxury.com/",
  },
  {
    title: "Jabalrayan",
    description:
      "A company showcase website introducing technology and food products, presenting them clearly for users.",
    image: "/jabal.png",
    tags: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
    demo: "https://jabalrayan.com/",
  },
  {
    title: "Hanus",
    description:
      "An art gallery and showcase platform presenting handcrafted and creative works to a wide online audience.",
    image: "/hanus.png",
    tags: ["Next.js", "Node.js", "React.js", "TypeScript", "Tailwind"],
    demo: "https://hanusart.ir",
  },
];

function TagBadge({ tag }: { tag: string }) {
  const icon = tagIcons[tag];
  return (
    <span
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs text-foreground/80"
      style={{
        background: "oklch(0.18 0.03 145)",
        border: "1px solid oklch(0.25 0.04 145)",
      }}
    >
      {icon ? (
        <Image
          src={icon}
          alt={tag}
          width={14}
          height={14}
          className="shrink-0"
        />
      ) : (
        <span
          className="w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-bold text-white shrink-0"
          style={{ background: "oklch(0.30 0.06 145)" }}
        >
          {tag[0]}
        </span>
      )}
      {tag}
    </span>
  );
}

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="px-4"
      style={{ background: "oklch(0.07 0.025 145)" }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div
          className="w-full h-px"
          style={{ background: "oklch(0.62 0.22 145)" }}
        />
      </div>
      <div className="max-w-6xl mx-auto py-24">
        <div className="flex justify-center mb-12">
          <h2
            className="text-sm font-bold tracking-widest text-foreground px-8 py-3 rounded-2xl"
            style={{
              background: "oklch(0.13 0.03 145)",
              boxShadow:
                "0 0 0 1px oklch(0.35 0.08 145), 0 0 18px oklch(0.62 0.22 145 / 0.15)",
            }}
          >
            PROJECTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl flex flex-col transition-all duration-300"
                style={{
                  background: isHovered ? GRADIENT_BORDER : CARD_BG,
                  border: isHovered
                    ? "1.5px solid transparent"
                    : "1.5px solid oklch(0.22 0.04 145)",
                  borderRadius: 16,
                  boxShadow: isHovered
                    ? "0 0 28px oklch(0.62 0.22 145 / 0.18)"
                    : "none",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="mx-3 mt-3 relative h-52 overflow-hidden rounded-xl bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>

                  <div className="mt-auto pt-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                      style={
                        isHovered
                          ? {
                              background: "oklch(0.62 0.22 145)",
                              color: "oklch(0.09 0.025 145)",
                              border: "none",
                            }
                          : {
                              background: "transparent",
                              color: "oklch(0.97 0.005 145)",
                              border: "1px solid oklch(0.30 0.04 145)",
                            }
                      }
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-8 py-3 rounded-xl text-sm font-semibold text-foreground transition-all hover:border-primary"
            style={{
              border: "1px solid oklch(0.30 0.04 145)",
              background: "transparent",
            }}
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}
