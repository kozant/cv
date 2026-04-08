# My CV

A modern, responsive CV website built with React, TypeScript, and Vite. Features PDF export functionality and dark mode support.

## Features

- 📄 **PDF Export** — Download your CV as a PDF file with proper formatting
- 🌓 **Dark Mode** — Automatic color scheme based on system preferences
- 📱 **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast** — Built with Vite for optimal performance
- 🎨 **Clean Design** — Modern, minimalist UI with professional styling
- ♿ **Accessible** — Semantic HTML and ARIA attributes

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — Type-safe development
- **Vite** — Build tool and dev server
- **html2pdf.js** — PDF export
- **CSS** — Custom styling with CSS variables

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 9+

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
pnpm build
```

Outputs to `dist/` directory.

### Preview

```bash
pnpm preview
```

## Project Structure

```
src/
├── components/        # Reusable React components
├── cv/               # CV data and types
├── App.tsx           # Main app component
├── index.css         # Global styles
├── main.tsx          # Entry point
└── exportPdf.ts      # PDF export logic
```

## Customization

Edit your CV data in [`src/cv/data.ts`](src/cv/data.ts):

```typescript
export const cvProfile: CvProfile = {
  name: "Your Name",
  title: "Your Title",
  // ... other fields
};
```

### Adding Sections

To add a new section:

1. Create a component in `src/components/`
2. Add data to `src/cv/data.ts`
3. Import and render in [`src/App.tsx`](src/App.tsx)

## Deployment

This project is configured for GitHub Pages. Set the `VITE_BASE` environment variable during build:

```bash
VITE_BASE=/repository-name/ pnpm build
```

Or configure it in your GitHub Actions workflow (see [.github/workflows/pages.yml](.github/workflows/pages.yml)).

## License

MIT