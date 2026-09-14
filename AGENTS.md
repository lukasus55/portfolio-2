<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Design & Styling Rules

## 1. Minimalistyczny & "Unboxed" Design
- **Nigdy nie twórz zbędnych boxów / kart / obwódek**: Unikamy "zaboxowanego designu". 
  - Jeśli chcesz dodać ikonkę — wrzucasz samą ikonkę bezpośrednio, **bez** kółka, tła (`bg-secondary`, `bg-neutral-...`) czy borderów wokół niej.
  - Jeśli dodajesz sekcję lub blok — w zdecydowanej większości przypadków tekst kładziemy bezpośrednio na tło strony (`bg-background`).
- **Gdy box jest absolutnie konieczny**:
  - Tworzymy go wyłącznie w subtelnym **odcieniu szarości / neutralnym** (np. `neutral-100`, `neutral-900/5`), a **nigdy** jako kolorowy boks.
- **Styl ogólny**: Duża, wyrazista typografia i zdjęcia / grafiki, mało zbędnego tekstu.

## 2. Kolory (Tylko Customowe Zmienne i Zasada 60-30-10)
- **NIGDY nie używaj domyślnych kolorów Tailwind** (np. `blue-500`, `emerald-600`, `amber-400` itd.).
- Zawsze korzystaj wyłącznie ze zdefiniowanych zmiennych motywu:
  - `background` (`--color-background: #ffffff`): Czysta biel
  - `text` (`--color-text: #000000`): Czysta czerń
  - `primary` (`--color-primary: #f0cb24`): Brandowy żółty (Bright Amber)
  - `accent` (`--color-accent: #ff6940`): Akcentowy pomarańczowy / koralowy (Tomato)
  - `secondary` (`--color-secondary: #f5f5f5`): Subtelny neutralny podkład
- **Zasada Proporcji Kolorów 60 / 30 / 10**:
  - **60% — Kolory neutralne**: Baza interfejsu (biel `background`, czerń `text`, bardzo delikatne szarości `secondary` / `neutral-100`).
  - **30% — Kolor brandu (żółty `#f0cb24`)**: Drugi dominujący kolor witryny (aktywne elementy, kluczowe tła sekcji, wyraziste bloki brandowe).
  - **10% — Akcent (pomarańczowy `#ff6940`)**: Rzadki, punktowy kolor akcji/uwagi (kluczowe CTA, wyraziste detale, badge, mikro-wyróżnienia).


## 3. Typografia & Fonty (Tylko Customowe Zmienne)
- Fonty i hierarchia stylów są zdefiniowane ogólnymi, elastycznymi nazwami zmiennych (umożliwiającymi łatwą podmianę kroju bez zmian w kodzie komponentów):
  - `--font-header` (klasa `font-header`): nagłówki `h1` - `h5`
  - `--font-sans` / `--font-body`: treść podstawowa `body`, akapity, opisy
- Korzystaj wyłącznie z tych zmiennych i klas typograficznych.

## 4. Zasada Zdjęć i Assetów (Zero Ograniczeń)
- **Traktuj zdjęcia i assety tak, jakbyś miał do dyspozycji dowolne materiały graficzne**:
  - Projektuj layout ze zdjęciami, grafikami, miniaturami projektów, flagami, mockupami itd.
  - Nie bój się odwoływać do plików w `/public` (np. `/images/projects/project-1.webp`, `/icons/flags/pl.svg` itp.).
  - **Obowiązek informacyjny**: Na koniec odpowiedzi wskaż użytkownikowi dokładne ścieżki i nazwy plików w `/public/...`, które powinien wgrać, aby uzupełnić placeholder/grafikę.

## 5. Zakaz Typowych Błędów "AI Designu" (Anty-wzorce AI)
AI ma tendencję do generowania powtarzalnych, "generycznych" stron. **Bezwzględnie unikaj następujących nawyków**:
- **"Bento Grid / Card Fatigue"**: Nie dziel każdego ekranu na siatkę identycznych zaokrąglonych prostokątów z obwódkami. Prawdziwy design operuje przestrzenią, asymetrią i kontrastem skali, a nie pudełkami na wszystko.
- **"Glow / Gradient & Mesh Overdose"**: Zero losowych fioletowo-niebieskich mgiełek, rozmytych kul tła (`blur-3xl`), neonowych obramowań i sztucznych gradientów symulujących "futuryzm".
- **Zero Glassmorphismu**: Bezwzględny zakaz efektu szkła (`backdrop-blur` z półprzezroczystymi białymi tłami i cienkimi obwódkami). Powierzchnie mają być czyste, czytelne i surowe, bez udawania oszronionego szkła.
- **Brak Napisów Nad Tytułem (No Eyebrow / Overline Labels)**: Zakaz wklejania małych etykiet nad głównymi nagłówkami sekcji (np. `01 / Experience`, `OFERTA`, `PORTFOLIO`). Tytuł sekcji ma mówić sam za siebie.
- **"Corporate AI Filler & Fluff"**: Zakaz generycznego, bezdusznego lania wody ("Transforming digital landscapes through synergy", "Empowering next-gen solutions"). Pisz konkretnie, zwięźle, surowo lub z ludzkim charakterem.
- **"Feature-Grid with Little Badged Icons"**: Unikaj klasycznego schematu AI: 3 kolumny, w każdej ikonka w pastelowym kółeczku + wyświechtany tytuł + 2 linijki nic nie wnoszącego tekstu.
- **Brak emotek (No Emojis)**: W interfejsie nie używamy emotek Unicode (🚀, 💡, 🔥 itd.). Używaj czystych ikon wektorowych `lucide-react` dla ogólnych akcji, a dla specyficznych ilustracji lub detali twórz dedykowane inline SVG.
- **Zakaz Losowych Symboli Dekoracyjnych (No Random Symbols)**:
  - Nie zaśmiecaj interfejsu losowymi znaczkami typu `[ ... ]`, strzałkami `→` w każdym przycisku CTA, kropkami `•` / `&bull;`, tyldami `~` czy ukośnikami `/` wstawianymi "bo fajnie wyglądają".
  - Używaj symbolu wyłącznie wtedy, gdy niesie on jednoznaczne, konieczne znaczenie funkcjonalne (np. ikona zamknięcia `X` czy rzeczywista paginacja).
  - Prawdziwy, dojrzały design opiera się na **dobrze sformatowanym, czystym tekście, odpowiedniej hierarchii typograficznej i przestrzeni**, a nie na wciskaniu ozdobnych znaków specjalnych.
- **Brak hierarchii i monotonny rytm**: AI często robi wszystkie sekcje o równej wysokości z wycentrowanym nagłówkiem i podtytułem. Różnicuj kompozycję: szerokie zdjęcia full-bleed, dynamiczna skala typograficzna, lewostronne wyrównania i oddech.


## 6. Jakość Inżynierska, Dostępność i Spójność Wizualna
- **Accessibility & Czytelność (Priorytet)**: To profesjonalna strona — musi być piękna, ale przede wszystkim maksymalnie czytelna i użyteczna. Wszelkie efekty wizualne czy "bajery" są dopuszczalne wyłącznie wtedy, gdy w żaden sposób nie degradują czytelności tekstu i hierarchii treści (odpowiedni kontrast, czytelne rozmiary fontów, logiczne znaczniki semantyczne HTML).
- **Interaktywność & Stany Hover**:
  - Każdy klikalny/interaktywny element (`button`, `a`, kontrolki) **musi** posiadać `cursor-pointer` oraz wyraźną, płynną animację/reakcję na hover (`transition-... hover:...`).
  - Elementy statyczne/nieinteraktywne pod żadnym pozorem **nie mogą** posiadać stanów hover, aby nie mylić użytkownika.
- **Border Radius**:
  - Maksymalny dopuszczalny border-radius dla kontenerów, przycisków czy kafelków to `rounded-sm` (subtelne, techniczne zaokrąglenie).
  - Wyjątkiem są wyłącznie elementy zaprojektowane celowo jako idealne koła (`rounded-full` dla avatarów czy okrągłych przełączników/kropek).
- **Rytm i Tła Sekcji**:
  - Dwie kolejne sekcje pod rząd **nie mogą** mieć identycznego koloru tła.
  - Zmiany realizujemy subtelnie: przechodzimy między odcieniami bieli a bardzo delikatnymi szarościami (np. czysty `background`, a kolejna sekcja z subtelnym odcieniem złamanej bieli/jasnej szarości).
  - Ciemnego tła (`bg-text` / odcienie czerni) używamy wyłącznie dla elementów mocno odcinających się od reszty witryny (np. `footer`).
  - Użycie żółtego akcentu (`bg-primary` / `bg-accent`) jako tła całej sekcji: maksymalnie **1 raz** na całej długiej stronie, a na krótszych stronach **0 razy** (tylko punktowo).

## 7. Świadomy UX, Architektura Informacji i Flow Użytkownika
Projektując interfejs, traktuj UX na równi z inżynierią i estetyką:
- **Prymat Visual Hierarchy nad sztywnymi "patternami"**:
  - Sztywne schematy typu "F-pattern" czy "Z-pattern" to w nowoczesnym web designie przestarzały mit — użytkownik podąża dokładnie za tym, co zaprojektujesz hierarchią wizualną, a nie za sztuczną literą alfabetu.
  - To **kontrast skali, światło (whitespace), waga typografii i strategiczne akcenty** decydują o kolejności odbioru. Jeśli chcesz, by użytkownik zaczął od środka, góry czy boku — zaprojektuj tam bezdyskusyjny punkt kotwiczenia uwagi (Anchor Point).
  - Zachowaj logiczny flow: Wyrazisty punkt wejścia -> Zrozumiały kontekst / wartość -> Konkretne działanie (CTA).

- **Redukcja obciążenia poznawczego (Cognitive Load)**:
  - Jedna sekcja = jedna główna myśl lub zadanie.
  - Odpowiedni oddech (`padding`, `gap`, duży whitespace) daje oczom odpocząć i naturalnie grupuje powiązane treści (prawo bliskości Gestalt).
- **Konkretne i Jednoznaczne CTA (Action-Oriented Copy)**:
  - **Zakaz generycznych etykiet**: Nigdy nie używaj bezpłciowych sformułowań typu "See more", "Więcej", "Click here", "Dowiedz się więcej", "Check this out".
  - **Zawsze precyzuj akcję i cel**: np. "See my projects", "Read case study", "View GitHub code", "Get in touch", "Download resume". Użytkownik musi wiedzieć dokładnie, co stanie się po kliknięciu.

## 8. Architektura Kodu: Shared UI Components (`src/components/ui/`)
Dbamy o czystość, reużywalność i spójność komponentów interfejsu:
- **Zakaz używania surowych elementów bazowych bezpośrednio w widokach**:
  - Nie wstawiaj surowego `<button>`, `<input>`, customowych divów udających przyciski czy natywnego `alert()` wewnątrz stron i sekcji.
- **Zasada dwuetapowa przy potrzebie elementu UI**:
  1. **Krok 1 (Sprawdzenie)**: Sprawdź, czy w katalogu `src/components/ui/` istnieje już gotowy komponent (np. `Button.tsx`, `Badge.tsx`, `Input.tsx`). Jeśli tak — zaimportuj go i użyj.
  2. **Krok 2 (Tworzenie abstrakcji)**: Jeśli takiego komponentu jeszcze nie ma, **nie** koduj go lokalnie "na szybko". Utwórz elastyczny, reużywalny komponent w `src/components/ui/` (np. `Button.tsx`), który:
     - Obsługuje warianty stylistyczne jako props (np. `variant: "primary" | "secondary" | "ghost" | "link"`),
     - Obsługuje rozmiary (np. `size: "sm" | "md" | "lg"`),
     - Przekazuje standardowe atrybuty HTML (`HTMLAttributes` / `ButtonHTMLAttributes`),
     - Respektuje zasady projektu (zmienne Tailwind, `cursor-pointer`, `transition`, max `rounded-sm`).

## 9. Długość Plików i Modularność Komponentów React
Dążymy do czystych, modułowych i łatwych w utrzymaniu komponentów:
- **Cel (<150 linii)**: Staraj się utrzymywać pliki komponentów poniżej 150 linii kodu. Wydzielaj podkomponenty, własne hooki, funkcje pomocnicze i stałe do dedykowanych plików.
- **Akceptowalne (150-300 linii)**: Pliki w tym przedziale są dopuszczalne, ale zawsze aktywnie rozważ, czy wydzielenie logiki, hooków lub mniejszych widoków nie poprawi czytelności.
- **Twardy limit (>300 linii)**: Komponenty przekraczające 300 linii to absolutna ostateczność. Gdy plik zbliża się do tego limitu lub go przekracza, bezwzględnie zrefaktoryzuj go na mniejsze, wyspecjalizowane moduły.

## 10. SEO, Metadane i Dostępność Mediów (SEO & Accessibility)
Dbamy o doskonałą widoczność w wyszukiwarkach oraz pełną semantykę techniczną:
- **Kompletne Metadane**:
  - Każda strona i widok musi definiować precyzyjne metadane (`title`, `description`, `openGraph`, `twitter`, `alternates` dla języków `/pl` i `/en`).
  - Używaj dynamicznego `generateMetadata()` w Next.js powiązanego z aktualnym językiem (`locale`) i słownikiem tłumaczeń.
- **Atrybuty ALT dla Obrazów (Zero wyjątków)**:
  - Każdy komponent `Image` z `next/image` lub tag `<img>` **musi** posiadać znaczący, opisowy atrybut `alt` (w języku odpowiadającym aktualnemu `locale`).
  - Zakaz pustych lub generycznych altów typu `alt="image"`, `alt="zdjęcie"`. Opisuj precyzyjnie, co przedstawia grafika (np. `alt="Zrzut ekranu panelu analitycznego projektu xyz"`).
- **Semantyczny HTML i Struktura Nagłówków**:
  - Zawsze dokładnie jeden `h1` na stronę jako główny temat widoku.
  - Zachowaj poprawną hierarchię nagłówków (`h1` -> `h2` -> `h3`), nie pomijając poziomów dla czystego stylowania (do stylów używaj klas typograficznych, zachowując logiczne znaczniki semantyczne).



