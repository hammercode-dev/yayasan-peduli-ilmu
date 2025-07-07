# Yayasan Peduli Ilmu

A modern donation platform for **Yayasan Peduli Ilmu**, designed to support multilingual communities, simplify fundraising, and ensure transparency for educational initiatives.

---

## 🚀 Getting Started

```bash
npm install       # Install dependencies
npm dev           # Start development server
npm build         # Production build
npm start         # Start production server
npm test          # Run unit/integration tests
npm format        # Format codebase with Prettier
```

Make sure to create `.env.example` into `.env` and update your Supabase keys.

---

## 🧩 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI/UX**: [Tailwind CSS](https://tailwindcss.com), [Headless UI](https://headlessui.com), [Lucide Icons](https://lucide.dev)
- **i18n**: [next-intl v4](https://next-intl-docs.vercel.app)
- **Backend**: [Supabase](https://supabase.com)
- **Testing**: [Jest](https://jestjs.io), [Testing Library](https://testing-library.com)
- **Linting/Formatting**: ESLint, Prettier, Husky (with commitlint)

---

## 📚 Developer Docs

We maintain internal documentation in the [`/docs`](./docs) folder:

- [`next-intl.md`](./docs/next-intl.md) — How to use `next-intl` across routes and components
- [`supabase.md`](./docs/supabase.md) — Supabase schemas, auth rules, and storage usage
- [`helpers.md`](./docs/helpers.md) - globally reusable utility functions and custom hooks

> Docs help onboard future devs and maintain consistency across the team.

---

## 🧪 Testing

```bash
npm run test          # Run all tests once
npm run test:watch    # Watch mode
```

We use:

- **Jest**: Test runner
- **@testing-library/react**: Component + DOM testing
- **Mocking**: For next-intl, Supabase, router, etc.

Tests are colocated next to their source files as `*.test.tsx`.

---

## 📦 Environment Variables

```env
# .env.example
NEXT_PUBLIC_SUPABASE_URL=https://<your-project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

> Use `.env.local` for development and keep your secrets safe.

---

## ✅ Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for consistent changelogs and CI/CD pipelines.

Example:

```bash
feat(donation): redesign donation card layout and improve logic
fix(timeline): correct date formatting issue in program timeline
```

Setup: Husky + Commitlint

---

## 👥 Contributing

- Use feature folders and follow component separation
- Write tests for logic-heavy components or hooks
- Update `/docs` if adding/removing architecture-related decisions

---

## 📝 License

MIT License © Yayasan Peduli Ilmu 2025

---

> Built with ❤️ by a small team of dedicated volunteers. Contributions and feedback welcome!
