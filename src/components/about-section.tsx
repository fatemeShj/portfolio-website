"use client";

import Image from "next/image";

type Skill = {
  name: string;
  icon?: string;
  iconSize?: number;
  letter?: string;
  letterBg?: string;
};

const frontend: Skill[] = [
  { name: "JavaScript",      icon: "/tech/javascript.svg" },
  { name: "TypeScript",      icon: "/tech/typescript.svg" },
  { name: "React",           icon: "/tech/react.svg" },
  { name: "Next.Js",         icon: "/tech/next.svg" },
  { name: "Redux",           icon: "/tech/redux.svg" },
  { name: "Tailwind CSS",    icon: "/tech/tailwind.svg" },
  { name: "ShadCN UI",       icon: "/tech/shadcn.svg" },
  { name: "Material UI",     icon: "/tech/material.svg" },
  { name: "Vite",            icon: "/tech/vite.svg" },
  { name: "React Router",    letter: "RR", letterBg: "#CA4245" },
  { name: "State Management", letter: "SM", letterBg: "#764abc" },
  { name: "Jest",            letter: "J",  letterBg: "#C21325" },
];

const backend: Skill[] = [
  { name: "Node.Js",         icon: "/tech/node.svg" },
  { name: "REST APIs",       letter: "RE", letterBg: "#00897B" },
  { name: "Axios",           letter: "Ax", letterBg: "#5A29E4" },
  { name: "Strapi",          icon: "/tech/strapi.svg" },
  { name: "System Design",   letter: "SD", letterBg: "#37474F" },
];

const database: Skill[] = [
  { name: "PostgreSQL",      icon: "/tech/postgresql.svg" },
  { name: "MongoDB",         icon: "/tech/mongo.svg", iconSize: 16 },
];

const tools: Skill[] = [
  { name: "Git",             icon: "/tech/git.svg" },
];

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white text-[11px] font-bold"
        style={{
          background: skill.icon ? "oklch(0.18 0.03 145)" : (skill.letterBg ?? "oklch(0.25 0.04 145)"),
          border: skill.icon ? "1px solid oklch(0.25 0.04 145)" : "none",
        }}
      >
        {skill.icon
          ? <Image src={skill.icon} alt={skill.name} width={skill.iconSize ?? 22} height={skill.iconSize ?? 22} />
          : skill.letter}
      </span>
      <span className="text-sm font-medium text-foreground/80 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

function SkillGroup({ label, skills }: { label: string; skills: Skill[] }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 py-10 border-b border-white/5 last:border-b-0">
      <div className="lg:w-56 shrink-0">
        <h3
          className="font-black italic leading-none tracking-tight text-foreground/90"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          {label}
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-5 flex-1">
        {skills.map((s) => (
          <SkillItem key={s.name} skill={s} />
        ))}
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="tools"
      className="px-4"
      style={{
        backgroundImage: "url('/Pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl mx-auto px-8">
        <div className="w-full h-px" style={{ background: "oklch(0.62 0.22 145)" }} />
      </div>
      <div className="max-w-5xl w-full mx-auto py-24">

        {/* MY STACK header */}
        <div className="flex justify-center mb-12">
          <h2
            className="text-sm font-bold tracking-widest text-foreground px-8 py-3 rounded-2xl"
            style={{
              background: "oklch(0.13 0.03 145)",
              boxShadow: "0 0 0 1px oklch(0.35 0.08 145), 0 0 18px oklch(0.62 0.22 145 / 0.15)",
            }}
          >
            SKILLS &amp; TOOLS
          </h2>
        </div>

        <SkillGroup label="FRONTEND" skills={frontend} />
        <SkillGroup label="BACKEND"  skills={backend}  />
        <SkillGroup label="DATABASE" skills={database} />
        <SkillGroup label="TOOLS"    skills={tools}    />

      </div>
    </section>
  );
}
