# Simon Tyler Portfolio

A modern, technical portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Design Aesthetic

Inspired by Jon Way Studio with:
- Technical typography (Neue Haas Grotesk + Input Mono)
- Tight spacing and precise layout
- Rounded border frames
- Subtle grid patterns
- Black background with blue accent color
- Minimalist, data-driven interface

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage with personal statement
│   ├── work/
│   │   └── page.tsx          # All projects overview
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── layout.tsx            # Root layout with fonts
│   └── globals.css           # Global styles
├── components/               # Reusable components (add as needed)
├── public/
│   └── fonts/               # Font files (need to add)
└── lib/                     # Utility functions
```

## Fonts Setup

The project is configured to use:
- **Neue Haas Grotesk** (Display & Text)
- **Input Mono** (Technical/monospace elements)

### Adding Fonts

1. Add your font files to `public/fonts/`:
   - `NeueHaasDisplay-Roman.woff2`
   - `NeueHaasDisplay-Medium.woff2`
   - `NeueHaasDisplay-Bold.woff2`
   - `InputMono-Regular.woff2`

2. The fonts are already configured in `app/layout.tsx`

### Font Fallbacks

If you don't have the fonts immediately, the site will use system fonts as fallbacks.

## Adding Project Images

1. Add images to `public/projects/[project-name]/`
2. Update the project cards in pages to use real images

Example:
```tsx
<Image 
  src="/projects/maxwell/hero.jpg" 
  alt="Maxwell UI"
  width={1200}
  height={675}
  className="w-full h-full object-cover"
/>
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the accent color:
```typescript
colors: {
  accent: {
    DEFAULT: '#3B82F6', // Change this
    light: '#60A5FA',
    dark: '#2563EB',
  },
}
```

### Content

1. **Homepage**: Edit `app/page.tsx`
   - Update personal statement
   - Add/remove featured projects
   - Update coordinates and contact info

2. **Work Page**: Edit `app/work/page.tsx`
   - Add/edit projects in the `projects` array

3. **About Page**: Edit `app/about/page.tsx`
   - Update bio, experience, and current status

4. **Contact Page**: Edit `app/contact/page.tsx`
   - Update email and social links

## Creating Project Pages

To add individual project pages (e.g., `/work/maxwell`):

1. Create `app/work/[slug]/page.tsx`
2. Use the slug from the URL to fetch project data
3. Build out the case study layout

Example structure provided in `/work/maxwell` folder (to be created).

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Environment Variables

No environment variables needed for the base setup.

## Next Steps

- [ ] Add real font files to `public/fonts/`
- [ ] Add project images
- [ ] Update personal information (email, social links)
- [ ] Create individual project pages
- [ ] Add Maxwell interactive components
- [ ] Connect to CMS (optional, future)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: next/font for optimization
- **Deployment**: Vercel

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Private portfolio site.
