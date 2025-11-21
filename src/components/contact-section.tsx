"use client";

import type React from "react";

import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations();

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            {t("contact.title")}
          </h2>

          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-pretty">
            {t("contact.description")}
          </p>

          <div className="flex flex-wrap gap-1">
            <Card className="p-3 flex-1 min-w-[250px]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:fatemeeshojaeii@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors whitespace-nowrap"
                  >
                    fatemeeshojaeii@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-3 flex-1 min-w-[250px]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+989381166182"
                    className="text-muted-foreground hover:text-accent transition-colors whitespace-nowrap"
                  >
                    +989381166182
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-3 flex-1 min-w-[250px]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground whitespace-nowrap">
                    Iran, Tehran
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
