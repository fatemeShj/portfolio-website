"use client";

type FreelanceItem = {
  company: string;
  period: string;
  description: string;
  tags: string[];
};

type RegularExp = {
  isGroup?: false;
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  tags: string[];
};

type GroupExp = {
  isGroup: true;
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  tags: string[];
  freelanceItems: FreelanceItem[];
};

type Experience = RegularExp | GroupExp;

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Positron",
    type: "Full-time",
    period: "May 2025 - Present",
    location: "Tehran, Iran · On-site",
    bullets: [
      "Building a fast, responsive lending & installment platform with React, Next.js, and TypeScript.",
      "Architected and implemented a microfrontend architecture, enabling independent deployment of platform modules and improving team scalability.",
      "Integrated front-end with backend APIs using React Query, implementing SSR for key pages.",
      "Optimized loan application flows, improving user experience and completion rates.",
      "Contributed to the design system and code reviews for scalable front-end architecture.",
    ],
    tags: ["TypeScript", "Next.js", "React Query", "Redux", "Tailwind", "Microfrontend"],
  },
  {
    isGroup: true,
    title: "Frontend Developer",
    company: "Freelance",
    type: "Freelance",
    period: "Aug 2024 - Jun 2026",
    location: "Remote",
    tags: [],
    freelanceItems: [
      {
        company: "Abrisham",
        period: "Apr 2026 - Jun 2026 · 3 mos",
        description:
          "Developed a full-featured e-commerce platform for clothing, footwear, bags, accessories, and home décor. Built with Next.js, featuring product catalog, filtering, cart, and a seamless checkout experience.",
        tags: ["Next.js", "TypeScript", "Tailwind", "REST API"],
      },
      {
        company: "Manizan Dairy Co.",
        period: "Mar 2025 - May 2025 · 3 mos",
        description:
          "Built a modern, SEO-friendly website with Next.js SSR. Integrated REST APIs and developed a Strapi admin panel for product management.",
        tags: ["Next.js", "TypeScript", "Strapi", "REST API"],
      },
      {
        company: "Prima Luxury",
        period: "Aug 2024 - Feb 2025 · 7 mos",
        description:
          "Developed SSR pages and a CRM system for Dubai real estate. Managed state with Redux and integrated dynamic property listing APIs.",
        tags: ["Next.js", "Redux", "Node.js", "REST API"],
      },
      {
        company: "Vofour Psychology Group",
        period: "Oct 2024 - Nov 2024 · 2 mos",
        description:
          "Built a PWA for emotion tracking using React, TypeScript, and Redux. Optimized with Vite and implemented offline capabilities.",
        tags: ["React.js", "TypeScript", "Redux", "Vite", "PWA"],
      },
    ],
  },
  {
    title: "Software Developer",
    company: "RIWI",
    type: "Full-time",
    period: "Dec 2021 - Oct 2023",
    location: "Canada · Remote",
    bullets: [
      "Built REST APIs for internal systems, streamlining data flow and system interoperability.",
      "Integrated external partner APIs, enhancing user workflows and collaboration.",
      "Developed new features contributing to higher user conversion and retention.",
    ],
    tags: ["JavaScript", "Node.js", "React.js", "REST APIs"],
  },
  {
    title: "SQL Project Assessment Specialist",
    company: "TIC",
    type: "Full-time",
    period: "Apr 2021 - Oct 2021",
    location: "Tehran, Iran",
    bullets: [
      "Assessed SQL-based projects for the national telecommunications infrastructure.",
      "Managed database reporting and performance analysis for large-scale systems.",
    ],
    tags: ["MySQL", "SQL", "Database Design"],
  },
  {
    title: "Back End Developer",
    company: "MCP (Mehr Cam Pars)",
    type: "Full-time",
    period: "Apr 2017 - Apr 2021",
    location: "Tehran, Iran · On-site",
    bullets: [
      "Built scalable backend systems and relational databases for automotive industry solutions.",
      "Designed and optimized MySQL schemas, stored procedures, and triggers.",
      "Developed robust backend services and APIs using C# and ASP.NET.",
    ],
    tags: ["C#", "ASP.NET", "MySQL", "SQL Server", "System Design"],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span
      className="text-[10px] px-2 py-0.5 rounded-full"
      style={{
        background: "oklch(0.18 0.03 145)",
        border: "1px solid oklch(0.28 0.05 145)",
        color: "oklch(0.70 0.08 145)",
      }}
    >
      {label}
    </span>
  );
}

function CardContent({ exp, align }: { exp: Experience; align: "left" | "right" }) {
  const isRight = align === "right";
  return (
    <div className={`${isRight ? "text-left" : "text-left"}`}>
      {/* Role title */}
      <h3 className="text-xl font-bold text-foreground leading-tight mb-1">
        {exp.title}
      </h3>

      {/* @Company | Period */}
      <p
        className="text-sm font-bold uppercase tracking-wide mb-4"
        style={{ color: "oklch(0.62 0.22 145)" }}
      >
        @{exp.company}&nbsp;&nbsp;|&nbsp;&nbsp;{exp.period}
      </p>

      {/* Bullets or freelance sub-items */}
      {exp.isGroup ? (
        <div className="flex flex-col gap-5">
          {exp.freelanceItems.map((item, i) => (
            <div key={i}>
              <p className="text-sm font-semibold text-foreground mb-0.5">
                {item.company}
              </p>
              <p
                className="text-xs font-medium mb-2"
                style={{ color: "oklch(0.62 0.22 145 / 0.7)" }}
              >
                {item.period}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {item.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              {i < exp.freelanceItems.length - 1 && (
                <div
                  className="w-full h-px mt-4"
                  style={{ background: "oklch(0.22 0.04 145)" }}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <ul className="flex flex-col gap-2 mb-4">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="shrink-0 mt-1" style={{ color: "oklch(0.62 0.22 145)" }}>•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
      {exp.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {exp.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-4"
      style={{ background: "oklch(0.07 0.025 145)" }}
    >
      <div className="max-w-5xl mx-auto px-8">
        <div className="w-full h-px" style={{ background: "oklch(0.62 0.22 145)" }} />
      </div>
      <div className="max-w-5xl w-full mx-auto py-24">

        {/* Section heading */}
        <div className="mb-16">
          <h2
            className="font-black leading-none tracking-tight text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            EXPERIENCE
          </h2>
          <h2
            className="font-semibold leading-snug text-primary"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
          >
            Where I&apos;ve Worked
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div
            className="hidden lg:block absolute top-0 bottom-0 w-px left-1/2 -translate-x-1/2"
            style={{ background: "oklch(0.62 0.22 145 / 0.35)" }}
          />
          {/* Vertical left line — mobile */}
          <div
            className="lg:hidden absolute top-0 bottom-0 w-px left-3"
            style={{ background: "oklch(0.62 0.22 145 / 0.35)" }}
          />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* ── DESKTOP: alternating left / right ── */}
                <div className="hidden lg:grid grid-cols-2 gap-0">
                  {/* Left half */}
                  <div className="pr-14">
                    {isLeft && <CardContent exp={exp} align="left" />}
                  </div>

                  {/* Right half */}
                  <div className="pl-14">
                    {!isLeft && <CardContent exp={exp} align="right" />}
                  </div>
                </div>

                {/* ── MOBILE: all items to the right of left line ── */}
                <div className="lg:hidden pl-10">
                  <CardContent exp={exp} align="right" />
                </div>

                {/* Desktop dot — centered on the vertical line */}
                <div
                  className="hidden lg:block absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
                  style={{
                    borderColor: "oklch(0.62 0.22 145)",
                    background: "oklch(0.09 0.03 145)",
                  }}
                />
                {/* Mobile dot — on the left line */}
                <div
                  className="lg:hidden absolute top-1 w-4 h-4 rounded-full border-2 z-10 -translate-x-1/2"
                  style={{
                    left: "0.75rem",
                    borderColor: "oklch(0.62 0.22 145)",
                    background: "oklch(0.09 0.03 145)",
                  }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
