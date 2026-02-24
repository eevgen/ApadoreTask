# Daramis Footer - Test Task (Front-end Developer)

A full-featured footer component with integrated Lead Form for capturing potential customer contacts. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Architecture

### Tailwind CSS v4 Design System

All configuration in `globals.css` via `@theme` directive:
- **Colors**: primary-darkest (#2E2A24), primary-accent (#E2B162), primary-creamy (#E8DFD3), error (#FF6060), success-submit (#363A2B)
- **Typography**: h1-desktop (160px), h1-mobile (52px), paragraph (18px), small (16px), label (12px)
- **Spacing**: spacing-same (144px), spacing-diff-desktop (160px), spacing-diff-mobile (112px)

### Core Components

#### `Footer.tsx` — Main Container (4 Sections)

1. **Up Section** — Hero headline
   - Desktop: "Nepropásněte" (yellow) + "život na Letné" (white) in 2-column grid
   - Mobile: vertical stack

2. **Middle Section** — Form + Contacts
   - Desktop: `<LeadForm>` left, contact info right
   - Mobile: form + contacts stacked
   - Background SVG image

3. **Pre-Bottom Section** — Navigation Grid
   - ESENS logo
   - Lokalita | Kontakt | Email/Telefon | Klientské centrum

4. **Bottom Section** — Footer Info
   - Developer: DARAMIS logo
   - Copyright + GDPR/Apadore links

All sections wrapped in `<ScrollReveal>` for fade-in + slide-up animation.

#### `LeadForm.tsx` — Form with Server Actions

**7-row structure:**
1. First Name + Last Name (2 cols on desktop)
2. Phone (full width)
3. Email (full width)
4. Message (textarea, 3 rows)
5. Apartment Type (radio buttons: 1+KK, 2+KK, 3+KK, 4+KK)
6. Checkboxes: Newsletter + GDPR consent
7. Submit button (rounded-full, 52px)

**State Management:**
```tsx
const [formData, setFormData] = useState({...});  // form values
const [fieldErrors, setFieldErrors] = useState({});  // field-level errors
const [formErrors, setFormErrors] = useState([]);  // global errors
const [status, setStatus] = useState("idle");  // idle/loading/success/error
```

**Submit Workflow:**
1. `handleSubmit` → builds FormData → calls `submitLead` Server Action
2. Server validates via Zod schema → returns errors or success
3. On success → `submitToMockBackend()` (1.5s latency, 10% error rate)
4. Success → button changes to "Děkujeme za odeslání!"
5. Error → red error message + retry capability

**Features:**
- ✅ Errors clear when user starts typing
- ✅ Button disabled during loading
- ✅ Czech error messages from Zod validation
- ✅ Data preserved on error for retry

#### `FormTextField.tsx` — Input/Textarea Wrapper

```tsx
<FormTextField label="Křestní jméno *" error={fieldErrors.firstName?.[0]}>
  <input ... />
</FormTextField>
```
- Label + inline error message (with opacity transition)
- Fixed height (h-6) to prevent layout shift

#### `FormCheckbox.tsx` — Custom Checkbox

- Hidden input + visual 12×12px square
- Three states: checked (yellow), error (red), normal (gray)
- Hover scale effect

#### `ScrollReveal.tsx` — Intersection Observer Animation

- Fade-in + translate-y animation (700ms duration)
- Threshold: 0.3
- Unobserves after first trigger

### Backend

#### `app/schemas/contact-form.ts` — Zod Validation Schema

```
firstName: trim, min 2, max 50 chars
lastName: trim, min 2, max 50 chars
phone: e164 international format ("+420XXXXXXXXX")
email: RFC 5322 email format
message: optional, max 1000 chars
apartmentType: optional array of enum
newsletter: optional boolean (default false)
agreeToPolicy: required literal true
```

#### `app/actions/submitLead.ts` — Server Action

```tsx
export async function submitLead(formData: FormData) {
    const result = contactFormSchema.safeParse({...});

    if (!result.success) {
        return { success: false, fieldErrors, formErrors };
    }

    // data processing...
    return { success: true };
}
```

- Parses FormData
- Validates via Zod
- Returns `{ success, fieldErrors?, formErrors? }`
- Type-safe via TypeScript inference

### Mock Backend (Testing)

```tsx
submitToMockBackend() {
    // 1500ms latency
    // 10% error rate (Math.random() < 0.1)
}
```

## UI States

**Loading:**
- Button: disabled, `bg-primary-accent/60`, text "Odesílám..."

**Error:**
- Global error box: `bg-error/10 border-error` (if formErrors)
- Field errors: red text beside label via `<FormTextField>`
- Button message: "Něco se pokazilo, zkuste to prosím znovu."

**Success:**
- Form replaced with: "Děkujeme za odeslání formuláře!" (in disabled button)

## Edge Cases Handled

✅ **Multiple clicks:** Button disabled during loading prevents duplicate submissions
✅ **Network errors:** 10% error rate in mock backend for testing error states
✅ **Invalid data:** Server-side Zod validation with inline error display per field
✅ **Data retention:** formData state preserves user input on error for retry

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Tech Stack

- **Next.js** 16.1 (App Router)
- **TypeScript** 5
- **Tailwind CSS** v4 (@theme directive)
- **Zod** — schema validation with Czech error messages
- **React** 19.2 — hooks (useState, useEffect, useRef)
- **Intersection Observer API** — scroll animations
