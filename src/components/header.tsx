"use client";

import { useState, useEffect, useRef } from "react";
import { Home, Layers, Code2, Trophy } from "lucide-react";

const navItems = [
  { id: "hero", label: "HOME", icon: Home },
  { id: "projects", label: "PROJECTS", icon: Layers },
  { id: "tools", label: "Tools", icon: Code2 },
  { id: "experience", label: "Experience", icon: Trophy },
];

const BOX_BG = "oklch(0.14 0.035 145)";
const INACTIVE_ICON = "oklch(0.48 0.03 145)";
const INACTIVE_LABEL = "oklch(0.50 0.03 145)";
const GRADIENT_BORDER =
  "linear-gradient(135deg, oklch(0.62 0.22 145) 0%, #ffffff 100%)";

export function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const isProgrammaticScroll = useRef(false);
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const getActiveFromScroll = () => {
    const checkPoint = window.scrollY + window.innerHeight / 3;
    let active = navItems[0].id;
    for (const { id } of navItems) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= checkPoint) active = id;
    }
    return active;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) {
        clearTimeout(scrollEndTimer.current);
        scrollEndTimer.current = setTimeout(() => {
          isProgrammaticScroll.current = false;
          setActiveSection(getActiveFromScroll());
        }, 150);
        return;
      }
      setActiveSection(getActiveFromScroll());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollEndTimer.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    isProgrammaticScroll.current = true;
    clearTimeout(scrollEndTimer.current);
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-2">
      <div
        className="flex items-end gap-2 sm:gap-4 pointer-events-auto px-4 sm:px-6 pt-3 pb-2 rounded-2xl"
        style={{
          background: "oklch(0.12 0.03 145 / 0.85)",
          border: "1px solid oklch(0.25 0.05 145 / 0.5)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer"
            >
              <div
                style={{
                  padding: "2px",
                  borderRadius: "14px",
                  background: isActive ? GRADIENT_BORDER : "transparent",
                }}
              >
                <div
                  className="w-[52px] h-[52px] sm:w-[78px] sm:h-[78px] flex items-center justify-center"
                  style={{
                    background: BOX_BG,
                    borderRadius: "12px",
                  }}
                >
                  <Icon
                    className="h-5 w-5 sm:h-8 sm:w-8"
                    style={{ color: isActive ? "#ffffff" : INACTIVE_ICON }}
                  />
                </div>
              </div>

              <span
                className="text-[9px] sm:text-[11px] tracking-wide"
                style={{
                  color: isActive ? "#ffffff" : INACTIVE_LABEL,
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
