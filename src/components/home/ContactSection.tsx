"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "./ContactForm";

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="w-full bg-neutral-100 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <ScrollReveal variant="fade-up" duration={400}>
          <h2>{t("title")}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-4xl">
          {/* Dane kontaktowe po lewej */}
          <div className="md:col-span-5">
            <ScrollReveal variant="slide-left" duration={450}>
              <div className="space-y-6">
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                  {t("subtitle")}
                </p>

                <div className="space-y-4 pt-2">
                  <div>
                    <span className="block text-xs font-mono text-text/50">
                      {t("emailLabel")}
                    </span>
                    <a
                      href="mailto:lukas.kostyk@gmail.com"
                      className="text-base font-medium text-accent hover:underline underline-offset-4 cursor-pointer transition-colors"
                    >
                      lukas.kostyk@gmail.com
                    </a>
                  </div>

                  <div>
                    <span className="block text-xs font-mono text-text/50">
                      {t("locationLabel")}
                    </span>
                    <span className="text-base font-normal text-text">
                      {t("locationValue")}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Formularz kontaktowy po prawej */}
          <div className="md:col-span-7">
            <ScrollReveal variant="zoom-in" delay={100} duration={500}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
