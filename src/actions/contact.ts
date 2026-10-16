"use server";

import { Resend } from "resend";

export interface ContactFormState {
  success: boolean;
  error?: string;
  mocked?: boolean;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  payload: ContactPayload
): Promise<ContactFormState> {
  const { name, email, message, honeypot } = payload;

  // 1. Ochrona honeypot (jeśli ukryte pole zostało wypełnione przez bota, ignorujemy cicho)
  if (honeypot && honeypot.trim().length > 0) {
    return { success: true };
  }

  // 2. Walidacja danych wejściowych
  const trimmedName = name?.trim() || "";
  const trimmedEmail = email?.trim() || "";
  const trimmedMessage = message?.trim() || "";

  if (trimmedName.length < 2) {
    return { success: false, error: "Imię musi zawierać minimum 2 znaki." };
  }

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return { success: false, error: "Podaj prawidłowy adres e-mail." };
  }

  if (trimmedMessage.length < 10) {
    return {
      success: false,
      error: "Wiadomość musi zawierać minimum 10 znaków.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  // 3. Tryb deweloperski (jeśli klucz nie jest jeszcze skonfigurowany w .env.local)
  if (!apiKey) {
    console.info(
      "[RESEND DEV MOCK] Formularz kontaktowy przesłany w trybie lokalnym bez klucza API:",
      { name: trimmedName, email: trimmedEmail, message: trimmedMessage }
    );
    return { success: true, mocked: true };
  }

  // 4. Prawdziwa wysyłka przez Resend
  try {
    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "lukas.kostyk@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: trimmedEmail,
      subject: `[Portfolio] Wiadomość od ${trimmedName}`,
      text: `Otrzymałeś nową wiadomość z formularza kontaktowego w portfolio:\n\nOd: ${trimmedName} (${trimmedEmail})\n\nWiadomość:\n${trimmedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111827; background-color: #ffffff;">
          <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 16px; border-bottom: 2px solid #ff6940; padding-bottom: 8px;">
            Nowa wiadomość z portfolio
          </h2>
          <p style="margin: 8px 0; font-size: 15px;">
            <strong>Nadawca:</strong> ${escapeHtml(trimmedName)}
          </p>
          <p style="margin: 8px 0; font-size: 15px;">
            <strong>E-mail:</strong> <a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #ff6940;">${escapeHtml(trimmedEmail)}</a>
          </p>
          <div style="margin-top: 20px; padding: 16px; background-color: #f9fafb; border-radius: 4px; border-left: 3px solid #ff6940;">
            <p style="margin: 0; font-size: 15px; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(trimmedMessage)}</p>
          </div>
          <p style="margin-top: 24px; font-size: 13px; color: #6b7280;">
            Możesz odpowiedzieć bezpośrednio na tego maila - odpowiedź trafi na adres nadawcy (${escapeHtml(trimmedEmail)}).
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[Resend Error]:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("[Server Action Error]:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Wystąpił nieoczekiwany błąd.";
    return { success: false, error: errorMessage };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
