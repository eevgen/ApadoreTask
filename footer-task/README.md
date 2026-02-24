# Daramis Footer - Test Task (Front-end Developer)

Tento repozitář obsahuje řešení testovacího zadání pro pozici Front-end Developer.
Projekt je postaven na Next.js (App Router), TypeScriptu a Tailwind CSS v4 s novým `@theme` přístupem.

## Tailwind CSS v4 — Design System v `globals.css`

Projekt používá **Tailwind CSS v4** s direktivou `@theme` přímo v `globals.css` namísto tradičního `tailwind.config.ts`.

```css
@import "tailwindcss";

@theme {
    /* Barvy */
    --color-primary-darkest: #2E2A24;
    --color-primary-creamy: #E8DFD3;
    --color-primary-accent: #E2B162;
    /* ... další proměnné ... */

    /* Typografie */
    --text-h1-desktop: 160px;
    --leading-h1-desktop: 160px;
    /* ... responsive variant ... */
}
```

### Barevná paleta (Daramis Design System)
- **Primary Darkest** (`#2E2A24`) — hlavní background
- **Primary Creamy** (`#E8DFD3`) — primární text
- **Primary Accent** (`#E2B162`) — akcentuální žlutá (nadpisy, hovers)
- **Primary Creamy 2** (`#BBAF9F`) — sekundární text
- **Color Error** (`#FF6060`) — chybové hlášky
- **Base White** (`#FFFFFF`) — bílá
- **Primary Green** (`#3A4035`) — sekundární background

### Typografické tokeny
**Desktop H1 (160px):**
- Font size: `160px`
- Line height: `160px`
- Letter spacing: `-4px`

**Mobile H1 (52px):**
- Font size: `52px`
- Line height: `46px`
- Letter spacing: `-1.04px`

**Paragraph (18px)**, **Small (16px)**, **Label (12px)** — definovány jako CSS proměnné

### Vlastní fonty
- `--font-family-nudista: "Nudista", sans-serif` — primární font (nadpisy)
- `--font-family-arial: "Arial", sans-serif` — sekundární font (text)

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

Footer je rozdělen do **2 hlavních sekcí**:

#### Up Section — Header s nadpisem a formulářem

**Mobilní layout:**
- Nadpis: "Nepropásněte" (accent žlutá) + "život na Letné" (bílá)
  - Velikost: `var(--text-h1-mobile)` (52px)
  - Řádkování: `var(--leading-h1-mobile)` (46px)
- Popis: "Máte otázky..." (16px, opacity 70%)
- LeadForm komponenta pod textem
- Kontaktní údaje oddělené bordrem

**Desktop layout (lg breakpoint):**
- **Raw 1**: "Nepropásněte" (160px, žlutá)
- **Raw 2**: 2-sloupcový grid
  - **Levý sloupec**: popis "Máte otázky..." (zarovnáno k dnu)
  - **Pravý sloupec**: "život na Letné" (160px, bílá)
- **Raw 3**: 2-sloupcový grid
  - **Levý sloupec**: LeadForm
  - **Pravý sloupec**: kontaktní údaje (email, telefon)

#### Bottom Section — Navigace a info

- **ESENS logo** (48px, nudista font)
- **Navigační sloupce**: Lokalita, Kontakt + kontakty (email, telefon, adresa)
- **Developer info**: DARAMIS
- **Footer bar**: disclaimer, copyright © 2025, GDPR + Made by Apadore

Všechna data jsou responzivní s breakpointy: `md:` a `lg:`

### `components/FormTextField.tsx` — Reusable Field Wrapper

Nová komponenta pro standardizaci polí formuláře:
```tsx
<FormTextField label="Křestní jméno *" error={fieldErrors.firstName?.[0]}>
  <input ... />
</FormTextField>
```

**Funkce:**
- Wrapper pro label + input/textarea
- Inline error display (vedle labelu v červené barvě)
- Typ-safe: `label: string`, `error?: string`, `children: React.ReactNode`
- Unifikované styling pro všechna pole

### `components/LeadForm.tsx` — Lead Form Komponenta (Updated)

Client-side komponenta (`"use client"`) s plnou integrací Server Actions a validací.

**Změny v LeadForm.tsx:**
- ✅ Integrace `<FormTextField>` komponenty pro všechna pole
- ✅ `submitLead` Server Action místo mock backendu
- ✅ Zobrazení `fieldErrors` vedle jednotlivých polí
- ✅ Zobrazení `formErrors` v boxu nahoře (globální chyby)
- ✅ Automatické čištění chyb při úpravě pole (`handleInputChange`)

**Struktura formuláře (7 řádků):**

1. **Řádek 1 — Jméno + Příjmení** (responsivní: md:2 sloupce)
   - Wrapper: `<FormTextField label="Křestní jméno *" error={fieldErrors.firstName?.[0]}>`
   - Input: `text`, placeholder, state binding
   - Styling: `border border-primary-creamy rounded-[4px]` (jemný border s 4px rádius)
   - Focus efekt: `focus:border-primary-accent` (žlutá)
   - Error styl: `border-error` (červená barva)

2. **Řádek 2 — Telefonní číslo** (full width)
   - Input type: `tel` pro nativní validaci
   - Stejné styling jako řádek 1
   - Povinné pole (označeno `*`)

3. **Řádek 3 — E-mail** (full width, **s error handling**)
   - Input type: `email`
   - **Error state**: `emailError` state zobrazuje chybovou zprávu vedle labelu
   - **Error styling**: `border-error rounded-[4px]` — červená barva bordru
   - Dva CSS classes: `inputClass` (normální) + `errorInputClass` (s chybou)

4. **Řádek 4 — Zpráva** (textarea)
   - `rows={3}` — výchozí výška
   - Border: `border-primary-creamy/40`
   - Focus: `focus:border-primary-accent`
   - `resize-none` — zapobraz změně velikosti

5. **Řádek 5 — Typ bytu** (Radio buttons s React State)
   - **State**: `const [flatType, setFlatType] = useState<"1+KK" | "2+KK" | "3+KK" | "4+KK" | "">("")`
   - Skryté radio inputs + kustom-stylované labely
   - Vybraný stav: `bg-primary-accent text-primary-darkest border-primary-accent`
   - Nevybraný stav: `border-primary-creamy/40 text-primary-creamy/80`
   - Hover: `hover:border-primary-accent/70`
   - Design: `rounded-[4px] px-4 py-1.5` — čtvercové knoflíky

6. **Řádek 6 — Checkboxy** (2 položky)
   - **Newsletter**: "Chci být součástí newsletteru..."
   - **GDPR**: "Odesláním formuláře..." + odkaz na "zásad ochrany osobních údajů"
   - Styling: `accent-primary-accent` — žlutá barva checkbox
   - Interaktivita: `group-hover:text-primary-creamy` — zvýraznění textu

7. **Řádek 7 — Submit button + Error message**
   - Tlačítko: `bg-primary-accent text-primary-darkest` (žlutá)
   - Loading stav: `bg-primary-creamy-2 cursor-not-allowed` + text "Odesílám..."
   - Hover: `hover:brightness-110` (zesvětlení) + `active:scale-95` (stisku efekt)
   - Design: `rounded-full py-3 px-8 uppercase tracking-widest` (veľký, výrazný)
   - **Error hláška**: "Něco se pokazilo. Zkuste to prosím znovu." (červená, vedle tlačítka)

**Globální CSS classes:**
```tsx
const inputClass =
    "bg-transparent border border-primary-creamy/40 rounded-[4px] px-3 py-2 " +
    "hover:border-primary-accent/70 focus:border-primary-accent transition-colors";

const errorInputClass =
    "bg-transparent border border-error rounded-[4px] px-3 py-2 " +
    "focus:border-error transition-colors";
```

**Success state:**
Když je `status === "success"`, formulář je nahrazen:
- Nadpis: "Děkujeme za odeslání formuláře!" (32px, nudista, UPPERCASE)
- Text: "Brzy se vám ozveme." (18px, creamy, opacity 80%)

## 2. Backend Validace a Server Actions

### `app/schemas/contact-form.ts` — Zod Validační Schéma

Definuje veškerou validační logiku s českými chybovými zprávami:

```tsx
const contactFormSchema = z.object({
    firstName: z.string().trim().min(2).max(50),
    lastName: z.string().trim().min(2).max(50),
    phone: z.string().e164("Zadejte platné telefonní číslo"),
    email: z.string().trim().email("Zadejte platnou e-mailovou adresu"),
    message: z.string().trim().max(1000).optional(),
    apartmentType: z.array(z.enum(["1+KK", "2+KK", "3+KK", "4+KK"])).optional(),
    newsletter: z.boolean().optional().default(false),
    agreeToPolicy: z.literal(true, {
        message: "Musíte souhlasit se zpracováním osobních údajů"
    }),
});
```

**Validace:**
- **firstName/lastName**: 2-50 znaků, trimované
- **phone**: e164 formát (mezinárodní)
- **email**: RFC 5322 email formát
- **message**: max 1000 znaků (optional)
- **agreeToPolicy**: povinná souhlas (literal true)

### `app/actions/submitLead.ts` — Server Action

Serverová funkce (`"use server"`) pro bezpečné zpracování formuláře:

```tsx
export async function submitLead(formData: FormData) {
    const result = contactFormSchema.safeParse({
        firstName: formData.get("firstName"),
        // ... další pole ...
    });

    if (!result.success) {
        const { fieldErrors, formErrors } = result.error.flatten();
        return { success: false, fieldErrors, formErrors };
    }

    // data processing...
    return { success: true };
}
```

**Tok:**
1. Klient pošle FormData
2. Server validuje pomocí Zod schématu
3. Vrací `{ success: true }` nebo `{ success: false, fieldErrors, formErrors }`
4. Chyby se automaticky zobrazí vedle polí

**Výhody:**
- ✅ Validace na serveru (bezpečnější)
- ✅ Nativní Next.js integraci (bez API route)
- ✅ Typ-safe: TypeScript inférence z schématu
- ✅ Čeština: Všechny error zprávy v češtině

### React State (3 stavy)

```tsx
const [formData, setFormData] = useState({ firstName: "", ... });
const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
const [formErrors, setFormErrors] = useState<string[]>([]);
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
```

**State popis:**
- `formData` — všechna pole (firstName, lastName, phone, email, message, apartmentType, newsletter, agreeToPolicy)
- `fieldErrors` — `{ fieldName: [errorMessage] }` (ze Zod validace)
- `formErrors` — globální chyby (např. "Server error")
- `status` — lifecycle stav

### Mock Backend — Simulace sítě (10% chyba rate)

```tsx
const submitToMockBackend = async function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {  // 10% šance na chybu
                reject(new Error("Simulated backend error"));
            } else {
                resolve("Success");
            }
        }, 1500);  // 1.5s latence
    });
};
```

**Co simuluje:**
- **Latence sítě**: `setTimeout 1500ms` — realistická prodleva API
- **Náhodná chyba**: `Math.random() < 0.1` — 10% požadavků selže (testuje error handling)

### handleSubmit — Integrovaný Workflow s Server Action

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFieldErrors({});
    setFormErrors([]);
    setStatus("loading");

    try {
        const form = new FormData();
        form.append("firstName", formData.firstName);
        // ... všechna pole ...

        const result = await submitLead(form);  // Server Action

        if (!result.success) {
            setFieldErrors(result.fieldErrors || {});
            setFormErrors(result.formErrors || []);
            setStatus("error");
        } else {
            await submitToMockBackend();  // 1.5s latence + 10% error
            setStatus("success");
        }
    } catch (error) {
        setFormErrors(["Něco se pokazilo. Zkuste to prosím znovu."]);
        setStatus("error");
    }
};
```

**Tok odesílání:**
1. Sbírá data z `formData` state do `FormData` objektu
2. Volá Server Action `submitLead(form)` — validace na serveru
3. **Server error**: zobrazí `fieldErrors` (vedle polí) + `formErrors` (v boxu nahoře)
4. **Server success**: simuluje latenci (1.5s) + 10% chyba rate
5. **Výsledek**: `success` (DV zpráva) nebo `error` (retry možnost)

### Form State Lifecycle

| Stav | Tlačítko | Zobrazení |
|------|---------|----------|
| `idle` | normální styl | Formulář aktivní |
| `loading` | deaktivováno, šedé | "Odesílám..." |
| `success` | skrytý | Děkovná zpráva |
| `error` | normální styl | Chyba + možnost retry |

**Loading UI:**
- Tlačítko: `disabled`, `bg-primary-creamy-2`, `cursor-not-allowed`
- Text: "ODESLAT" → "Odesílám..."

**Error UI:**
- Hláška vedle tlačítka: `text-error` ("Něco se pokazilo. Zkuste to prosím znovu.")
- Formulář zůstane dostupný pro opakování

**Success UI:**
```tsx
if (status === "success") {
    return (
        <div className="gap-4">
            <h2 className="font-nudista text-primary-creamy uppercase" style={{ fontSize: "32px" }}>
                Děkujeme za odeslání formuláře!
            </h2>
            <p className="font-arial text-primary-creamy/80">Brzy se vám ozveme.</p>
        </div>
    );
}
```

## 3. Rizika a Edge Cases

### Vícenásobné kliknutí na "Odeslat"
Tlačítko je ihned deaktivováno (`disabled={status === 'loading'}`). Uživatel **nemůže odeslat formulář vícekrát** — DOM zcela blokuje sekundární submit.

### Výpadek API / Chyba backendu (10% testovací rate)
- `try/catch` obaluje `submitToMockBackend()`
- Při chybě: `setStatus("error")`
- Chybová hláška se zobrazí vedle tlačítka
- Formulář zůstane dostupný — uživatel **nepřijde o data**
- Uživatel může zkusit znovu

### Network timeout / Slow connection
- 1.5s `setTimeout` simuluje reálnou latenci
- Loading stav zajišťuje vizuální feedback
- Uživatel vidí "Odesílám..." během čekání

### Validace všech polí

**Všechna pole** mají Zod validaci na serveru:
- `fieldErrors` state zobrazuje chyby vedle jednotlivých polí (pomocí `<FormTextField>`)
- Chyby v česčtině: "Jméno musí mít alespoň 2 znaky", "Zadejte platné telefonní číslo", atd.
- `formErrors` (globální) pro chyby, které se týkají celého formuláře
- Při opakovaném pokusu se chyby vymaží (`setFieldErrors({})`)

**Příklad chybového stavu:**
```
❌ Křestní jméno: "Jméno musí mít alespoň 2 znaky"
❌ Telefonní číslo: "Zadejte platné telefonní číslo"
```

Validace probíhá na serveru — frontend pouze zobrazuje výsledky.

## Jak spustit projekt lokálně
1. `npm install`
2. `npm run dev`
3. Otevřít [http://localhost:3000](http://localhost:3000)