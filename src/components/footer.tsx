"use client";

import { Mail } from "lucide-react";
import {
  IconGitHub,
  IconLinkedin,
  IconTelegram,
  IconInstagram,
} from "@/components/social-icons";

export function Footer() {
  return (
    <footer
      className="py-8 px-4"
      style={{ borderTop: "1px solid oklch(0.22 0.04 145)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground" suppressHydrationWarning>
          © {new Date().getFullYear()} Fatemeh Shojaei. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:fatemeeshojaeii@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
          <a
            href="https://github.com/fatemeShj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <IconGitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/fatemeh-shojaei-3929aa18a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-400 transition-colors"
          >
            <IconLinkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
