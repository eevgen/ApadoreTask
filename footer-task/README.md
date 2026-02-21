# Daramis Footer - Test Task (Front-end Developer)

Tento repozitář obsahuje řešení testovacího zadání pro pozici Front-end Developer.
Projekt je postaven na Next.js (App Router), TypeScriptu a Tailwind CSS.

## Tailwind CSS Konfigurace

V projektu je nastaven `tailwind.config.ts` s následujícím nastavením:

### Content Paths
Nakonfiguroval jsem cesty pro skenování souborů:
- `./app/**/*.{js,ts,jsx,tsx,mdx}` — sleduje všechny komponenty v App Router
- `./components/**/*.{js,ts,jsx,tsx,mdx}` — sleduje komponenty v adresáři components

Takto Tailwind správně generuje pouze CSS, které se v projektu skutečně používá.

### Vlastní barvy (Daramis Design System)
Vytvořil jsem vlastní barevnou paletu `daramis` jako rozšíření defaultních Tailwind barev (bez jejich přepsání):
- **Green** (`#3A4035`) — pozadí sekcí
- **Darkest** (`#1A1A1A`) — primární barva tlačítek
- **Dark** (`#2A2D27`) — pozadí a sekundární inverzní tlačítka
- **Yellow** (`#E5B962`) — akcentuální žlutá
- **Creamy** (`#EBE6E0`) — světlé pozadí sekcí
- **Creamy 2** (`#C4BCB3`) — dekorativní texty a odkazy
- **White** (`#FFFFFF`) — primární bílá
- **Error** (`#D34B4B`) — chybové hlášky

### Vlastní fonty
Přidal jsem podporu pro dvě custom fonty:
- **Nudista** — preferovaný font pro projekt
- **Arial** — fallback sans-serif

## 1. Architektura komponent
*Zde popíšu, jak jsem rozčlenil footer (např. hlavní kontejner, formulář, UI prvky).*
*(Bude doplněno v průběhu vývoje)*

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