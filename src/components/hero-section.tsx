"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground mb-4 animate-fade-in-up">
            {t("hero.greeting")}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up text-balance">
            Fatemeh Shojaei
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-8 animate-fade-in-up text-balance">
            {t("hero.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up leading-relaxed text-pretty">
            {t("hero.description")}
          </p>

          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up">
            <Button onClick={scrollToContact} size="lg">
              {t("nav.contact")}
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">{t("nav.projects")}</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in-up">
            <a
              href="https://github.com/fatemeShj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fatemeh-shojaei-3929aa18a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href="mailto:fatemeeshojaeii@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
