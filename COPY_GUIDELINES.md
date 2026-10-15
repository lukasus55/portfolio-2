# Zasady Copywritingu Technicznego i Tworzenia Treści (Anti-AI Copy Guidelines)

Ten dokument definiuje żelazne reguły tworzenia treści pisanych (opisy projektów, case studies, devlogi, sekcje „O mnie”, dokumentacja architektoniczna) w całym portfolio.

Celem jest **ludzki, bezpretensjonalny, konkretny i techniczny styl**, wolny od typowych nawyków i „waty słownej” generowanej przez modele językowe (tzw. *AI slop*).

---

## 1. Perspektywa 1. Osoby (First-Person Narrative)
- **Zawsze pisz z perspektywy pierwszej osoby liczby pojedynczej** („Zbudowałem”, „Zaprojektowałem”, „Wybrałem”, „Zauważyłem”, „Stanąłem przed problemem”).
- **Bezwzględny zakaz bezosobowej strony biernej i „korporacyjnego my”**:
  - ❌ *„Projekt został zrealizowany w oparciu o...”*
  - ❌ *„Wdrożyliśmy innowacyjne podejście do...”* (gdy projekt robiłeś sam)
  - ❌ *„Aplikacja umożliwia użytkownikowi realizację celów...”*
  - ✅ *„Zbudowałem ten system, bo denerwowało mnie, że...”*
  - ✅ *„Zamiast gotowego ORM-a napisałem proste zapytania SQL, ponieważ...”*

---

## 2. Zakaz „Przymiotnikozy” i Pustych Superlatywów (Anti-Adjective Overdose)
Modele LLM mają natrętną tendencję do oblepiania każdego rzeczownika 2–3 przymiotnikami („super czysta, nieskazitelna, ultra-inteligentna architektura”). Prawdziwy inżynier operuje faktami, a nie epitetami.

- **Zasada „Pokaż fakt, a nie przymiotnik” (Show, Don't Tell)**:
  - ❌ *„Stworzyłem ultraszybki, bezbłędny i niesamowicie wydajny endpoint API.”*
  - ✅ *„Zoptymalizowałem zapytania i dodałem cache w Redis, co skróciło czas odpowiedzi endpointu z 450 ms do 35 ms.”*
  - ❌ *„Zaprojektowałem potężny, modułowy i elastyczny system uprawnień.”*
  - ✅ *„Podzieliłem uprawnienia na 3 poziomy (Admin, Organizator, Gracz) z możliwością delegowania edycji konkretnego turnieju.”*
- **Jeżeli przymiotnik nie wnosi weryfikowalnej, technicznej cechy – skasuj go**.

---

## 3. Czarna Lista Słów i Zwrotów AI (The AI Slop Blacklist)
Poniższe słowa i sformułowania natychmiast zdradzają sztucznie wygenerowany tekst. **Pod żadnym pozorem ich nie używaj**:

### 🚫 Zakazane słowa-wytrychy (polskie i kalki z angielskiego):
- **Kluczowy / Fundamentalny / Istotny** (używane co drugie zdanie)
- **Dedykowany** (używane w znaczeniu „własny”, „autorski”, „stworzony dla”)
- **Innowacyjny / Rewolucyjny / Przełomowy**
- **Potężny (robust) / Bezszwowy (seamless) / Płynny / Elastyczny / Wszechstronny**
- **Zagłębiać się (delve) / Wykorzystać potencjał (harness / leverage)**
- **Wznosić na wyższy poziom (elevate / take to the next level)**
- **Świadectwo / Wyraz (a testament to...)**
- **Gobelin / Mozaika (tapestry) / Krajobraz cyfrowy (digital landscape)**
- **Koniec końców / Pod koniec dnia (at the end of the day)**
- **Robić różnicę (make a difference)**

### 🚫 Zakazane schematy składniowe AI:
1. **Formuła „To nie tylko X, ale również Y”**:
   - ❌ *„To nie tylko zwykła aplikacja do darta, to kompletny ekosystem turniejowy.”*
   - ✅ *„Aplikacja liczy punkty w darcie i synchronizuje wyniki na żywo z platformą kkol.pl.”*
2. **Sztuczne trójki przymiotnikowe**:
   - ❌ *„Szybki, bezpieczny i skalowalny.”*
   - ❌ *„Prosty, przejrzysty i intuicyjny.”*
3. **Patetyczne wstępniaki z generatora**:
   - ❌ *„W dzisiejszym dynamicznie rozwijającym się świecie technologii…”*
   - ❌ *„W erze cyfrowej transformacji kluczowe znaczenie ma…”*
4. **Cukierkowe, bezużyteczne podsumowania**:
   - ❌ *„Ostatecznie projekt ten stanowi doskonały przykład harmonijnego połączenia designu i inżynierii.”*
   - ✅ *„Aplikacja działa na produkcji i obsłużyła cały sezon 2026 bez awarii.”*

---

## 4. Zasada Wysokiego Sygnału (High Signal-to-Noise Ratio)
- **Pisz jak programista rozmawiający z innym programistą przy kawie**. 
  - Jeśli nie powiedziałbyś danego zdania na żywo koledze z zespołu – nie wstawiaj go na stronę.
- **Opisuj realne problemy, kompromisy (trade-offs) i decyzje**:
  - Co było trudne?
  - Co na początku nie działało?
  - Dlaczego wybrałeś rozwiązanie A zamiast biblioteki B?
  - Jakie ograniczenia napotkałeś (np. limity Discord REST API, spójność bazy, wyścigi stanów)?
- **Test skasowania zdania**:
  - Przeczytaj akapit i wykasuj dowolne zdanie. Jeśli akapit nie stracił ani jednego konkretu technicznego ani sensu logicznego – **to zdanie było watą słowną. Zostaw je wykasowane**.

---

## 5. Zakaz Zmyślania Liczb („Nie wyciągaj liczb z dupy”) i Procedura Metryk
Modele językowe mają ogromną tendencję do fantazjowania o metrykach: wklejają losowe liczby typu *„skróciłem czas o 42%”*, *„aplikacja obsłużyła 10 000 requestów na sekundę”* lub *„wzrost zaangażowania o 35%”*. W technicznym portfolio rekruter lub tech lead natychmiast wyczuje ściemę, a fałszywe dane zniszczą wiarygodność całego case study.

### Żelazna procedura dla asystenta AI:
1. **Bezwzględny zakaz wstawiania niezweryfikowanych liczb i statystyk**:
   - Nigdy nie wymyślaj czasów odpowiedzi, liczby użytkowników, rozmiarów bazy ani procentów optymalizacji.
2. **Używaj placeholderów podczas szkicowania treści**:
   - Gdy uznasz, że w danym miejscu twarda liczba znacznie wzmocniłaby argument techniczny, wstaw jawny placeholder, np.:
     - `...co skróciło czas odpowiedzi z [PLACEHOLDER: czas przed] do [PLACEHOLDER: czas po]`
     - `Platforma obsłużyła [PLACEHOLDER: liczba aktywnych graczy/uczestników] w trakcie sezonu`
     - `Zmniejszyło to rozmiar bundle z [PLACEHOLDER: rozmiar przed] do [PLACEHOLDER: rozmiar po]`
3. **Obowiązkowe pytanie do developera na koniec prompta**:
   - W odpowiedzi wypisz deweloperowi znalezione miejsca i zapytaj o **rzeczywiste, historyczne liczby**:
     > *„W sekcji X przydałaby się metryka. Jakie były realne czasy odpowiedzi / ilu użytkowników korzystało z systemu?”*
4. **Krytyczna analiza po uzyskaniu realnych danych**:
   - Po otrzymaniu faktycznych liczb przeanalizuj je przed wstawieniem:
     - **Scenariusz A (Liczba robi wrażenie / ma mocny sens techniczny)**: Wstawiamy ją wprost w miejsce placeholdera (np. *„skróciło z 800 ms do 45 ms”*, *„ponad 150 rozegranych meczów w 2 dni”*).
     - **Scenariusz B (Liczba jest mała, nieistotna lub trudna do obrony)**: Jeśli realna liczba brzmi skromnie (np. optymalizacja z 35 ms do 32 ms, albo 5 użytkowników testowych), **nie eksponujemy jej na siłę**. Zamieniamy ją na rzetelny ogólnik inżynierski (np. *„wyeliminowało odczuwalne opóźnienia interfejsu”*) lub zmieniamy kierunek narracji na korzyść architektoniczną (np. *prostota utrzymania kodu, determinizm stanu, eliminacja race conditions*).

---

## 6. Przykłady: Przed (AI Slop) vs Po (Inżynierski Konkret)

| ❌ Typowy styl AI (Puste frazesy) | ✅ Prawdziwy inżynierski styl (Konkret) |
| :--- | :--- |
| *„Platforma stanowi innowacyjne centrum zarządzania wydarzeniami, umożliwiając bezproblemową interakcję i harmonijną współpracę uczestników.”* | *„Zbudowałem kkol.pl, żeby zastąpić arkusze w Excelu jednym miejscem, gdzie 40 graczy sprawdza swoje mecze i drabinki.”* |
| *„Wdrożyłem zaawansowany, wielopoziomowy model uprawnień gwarantujący elastyczną kontrolę dostępu i najwyższy poziom bezpieczeństwa.”* | *„Musiałem rozwiązać problem współdzielenia turniejów: organizator może nadać prawa edycji meczów sędziemu, ale sędzia nie może zmienić nazwy imprezy. Admin ma bypass do wszystkiego.”* |
| *„Bot Discordowy zapewnia bezproblemową orkiestrację danych, harmonijnie łącząc platformę webową ze społecznością.”* | *„Bot odpytuje terminarz przez REST API z kluczem autoryzacyjnym, wysyła ankiety na kanał i odznacza w bazie wysłane rekordy.”* |
| *„Loles to nowoczesne, rewolucyjne narzędzie wywiadu meczowego, które transformuje sposób, w jaki gracze analizują pojedynki.”* | *„Napisałem Loles w 3 tygodnie, bo podczas ładowania meczu potrzebowałem szybkiej ściągi z cooldownami przeciwnika bez przekopywania się przez reklamy.”* |
| *„Zastosowane algorytmy zapewniły 85% wzrost wydajności bazy danych i niesamowitą skalowalność.”* (zmyślone metryki) | *„Zastąpiłem 4 osobne zapytania jednym zoptymalizowanym JOIN-em, eliminując problem N+1 przy ładowaniu tabeli turniejowej.”* |

