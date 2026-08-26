
---

## TECH STACK

- React 18 + TypeScript (strict mode)
- Vite as bundler
- CSS Modules (one `.module.css` file per component) — NO Tailwind, NO external UI libraries
- No external icon libraries — use inline SVG for all icons
- React state only (useState) — no Redux, no Zustand

---

## DETAILED REQUIREMENTS

### package.json
```json
{
  "name": "zenzele-portal",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

### tsconfig.json
Use strict TypeScript: `"strict": true`, `"jsx": "react-jsx"`, target ES2020.

### CSS Custom Properties (in index.css)
```css
:root {
  --green-dark:   #1e4d2b;
  --green-mid:    #2d6a4f;
  --green-light:  #52b788;
  --green-bg:     #f0f7f2;
  --text-dark:    #1a1a1a;
  --text-muted:   #6b7280;
  --border:       #d1d5db;
  --white:        #ffffff;
  --footer-bg:    #1a2e1a;
  --radius-sm:    6px;
  --radius-md:    10px;
  --radius-pill:  999px;
  --font-sans:    'Inter', system-ui, -apple-system, sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--font-sans); }
```

### App.tsx
Two-column flex layout, full viewport height. Left panel 52%, Right panel 48%. On screens <768px, stack vertically (left panel becomes a short hero banner ~280px tall, right panel full width below it).

### LeftPanel.tsx
- `position: relative`, `overflow: hidden`
- Background: `linear-gradient(160deg, #1e4d2b 0%, #2d6a4f 35%, #52b788 70%, #95d5b2 100%)`
- Wi-Fi SVG icon: three concentric arcs + a dot at the bottom, white stroke, no fill, strokeWidth 6, centered at ~35% from top, 40% from left
- Text block absolutely positioned bottom-left with 40px padding

### StepIndicator.tsx
Props: `activeStep: 1 | 2`
Renders two numbered circles connected by a line. Active circle: filled `var(--green-mid)`, white text. Inactive: white bg, grey border, grey text. Connecting line: half green (left of active), half grey.

### GenderToggle.tsx
Props: `value: 'male' | 'female'`, `onChange: (v: 'male' | 'female') => void`
Two buttons side by side. Selected state: `background: var(--green-mid)`, `color: white`, `border: 2px solid var(--green-mid)`. Unselected: `background: white`, `color: var(--green-mid)`, `border: 2px solid var(--green-mid)`. Each button has an inline SVG gender symbol before the label. Full accessible radio-button semantics (role="radio", aria-checked).

### ContactForm.tsx
Manages form state with useState. Fields: `mobile: string`, `email: string`, `gender: 'male' | 'female'`, `ageRange: string`, `marketingConsent: boolean`, `termsAccepted: boolean`.
- Inputs have left-icon wrappers: a `position: relative` div, icon absolutely positioned at left center, input has `padding-left: 46px`
- Age range options: 'Under 18', '18–24', '25–34', '35–44', '45–54', '55+'
- "Continue" button: disabled if `termsAccepted` is false (opacity 0.5, cursor not-allowed)
- On submit (termsAccepted true): `console.log(formState)` and show a simple inline success message "You're connected! ✓" below the button in green

### Footer.tsx
Dark bar. Three icon+text columns using CSS grid `grid-template-columns: 1fr 1fr 1fr`. Each column: SVG icon above label text (small, muted white) above value text (white, slightly larger). Copyright text centered below, small, grey.

---

## INLINE SVG SPECS

Wi-Fi icon (LeftPanel):
```svg
<svg width="280" height="220" viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 90 Q140 -20 270 90" stroke="white" stroke-width="22" stroke-linecap="round" fill="none"/>
  <path d="M45 130 Q140 50 235 130" stroke="white" stroke-width="22" stroke-linecap="round" fill="none"/>
  <path d="M85 168 Q140 110 195 168" stroke="white" stroke-width="22" stroke-linecap="round" fill="none"/>
  <circle cx="140" cy="200" r="16" fill="white"/>
</svg>
```

Logo tree (approximate — build a simple SVG tree):
A green semicircle top + narrow rectangle trunk, beside two-line text "zenzele" / "itereleng" in small caps, dark green.

Gender icons: standard ♂ (circle + arrow up-right) and ♀ (circle + cross below) drawn as minimal SVG paths, 16×16.

User icon (input): simple person outline circle + shoulders arc.
Envelope icon (input): simple rectangle with a V flap line.
Headset, Phone, Envelope icons for footer: minimal geometric SVGs.
Chevron-down: simple V path.

---

## RESPONSIVE BREAKPOINTS

```css
/* Mobile-first. Breakpoints: */
@media (max-width: 767px) {
  /* Stack layout: LeftPanel is a 260px tall banner,
     RightPanel is full width scrollable below */
}
@media (min-width: 768px) and (max-width: 1023px) {
  /* Tablet: LeftPanel 45%, RightPanel 55% */
}
@media (min-width: 1024px) {
  /* Desktop: LeftPanel 52%, RightPanel 48% */
}
```

---

## ACCESSIBILITY

- All inputs have associated `<label>` elements (visually hidden labels acceptable if placeholder is descriptive, but prefer visible labels above input)
- Checkboxes use `<input type="checkbox">` not custom divs
- Gender toggle has `role="radiogroup"` wrapper
- Focus ring: `outline: 2px solid var(--green-light)` on all interactive elements
- Color contrast: all text on green backgrounds must pass WCAG AA

---

## WHAT NOT TO DO

- Do not use any CSS framework (Tailwind, Bootstrap, etc.)
- Do not use any component library (MUI, Ant Design, etc.)
- Do not use external icon packages
- Do not use `<form>` with default submit behavior — use `<div>` wrapper + button onClick
- Do not hardcode pixel values for font sizes — use `clamp()` or rem

---

## DELIVERY FORMAT

Output every file in full, in this order:
1. package.json
2. tsconfig.json
3. vite.config.ts
4. index.html
5. src/index.css
6. src/main.tsx
7. src/App.tsx + App.module.css
8. src/components/LeftPanel.tsx + LeftPanel.module.css
9. src/components/StepIndicator.tsx + StepIndicator.module.css
10. src/components/GenderToggle.tsx + GenderToggle.module.css
11. src/components/ContactForm.tsx + ContactForm.module.css
12. src/components/Footer.tsx + Footer.module.css

Each file: full path as a comment on line 1, then complete file content. No truncation, no "...rest of file" shortcuts.