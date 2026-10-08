# AssessmentXntrova

## Xntrova homepage

A responsive Next.js homepage concept for Xntrova Technologies, built with the App Router and plain CSS.

Requires Node.js 20.9 or newer. This project was set up and built with Node.js 22.20.0.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Use `npm install` and `npm run dev` in Command Prompt, macOS, or Linux. `npm.cmd` avoids PowerShell's script execution policy block on the `npm.ps1` wrapper.

Open [http://localhost:3000](http://localhost:3000). Create a production build with `npm run build` and serve it with `npm start`.

## Implementation notes

- The layout adapts from desktop through tablet and mobile breakpoints. The mobile navigation, testimonial controls, smooth anchor links, and reduced-motion preference are supported.
- The lead form validates required fields in the browser and opens a prefilled email to `info@xntrova.com`. Connect it to a form endpoint or CRM before production if submissions should be delivered without the visitor's email client.
- Case study cards are concept examples; the metrics are illustrative and should be replaced with approved client results before publication.
- Brand identity and the core offering are based on the existing Xntrova site. The visual dashboard and graphic treatments are CSS/SVG, so no large stock images are required.
