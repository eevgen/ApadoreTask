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
Samostatná komponenta s design system barvami:
- **Pozadí**: `bg-daramis-green` (`#3A4035`)
- **Text**: `text-daramis-creamy` pro kontrast
- **Rámec**: `border-2 border-daramis-yellow` (`#E5B962`)
- **Typography**: Nadpis v `font-nudista`, text v `font-arial`
- **Padding/Spacing**: `py-20 px-4 md:px-10` — responsivní padding
- **Max-width**: `max-w-7xl` — omezuje šířku na desktopech

```tsx
<footer className="bg-daramis-green text-daramis-creamy w-full py-20 px-4 md:px-10">
  <div className="max-w-7xl mx-auto border-2 border-daramis-yellow p-10">
    <h1 className="font-nudista text-4xl mb-4">Test Text</h1>
    <p className="font-arial text-lg">Future Contact Form</p>
  </div>
</footer>
```

Komponenta je připravena pro budoucí rozšíření (formulář, kontakty, newsletter).

## 2. State management a validace
*Zde vysvětlím, jak řeším stavy formuláře (idle, loading, success, error) a proč jsem zvolil daný způsob validace.*
*(Bude doplněno v průběhu vývoje)*

## 3. Rizika a edge cases
*Zde popíšu, jak aplikace reaguje, když uživatel klikne na "Odeslat" 10x za sekundu, a co se stane při výpadku API.*
*(Bude doplněno v průběhu vývoje)*

## Jak spustit projekt lokálně
1. `npm install`
2. `npm run dev`
3. Otevřít [http://localhost:3000](http://localhost:3000)