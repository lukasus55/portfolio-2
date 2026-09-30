"use client";

export default function BalticWaves() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 right-0 w-full h-[45%] sm:h-[55%] md:h-[65%] lg:h-[70%] pointer-events-none select-none overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 450"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        shapeRendering="geometricPrecision"
        className="w-full h-full"
      >
        {/* ===================== LINIA WYBRZEŻA (Coastline) ===================== */}
        {/* Jedna, czysta, naturalnie skręcająca linia brzegu morskiego w Gdyni */}
        <path
          d="M -40 350 C 450 310, 950 240, 1480 210"
          stroke="#ff6940"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Delikatna, cicha linia głębi wodnej w oddali */}
        <path
          d="M -40 280 C 450 240, 950 175, 1480 150"
          stroke="#ff6940"
          strokeOpacity="0.12"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* ===================== STATKI NA TORZE WODNYM ===================== */}
        {/* Rejs trwa 24s w cyklu 48s; statki wypływają co 16s z płynnym nakładaniem pod koniec trasy */}

        {/* 1. Jacht żaglowy dwumasztowy (ze szkicu użytkownika) - startuje w x~600 */}
        <g stroke="#ff6940" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <animateMotion
            path="M -100 315 C 450 275, 950 205, 1540 175"
            dur="48s"
            begin="-10s"
            calcMode="linear"
            keyPoints="0; 1; 1"
            keyTimes="0; 0.5; 1"
            repeatCount="indefinite"
            rotate="auto"
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0; 0"
            keyTimes="0; 0.04; 0.46; 0.5; 1"
            dur="48s"
            begin="-10s"
            repeatCount="indefinite"
          />
          {/* Kadłub */}
          <path d="M -20 -3 C -14 6, 14 6, 22 -1 L 20 -5 L -18 -5 Z" fill="#ff6940" fillOpacity="0.1" strokeOpacity="0.75" />
          <line x1="-18" y1="-5" x2="20" y2="-5" strokeOpacity="0.7" />
          {/* Maszt główny (tylny) */}
          <line x1="-4" y1="-5" x2="-2" y2="-34" strokeOpacity="0.8" />
          {/* Maszt przedni */}
          <line x1="8" y1="-5" x2="10" y2="-28" strokeOpacity="0.8" />
          {/* Żagle */}
          <polygon points="-3,-32 -16,-7 -3,-7" fill="#ff6940" fillOpacity="0.15" strokeOpacity="0.7" />
          <polygon points="9,-26 -1,-7 9,-7" fill="#ff6940" fillOpacity="0.15" strokeOpacity="0.7" />
          <polygon points="10,-24 19,-7 10,-7" fill="#ff6940" fillOpacity="0.15" strokeOpacity="0.7" />
        </g>

        {/* 2. Kuter rybacki / holownik z portu Gdynia - wypływa w 6s (nachodzi gdy jacht dopływa do końca) */}
        <g stroke="#ff6940" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <animateMotion
            path="M -100 315 C 450 275, 950 205, 1540 175"
            dur="48s"
            begin="6s"
            calcMode="linear"
            keyPoints="0; 1; 1"
            keyTimes="0; 0.5; 1"
            repeatCount="indefinite"
            rotate="auto"
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0; 0"
            keyTimes="0; 0.04; 0.46; 0.5; 1"
            dur="48s"
            begin="6s"
            repeatCount="indefinite"
          />
          {/* Kadłub */}
          <path d="M -18 -4 L -18 -1 C -14 6, 12 6, 18 1 L 22 -3 L 20 -6 L -18 -6 Z" fill="#ff6940" fillOpacity="0.1" strokeOpacity="0.75" />
          <line x1="-18" y1="-6" x2="20" y2="-6" strokeOpacity="0.7" />
          {/* Sterówka */}
          <path d="M -13 -6 L -13 -18 L 0 -18 L 0 -6" fill="#ff6940" fillOpacity="0.15" strokeOpacity="0.75" />
          <line x1="-10" y1="-13" x2="-2" y2="-13" strokeOpacity="0.65" />
          {/* Komin */}
          <path d="M -4 -18 L -4 -23 L -1 -23 L -1 -18" strokeOpacity="0.75" />
          {/* Maszt dziobowy z olinowaniem */}
          <line x1="9" y1="-6" x2="9" y2="-21" strokeOpacity="0.75" />
          <line x1="9" y1="-19" x2="20" y2="-4" strokeOpacity="0.55" />
        </g>

        {/* 3. Drobnicowiec / statek towarowy na redzie portu Gdynia - wypływa w 22s */}
        <g stroke="#ff6940" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <animateMotion
            path="M -100 315 C 450 275, 950 205, 1540 175"
            dur="48s"
            begin="22s"
            calcMode="linear"
            keyPoints="0; 1; 1"
            keyTimes="0; 0.5; 1"
            repeatCount="indefinite"
            rotate="auto"
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0; 0"
            keyTimes="0; 0.04; 0.46; 0.5; 1"
            dur="48s"
            begin="22s"
            repeatCount="indefinite"
          />
          {/* Kadłub długi */}
          <path d="M -26 -4 L -26 -1 C -20 5, 20 5, 26 1 L 30 -3 L 28 -6 L -26 -6 Z" fill="#ff6940" fillOpacity="0.1" strokeOpacity="0.75" />
          <line x1="-26" y1="-6" x2="28" y2="-6" strokeOpacity="0.7" />
          {/* Nadbudówka na rufie */}
          <path d="M -24 -6 L -24 -18 L -12 -18 L -12 -6" fill="#ff6940" fillOpacity="0.15" strokeOpacity="0.75" />
          <path d="M -21 -18 L -21 -22 L -18 -22 L -18 -18" strokeOpacity="0.75" />
          {/* Ładunek kontenerowy */}
          <rect x="-9" y="-11" width="8" height="5" fill="#ff6940" fillOpacity="0.1" strokeOpacity="0.65" />
          <rect x="2" y="-11" width="8" height="5" fill="#ff6940" fillOpacity="0.1" strokeOpacity="0.65" />
          <rect x="13" y="-11" width="8" height="5" fill="#ff6940" fillOpacity="0.1" strokeOpacity="0.65" />
          {/* Maszt dziobowy */}
          <line x1="24" y1="-6" x2="24" y2="-15" strokeOpacity="0.75" />
        </g>
      </svg>

      {/* Maska wygaszająca: od góry na mobile, od lewej na desktopie pod typografią Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 via-15% to-transparent sm:bg-gradient-to-r sm:from-background sm:via-background/85 sm:via-25% sm:to-transparent pointer-events-none" />
    </div>
  );
}
