"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ContactSection() {
  const t = useTranslations("Contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          {/* Dane kontaktowe po lewej - wejście slide-left */}
          <div className="md:col-span-5">
            <ScrollReveal variant="slide-left" duration={450}>
              <div className="space-y-6">
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                  {t("subtitle")}
                </p>

                <div className="space-y-4 pt-2">
                  <div>
                    <span className="block text-xs font-mono uppercase text-text/50">
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
                    <span className="block text-xs font-mono uppercase text-text/50">
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

          {/* Formularz kontaktowy po prawej - wejście zoom-in */}
          <div className="md:col-span-7">
            <ScrollReveal variant="zoom-in" delay={100} duration={500}>
              {submitted ? (
                <div className="p-8 bg-background rounded-sm border border-text/10 space-y-2">
                  <h3 className="text-xl font-medium font-header text-text">
                    Dziękuję za wiadomość!
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Odpowiem na Twój e-mail najszybciej jak to możliwe.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-text/80"
                    >
                      {t("form.nameLabel")}
                    </label>
                    <Input
                      id="contact-name"
                      required
                      placeholder={t("form.namePlaceholder")}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-text/80"
                    >
                      {t("form.emailLabel")}
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      placeholder={t("form.emailPlaceholder")}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-text/80"
                    >
                      {t("form.messageLabel")}
                    </label>
                    <Textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder={t("form.messagePlaceholder")}
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="accent"
                      size="md"
                      className="w-full sm:w-auto font-medium"
                    >
                      {t("form.submitButton")}
                    </Button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

