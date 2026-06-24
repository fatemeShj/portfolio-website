"use client";

import { ProfileCard } from "@/components/profile-card";

const stats = [
  { value: "+8", label: "YEARS OF\nEXPERIENCE" },
  { value: "+50", label: "PROJECTS\nCOMPLETED" },
  { value: "+10", label: "WORLDWIDE\nCLIENTS" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 px-4"
      style={{
        backgroundImage: "url('/Pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="shrink-0">
          <ProfileCard />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h1
              className="font-black leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              FRONTEND
            </h1>
            <h1
              className="font-black leading-none tracking-tight text-primary"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              DEVELOPER
            </h1>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-xl">
            focus on clean architecture, performance optimization, and creating
            smooth, intuitive user experiences. During the first four years of
            my career, I worked with .NET and SQL, which gave me strong backend
            understanding. This background helps me approach frontend
            development with better structure, efficiency, and clearer
            integration with backend systems.
          </p>
        </div>
      </div>
    </section>
  );
}
