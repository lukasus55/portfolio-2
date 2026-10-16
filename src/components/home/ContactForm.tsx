"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { sendContactMessage } from "@/actions/contact";

export function ContactForm() {
  const t = useTranslations("Contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const result = await sendContactMessage({ name, email, message, honeypot });
    if (result.success) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setHoneypot("");
    } else {
      setStatus("error");
      setErrorMessage(result.error || t("form.errorMessage"));
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-background rounded-sm border border-text/10 space-y-4">
        <h3 className="text-xl font-medium font-header text-text">{t("form.successTitle")}</h3>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{t("form.successMessage")}</p>
        <div className="pt-2">
          <Button type="button" variant="secondary" size="sm" onClick={() => setStatus("idle")}>
            {t("form.sendAnother")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="website_url_check"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status === "error" && (
        <div className="p-4 bg-red-50/80 border border-red-200 text-red-900 rounded-sm text-sm space-y-1">
          <p className="font-medium">{t("form.errorTitle")}</p>
          <p className="text-xs text-red-700">{errorMessage || t("form.errorMessage")}</p>
        </div>
      )}

      <div className="space-y-1.5">
        <label htmlFor="contact-name" className="block text-xs font-medium text-text/80">
          {t("form.nameLabel")}
        </label>
        <Input
          id="contact-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("form.namePlaceholder")}
          disabled={status === "submitting"}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-email" className="block text-xs font-medium text-text/80">
          {t("form.emailLabel")}
        </label>
        <Input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("form.emailPlaceholder")}
          disabled={status === "submitting"}
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs font-medium text-text/80">
          {t("form.messageLabel")}
        </label>
        <Textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("form.messagePlaceholder")}
          disabled={status === "submitting"}
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="accent"
          size="md"
          className="w-full sm:w-auto font-medium"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? t("form.submittingButton") : t("form.submitButton")}
        </Button>
      </div>
    </form>
  );
}
