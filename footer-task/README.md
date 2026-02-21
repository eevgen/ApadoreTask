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
Client-side komponenta (`"use client"`) pro sběr dat potenciálních klientů.

**Struktura formuláře:**

1. **Řádek 1 — Jméno + Příjmení**
   - Textová pole se spodním bordrem (`border-b border-daramis-darkest`)
   - Focus efekt: border změní na zelenou (`focus:border-daramis-green`)
   - Responsivní: na mobilu pod sebou, na desktopu vedle sebe (`md:flex-row`)

2. **Řádek 2 — Telefonní číslo + E-mail**
   - Stejný design jako řádek 1
   - Input typy: `tel` a `email` pro nativní validaci
   - E-mail pole je povinné (označeno `*`)

3. **Tlačítko "ODESLAT"**
   - Design: `bg-daramis-darkest` text `text-daramis-white`
   - Hover efekt: pozadí se změní na zelenou (`hover:bg-daramis-green`)
   - Typography: `font-nudista` pro vizuální hierarchii
   - Smooth transition

**Styling přístupy:**
- **Transparentní background**: `bg-transparent` — formulář se snoubí s Footer
- **Minimalistický design**: pouze spodní borde místo plného rámce
- **Accessibility**: všechna pole mají labely s označením povinnosti (`*`)
- **Responsive**: flexbox layout automaticky se přizpůsobí obrazovce

## 2. State management a validace
*Zde vysvětlím, jak řeším stavy formuláře (idle, loading, success, error) a proč jsem zvolil daný způsob validace.*
*(Bude doplněno v průběhu vývoje - přidány input fieldy, připraveno pro implementaci)*

## 3. Rizika a edge cases
*Zde popíšu, jak aplikace reaguje, když uživatel klikne na "Odeslat" 10x za sekundu, a co se stane při výpadku API.*
*(Bude doplněno v průběhu vývoje)*

## Jak spustit projekt lokálně
1. `npm install`
2. `npm run dev`
3. Otevřít [http://localhost:3000](http://localhost:3000)