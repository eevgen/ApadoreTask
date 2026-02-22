# Daramis Footer - Test Task (Front-end Developer)

Tento repozitář obsahuje řešení testovacího zadání pro pozici Front-end Developer.
Projekt je postaven na Next.js (App Router), TypeScriptu a Tailwind CSS.

## Tailwind CSS v4 — Nový přístup

Projekt používá **Tailwind CSS v4**, kde se konfiguraci provádí přímo v `globals.css` pomocí direktivy `@theme` místo tradičního `tailwind.config.ts`.

### Proč byla změněna konfigurace?
V Tailwind v4 byl zaveden nový přístup:
- **Starý přístup**: `tailwind.config.ts` + `@tailwind utilities` — již není podporován
- **Nový přístup**: Konfigurační direktiva `@theme` přímo v CSS — moderněji a efektivněji

Rozhodl jsem se použít nový přístup místo fallbacku `@config "./tailwind.config.ts"`, protože je to budoucnost Tailwind.

### Vlastní barvy (Daramis Design System)
Definoval jsem barevnou paletu přímo v `globals.css` pomocí CSS proměnných:
- **Green** (`--color-daramis-green: #3A4035`) — pozadí sekcí
- **Darkest** (`--color-daramis-darkest: #1A1A1A`) — primární barva tlačítek
- **Dark** (`--color-daramis-dark: #2A2D27`) — pozadí a sekundární inverzní tlačítka
- **Yellow** (`--color-daramis-yellow: #E5B962`) — akcentuální žlutá
- **Creamy** (`--color-daramis-creamy: #EBE6E0`) — světlé pozadí sekcí
- **Creamy 2** (`--color-daramis-creamy-2: #C4BCB3`) — dekorativní texty a odkazy
- **White** (`--color-daramis-white: #FFFFFF`) — primární bílá
- **Error** (`--color-daramis-error: #D34B4B`) — chybové hlášky

### Vlastní fonty
Přidal jsem podporu pro dvě custom fonty jako CSS proměnné:
- **Nudista** (`--font-family-nudista: "Nudista", sans-serif`) — preferovaný font pro projekt
- **Arial** (`--font-family-arial: "Arial", sans-serif`) — fallback sans-serif

## Globální nastavení (Root Layout)

V `app/layout.tsx` jsem nakonfiguroval:

### Metadata
- **Title**: "Daramis Footer" — název aplikace
- **Description**: "Test task frontend developer" — popis pro SEO

### HTML & Head
- **Jazyk**: `lang="cs"` — nastaveno na češtinu
- **Default font**: `font-arial` — Arial je výchozí font
- **Adobe Typekit**: Připojen stylesheet s vlastními fonty (`Nudista`) přes CDN

### Body styles
Globálně aplikovány Tailwind třídy:
- `bg-daramis-creamy` — krémová barva pozadí
- `text-daramis-darkest` — tmavě šedý text (přesně podle design systému)
- `antialiased` — vyhlazení okrajů textu pro lepší vzhled

Tímto je zajištěna konzistentní vizuální identita na celé aplikaci.

## 1. Architektura komponent

### `app/layout.tsx` — Root Layout
Hlavní obal aplikace, který:
- Nastavuje metadata (title, description) pro SEO
- Importuje `globals.css` s Tailwind konfigurací
- Aplikuje globální Tailwind třídy: `bg-daramis-creamy`, `text-daramis-darkest`, `antialiased`
- Připojuje Adobe Typekit CDN pro vlastní fonty (Nudista)
- Nastavuje jazyk stránky (`lang="cs"`)

```tsx
<html lang="cs" className="font-arial">
  <head>
    <link rel="stylesheet" href="https://use.typekit.net/gsb0toh.css" />
  </head>
  <body className="antialiased bg-daramis-creamy text-daramis-darkest">
    {children}
  </body>
</html>
```

### `app/page.tsx` — Home Page
Hlavní stránka s:
- **Main container**: `min-h-screen flex flex-col justify-end` — obsadí minimálně výšku obrazovky a push Footer k dnu
- **Centrovaný obsah**: placeholder text "Website Content" uprostřed
- **Footer komponenta**: importuje a renderuje Footer na dno stránky

Flexbox struktura zajišťuje, že Footer zůstane vždy na konci stránky, i když je málo obsahu.

### `components/Footer.tsx` — Footer Komponenta
Footer s 2-sloupcovým layoutem (mobilní: 1 sloupec, desktop: 2 sloupce):

**Levý sloupec:**
- Nadpis v `font-nudista` (text-5xl na mobilu, text-7xl na desktopu)
- Popisný text s aplikovanou opacity pro jemný kontrast
- Inspirativní obsah o projektu

**Pravý sloupec:**
- Integrace `LeadForm` komponenty pro sběr kontaktů

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
  {/* Levý sloupec: headline + popis */}
  {/* Pravý sloupec: formulář */}
  <LeadForm />
</div>
```

### `components/LeadForm.tsx` — Lead Form Komponenta
Client-side komponenta (`"use client"`) pro sběr dat potenciálních klientů s komplexní strukturou.

**Struktura formuláře:**

1. **Řádek 1 — Jméno + Příjmení** (responsivní 2 sloupce)
   - Textová pole se spodním bordrem (`border-b border-daramis-darkest`)
   - Focus efekt: border změní na zelenou (`focus:border-daramis-green`)
   - Přehlížeč spravuje validaci typu `text`

2. **Řádek 2 — Telefonní číslo + E-mail** (responsivní 2 sloupce)
   - Input typy: `tel` a `email` pro nativní validaci
   - E-mail pole je povinné (označeno `*`)
   - Focus efekt stejný jako v řádku 1

3. **Řádek 3 — Zpráva** (textarea)
   - `<textarea>` s `rows={1}` pro začátek
   - Border: `border-daramis-creamy` (světlejší barva pro vizuální odlišení)
   - Focus: border změní na žlutou (`focus:border-daramis-yellow`)
   - `resize-none` — zakáže změnu velikosti uživatelem
   - Placeholder styling: `placeholder:text-daramis-creamy placeholder:opacity-30`

4. **Řádek 4 — Radio Buttons "O jaký byt máte zájem?"** (React State)
   - **State management**: `const [flatType, setFlatType] = useState<"1+KK" | "2+KK" | "3+KK" | "4+KK" | "">("")`
   - Skryté radio inputs (`className="hidden"`) s správným `id`, `name`, `value`
   - **Kustom label styling** jako pill buttons:
     - **Nevybraný stav**: `border-daramis-creamy text-daramis-creamy/80`
     - **Vybraný stav**: `bg-daramis-yellow text-daramis-darkest border-daramis-yellow`
     - **Hover stav**: `hover:border-daramis-yellow` (i když nevybraný)
   - Design: `rounded-full border px-4 py-2 transition-colors` — hladký přechod barev
   - `cursor-pointer` na labelech pro lepší UX

5. **Řádek 5 — Checkboxy (2 položky)**
   - **Newsletter**: "Chci být součástí newsletteru Daramis..."
   - **GDPR**: "Odesláním formuláře souhlasím se zpracováním osobních údajů..."
   - Styling: `accent-daramis-yellow` — volič změní barvu na žlutou
   - Label struktura: `flex items-start gap-4` pro správné zarovnání
   - Interaktivita: `group-hover:opacity-100` — text se zvýrazní při hover

6. **Tlačítko "ODESLAT"** (footer formuláře)
   - Design: `bg-daramis-yellow text-daramis-darkest` — výrazné a kontrastu
   - Hover efekt: `hover:bg-daramis-green` + `hover:opacity-90` — změní barvu a trochu průhlednost
   - Type: `type="submit"` — korektně submit formulář
   - Typography: `font-nudista text-xl` pro vizuální důraz
   - Spacing: `py-4 px-10 mt-4`

**Designové přístupy:**
- **Transparentní background**: `bg-transparent` — harmonizuje s Footer
- **Minimalistický design**: pouze spodní borde (čistý, moderní look)
- **Jednotná barevná schéma**:
  - **Všechna textová pole**: bordry `daramis-creamy`, text `daramis-creamy`
  - **Focus efekt**: všechny borde změní na žlutou (`focus:border-daramis-yellow`)
  - **Placeholdery**: `placeholder:text-daramis-creamy placeholder:opacity-30`
- **Radio buttons jako pill buttons**:
  - Neviditelné inputy + kustom-stylované labely
  - Vybraný stav: žlutý background (`bg-daramis-yellow`)
  - Nevybraný stav: transparent s krémovým bordrem
- **CTA tlačítko**:
  - Výrazné: žlutý background s tmavým textem (`bg-daramis-yellow text-daramis-darkest`)
  - Hover: změní na zelenou (`hover:bg-daramis-green`)
- **Accessibility**: všechna pole mají labely, radio buttons a checkboxy mají rozšířenou clickable area
- **Responsive**: flexbox layout se přizpůsobí mobilu (single column) i desktopu (2 sloupce)

## 2. State management a validace

### React State pro Radio Buttons
Implementoval jsem React state pro sledování vybraného typu bytu:

```tsx
const [flatType, setFlatType] = React.useState<"1+KK" | "2+KK" | "3+KK" | "4+KK" | "">("");
```

**Proč TypeScript union type?**
- Zabezpečuje, že pouze validní hodnoty mohou být uloženy
- `""` (prázdný string) = počáteční stav (nic nevybrané)
- Čtyři možné byty: `"1+KK" | "2+KK" | "3+KK" | "4+KK"`

**Implementace v UI:**
Každá radio button má svůj `onChange` handler:
```tsx
checked={flatType === "1+KK"}
onChange={() => setFlatType("1+KK")}
```

**Podmínené stylizování:**
```tsx
className={
    "cursor-pointer rounded-full border px-4 py-2 font-arial text-sm transition-colors " +
    (flatType === "1+KK"
        ? "bg-daramis-yellow text-daramis-darkest border-daramis-yellow"
        : "border-daramis-creamy text-daramis-creamy/80 hover:border-daramis-yellow")
}
```

### Form States
Implementoval jsem plný lifecycle stavů formuláře:

```tsx
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
```

| Stav | Popis | UI reakce |
|------|-------|-----------|
| `idle` | Výchozí stav | Formulář je interaktivní |
| `loading` | Probíhá odesílání | Tlačítko deaktivováno, text "ODESÍLÁM..." |
| `success` | Úspěšné odeslání | Formulář skryt, zobrazena děkovná zpráva |
| `error` | Chyba backendu | Zobrazena chybová hláška, formulář dostupný |

### Mock Backend — Simulace sítě

Implementoval jsem mock backend funkci, která simuluje reálné podmínky sítě:

```tsx
const submitToMockBackend = async function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random < 0.1) {
                reject(new Error("Simulated backend error"));
            } else {
                resolve("Success");
            }
        }, 1500);
    });
}
```

**Co simuluje:**
- **Latence sítě**: `setTimeout 1500ms` — realistická prodleva API requestu
- **Náhodná chyba**: 10 % požadavků selže (`random < 0.1`) — testuje, jak frontend reaguje na selhání

### handleSubmit — Async logika odesílání

```tsx
const handleSubmit = async function (e: React.SubmitEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
        await submitToMockBackend();
        setStatus("success");
    } catch (error) {
        setStatus("error");
    }
};
```

**Tok dat:**
1. `e.preventDefault()` — zabrání výchozímu chování prohlížeče (reload stránky)
2. `setStatus('loading')` — okamžitě deaktivuje tlačítko
3. `await submitToMockBackend()` — čeká 1.5s na odpověď
4. **Success path**: `setStatus("success")` — formulář se nahradí děkovnou zprávou
5. **Error path**: `setStatus("error")` — zobrazí chybovou hlášku, formulář zůstane dostupný

### UI reakce na jednotlivé stavy

**Loading:**
```tsx
disabled={status === 'loading'}
className={status === 'loading'
    ? 'bg-daramis-creamy-2 text-daramis-darkest cursor-not-allowed'
    : 'bg-daramis-darkest text-daramis-white hover:bg-daramis-dark'
}
```
- Tlačítko: deaktivováno (`disabled`), šedý background (`creamy-2`), `cursor-not-allowed`
- Text: "ODESLAT" → "ODESÍLÁM..."

**Success:**
- Celý formulář je nahrazen komponentou s poděkováním
- Text v `font-nudista` pro konzistenci s designem

**Error:**
- Chybová hláška nad tlačítkem: `text-daramis-error` (`#D34B4B`)
- Formulář zůstane dostupný — uživatel může zkusit znovu

## 3. Rizika a edge cases

### Kliknutí na "Odeslat" vícekrát za sebou
Tlačítko je při odesílání ihned deaktivováno (`disabled={status === 'loading'}`). Uživatel nemůže odeslat formulář vícekrát — druhý klik je ignorován na úrovni DOM.

### Výpadek API / chyba backendu
`handleSubmit` obaluje volání v `try/catch`. Při jakékoliv chybě:
- Stav se nastaví na `"error"`
- Zobrazí se chybová hláška
- Formulář zůstane dostupný pro opakované odeslání
- Uživatel **nepřijde o vyplněná data**

## Jak spustit projekt lokálně
1. `npm install`
2. `npm run dev`
3. Otevřít [http://localhost:3000](http://localhost:3000)