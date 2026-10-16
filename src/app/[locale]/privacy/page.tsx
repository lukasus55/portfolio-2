import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });

  const title = `${t("title")} - Łukasz Kostyk`;
  const description = t("intro");

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      languages: {
        pl: "/pl/privacy",
        en: "/en/privacy",
      },
    },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Privacy" });

  const sectionKeys = [
    "controller",
    "hosting",
    "contact",
    "analytics",
    "rights",
  ] as const;

  return (
    <>
      <main className="w-full bg-background text-text py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-accent transition-colors duration-150 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("backHome")}</span>
            </Link>
          </div>

          <header className="space-y-4 pb-8 border-b border-text/10">
            <h1 className="font-header text-3xl sm:text-5xl font-medium tracking-tight text-text">
              {t("title")}
            </h1>
            <p className="text-xs font-mono text-neutral-400">
              {t("lastUpdated")}
            </p>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl pt-2">
              {t("intro")}
            </p>
          </header>

          <div className="space-y-12">
            {sectionKeys.map((key) => (
              <section key={key} className="space-y-3">
                <h2 className="font-header text-lg sm:text-xl font-medium text-text">
                  {t(`sections.${key}.title`)}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {t(`sections.${key}.content`)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
