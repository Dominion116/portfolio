
# Oyewale Dominion Portfolio

This repository powers a personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It presents professional experience, selected work, skills, and open-source contributions in a fast, responsive interface that is designed to be easy to maintain and straightforward to customize.

The site is structured around a small set of focused sections rather than a sprawling template. The main navigation keeps attention on the most useful entry points: Skills, Experience, Contributions, and Contact. Additional content is organized through configuration files so the portfolio can be updated without rewriting the app.

## What It Includes

- A polished portfolio home page with animated presentation and clear section hierarchy
- Dedicated pages for skills, experience, contributions, projects, resume, and contact
- A responsive navigation and layout that work well across desktop and mobile
- A reusable contact form backed by server-side form handling and validation
- SEO-friendly metadata, sitemap support, and a PWA manifest
- Theme support through the existing Tailwind and UI component setup
- Analytics-ready environment variables for measurement and tracking

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui and Radix UI primitives
- Framer Motion for motion and transitions
- React Hook Form, Zod, and server actions for form handling
- Vercel Analytics and Google Analytics support

## Project Structure

The codebase is organized around configuration-first content and reusable UI pieces:

- `config/site.ts` defines the site identity, links, and SEO metadata
- `config/pages.ts` defines page titles and descriptions
- `config/skills.ts`, `config/experience.ts`, `config/contributions.ts`, and `config/projects.ts` hold the portfolio content
- `app/(root)/` contains the public-facing routes and shared marketing layout
- `components/` contains reusable navigation, layout, form, and content components
- `app/api/contact/route.ts` handles contact form submissions

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm, pnpm, or yarn

### Install

```bash
git clone https://github.com/<your-account>/<your-repo>.git
cd <your-repo>
npm install
```

### Configure Environment

Copy `.env.copy` to `.env` and populate the values for your setup:

```bash
cp .env.copy .env
```

The included variables are used for the contact form, analytics, and resume link:

- `GOOGLE_FORM_LINK`
- `GOOGLE_FORM_FIELD_ID_NAME`
- `GOOGLE_FORM_FIELD_ID_EMAIL`
- `GOOGLE_FORM_FIELD_ID_MESSAGE`
- `GOOGLE_FORM_FIELD_ID_SOCIAL`
- `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID`
- `NEXT_PUBLIC_RESUME_LINK`

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Updating Content

Most of the visible content lives in the `config/` directory, which keeps the portfolio easy to update.

- Edit `config/site.ts` to change the owner name, social links, and metadata
- Update `config/pages.ts` to adjust page copy and metadata descriptions
- Modify the section data files in `config/` to refresh skills, experience, projects, or contributions
- Tweak `app/(root)/layout.tsx` and the components in `components/common/` if you want to adjust navigation or layout behavior

Because the content is data-driven, you can make meaningful changes without touching the rendering logic in most cases.

## Common Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Contributing

Contributions are welcome. If you want to improve the portfolio, keep changes focused and consistent with the existing structure.

1. Create a feature branch.
2. Make your changes and verify them locally.
3. Run `npm run build` and, when relevant, `npm run lint`.
4. Open a pull request with a short summary of the change and any setup notes reviewers should know.

Please avoid introducing unrelated refactors in the same pull request so changes stay easy to review.

## Deployment

The project is ready to deploy on Vercel or any platform that supports Next.js 16. Production builds are handled with the standard Next.js commands, so deployment usually only requires setting the environment variables from `.env.copy` in your hosting provider.

## License

This project is released under the [MIT License](LICENSE).
