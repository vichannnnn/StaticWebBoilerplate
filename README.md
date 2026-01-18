# Static Web Boilerplate

A minimal static website boilerplate with built-in English/Japanese internationalization (i18n) support, perfect for personal sites and portfolios.

## Features

- **Static Export**: Fully static site compatible with Cloudflare Pages, Vercel, Netlify, etc.
- **i18n Support**: English and Japanese translations out of the box using next-intl
- **Modern Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **UI Components**: Material UI icons and custom components
- **Language Toggle**: Built-in language switcher

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production (static export)
pnpm build

# Preview production build
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customizing Content

All text content is managed through translation files:

- `messages/en.json` - English content
- `messages/ja.json` - Japanese content

### Key Sections to Update

1. **Metadata**: Update `Metadata.Index.title`, `Metadata.Index.description`, etc.
2. **Landing Page**: Edit `LandingPage.title_one` and description paragraphs
3. **Links**: Add your social links in `Links` section
4. **Footer**: Update contact info in `Footer.text`

### Code Files to Customize

- `src/components/Header/ButtonsRow.tsx` - Navigation button URLs
- `src/components/Header/Dropdown.tsx` - Mobile menu URLs
- `src/components/Footer/Footer.tsx` - Copyright name
- `src/app/(main)/[locale]/links/page.tsx` - Social link URLs
- `src/app/sitemap.ts` - Your domain name

## Project Structure

```
frontend/
├── messages/           # Translation files (en.json, ja.json)
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # React components
│   ├── i18n/          # i18n configuration
│   └── navigation.ts  # Navigation utilities
├── public/            # Static assets
└── tailwind.config.ts # Tailwind configuration
```

## Deployment (Cloudflare Pages)

1. Push your code to GitHub
2. Connect your repo to Cloudflare Pages
3. Configure build settings:
   - Build command: `pnpm build`
   - Build output directory: `out`
   - Root directory: `frontend`
4. Deploy

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with static export
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [Material UI](https://mui.com/) - UI components and icons

## Adding a New Language

1. Create a new translation file: `messages/[locale].json`
2. Update `src/i18n/routing.ts` to include the new locale
3. Update `generateStaticParams` in page files

## License

MIT
