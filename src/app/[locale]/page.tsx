import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-col">
      {/* 1. HERO SECTION (tło: domyślne jasne bg-background) */}
      <section className="min-h-[85vh] max-w-6xl mx-auto w-full px-6 flex flex-col justify-center">
        <div className="space-y-6">
          <h1 className="tracking-tight max-w-4xl text-neutral-950">
            Crafting digital experiences & engineering modern web applications.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            Minimalistyczny styl, duża typografia i wysoka dbałość o detal inżynierski.
          </p>
        </div>

        <div className="mt-20 py-16 flex items-center justify-center">
          <span className="text-sm font-mono uppercase tracking-widest text-text/40">
            Work in progress
          </span>
        </div>
      </section>

      {/* 2. DOŚWIADCZENIE (#experience) (tło: subtelna szarość neutral-100 dla rotacji tła) */}
      <section
        id="experience"
        className="min-h-[75vh] w-full bg-neutral-100 py-24 flex flex-col justify-between"
      >
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col justify-between h-full flex-1">
          <h2>Doświadczenie</h2>

          <div className="flex-1 flex items-center justify-center py-20">
            <span className="text-sm font-mono uppercase tracking-widest text-text/40">
              Work in progress
            </span>
          </div>
        </div>
      </section>

      {/* 3. PROJEKTY (#projects) (tło: powrót do czystego bg-background) */}
      <section
        id="projects"
        className="min-h-[75vh] w-full bg-background py-24 flex flex-col justify-between"
      >
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col justify-between h-full flex-1">
          <h2>Projekty</h2>

          <div className="flex-1 flex items-center justify-center py-20">
            <span className="text-sm font-mono uppercase tracking-widest text-text/40">
              Work in progress
            </span>
          </div>
        </div>
      </section>

      {/* 4. O MNIE (#about) (tło: subtelny neutral-100 dla odróżnienia od sekcji projektów) */}
      <section
        id="about"
        className="min-h-[75vh] w-full bg-neutral-100 py-24 flex flex-col justify-between"
      >
        <div className="max-w-6xl mx-auto w-full px-6 flex flex-col justify-between h-full flex-1">
          <h2>O mnie</h2>

          <div className="flex-1 flex items-center justify-center py-20">
            <span className="text-sm font-mono uppercase tracking-widest text-text/40">
              Work in progress
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER (ciemne tło mocno odcięte od reszty strony zgodnie z regułą) */}
      <footer className="w-full bg-text text-background py-12">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs font-mono opacity-80">
          <span>&copy; {new Date().getFullYear()} lukas</span>
          <span>Next.js Tailwind i18n</span>
        </div>
      </footer>

    </main>
  );
}