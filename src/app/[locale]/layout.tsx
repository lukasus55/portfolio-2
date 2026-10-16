import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const headerFont = Plus_Jakarta_Sans({
  variable: "--font-header",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});



export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isPl = locale === "pl";

  const title = "Łukasz Kostyk";
  const description = isPl
    ? "Łukasz Kostyk - Fullstack Developer z Gdyni. Tworzę funkcjonalne i intuicyjne aplikacje webowe end-to-end."
    : "Łukasz Kostyk - Fullstack Developer based in Gdynia, Poland. Building functional, intuitive web applications end-to-end.";

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lkostyk.com"),
    title: {
      default: title,
      template: "%s - Łukasz Kostyk",
    },
    description,
    keywords: [
      "Łukasz Kostyk",
      "Fullstack Developer",
      "Software Engineer",
      "Programista",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Portfolio",
      "Gdynia",
    ],
    authors: [{ name: "Łukasz Kostyk" }],
    creator: "Łukasz Kostyk",
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: isPl ? "pl_PL" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      languages: {
        pl: "/pl",
        en: "/en",
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${plusJakarta.variable} ${headerFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text selection:bg-neutral-900 selection:text-neutral-50">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}