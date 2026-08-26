You are a senior frontend engineer. Build a pixel-faithful React + TypeScript implementation of the Zenzele Itereleng Wi-Fi captive portal registration page shown in the reference screenshot. Deliver a complete, runnable project.

---

## REFERENCE DESIGN DESCRIPTION

The page is a two-column layout on desktop, single-column on mobile.

LEFT PANEL (roughly 52% width):
- Full-height, vivid green landscape photo as background (use a green gradient placeholder: linear-gradient(160deg, #2d6a4f 0%, #52b788 40%, #74c69d 70%, #b7e4c7 100%))
- Large white Wi-Fi signal arc icon centered upper-left quadrant (SVG arcs, no fill, stroke-based)
- Bottom-left: bold white display text, three lines:
  Line 1: "Welcome to"
  Line 2: "Zenzele Itereleng Wi-Fi."
  Line 3: "Connect to your community."
  Font: large (clamp 2rem–4rem), weight 800, line-height 1.1

RIGHT PANEL (roughly 48% width):
- White background
- Top: Zenzele Itereleng logo — a stylized green tree SVG beside the wordmark "zenzele itereleng" in dark green, two lines
- Top-right: "Stay Connected" button with a Wi-Fi icon, green background (#2d6a4f), white text, rounded pill shape
- Step progress indicator below logo:
  Step 1 "Contact Info" — active (filled green circle with "1.", connected by a green progress bar)
  Step 2 "About You" — inactive (outlined grey circle with "2.")
- Form fields:
  - "Mobile Number" text input with a person/user icon on the left inside the input
  - "E-mail" text input with an envelope icon on the left inside the input
  - Both inputs: rounded corners (~8px), 1px #d0d0d0 border, padding 14px 14px 14px 48px, full width
- Gender selector: two pill-shaped toggle buttons side by side
  - "♂ Male" — currently selected (dark green bg #2d6a4f, white text)
  - "♀ Female" — unselected (white bg, #2d6a4f border and text)
- Age Range: full-width dropdown "Choose…" with a chevron-down icon, same border style as inputs
- Two checkboxes below:
  - "I consent to receiving marketing communication from this venue and/or business partners." — checked
  - "I have read and accept the Wi-Fi Terms of use (required)." — checked, with "Wi-Fi Terms of use" as a green underlined link
- "Continue →" CTA button: full width, #2d6a4f green background, white text, rounded ~8px, padding 16px, font-weight 700
- Bottom footer bar (full width, dark #1a2e1a background):
  Three columns with icons:
  - 🎧 "Need Help? / Contact our support team"
  - 📞 "WhatsApp / +27 12 345 6789"
  - ✉ "Email / support@guestwifi.co.za"
  - Copyright: "© 2024 Guest Wi-Fi. All rights reserved."

---

## PROJECT STRUCTURE TO GENERATE