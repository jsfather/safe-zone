# AI Development Instructions

## Package management

- Use **pnpm** for all dependency and script commands.
- Respect the version declared in `package.json` under `packageManager`.
- Use `pnpm install`, `pnpm add`, `pnpm remove`, and `pnpm run <script>`.
- Do not use npm, Yarn, or Bun, and do not create their lockfiles.
- Keep `pnpm-lock.yaml` in sync whenever dependencies change.
- Prefer existing package scripts over invoking tools directly.

## Language, direction, and typography

- Treat Persian (`fa`) as the default website language and write default user-facing copy in Persian.
- Keep the root document configured with `lang="fa"` and `dir="rtl"`.
- Use Yekan Bakh FaNum as the default sans-serif font through `next/font/local` and the `--font-yekan-bakh` CSS variable.
- Apply the `font-english-numbers` class when an element should use Yekan Bakh with English digit glyphs. The class changes the font variant only; add an explicit `dir="ltr"` separately when the content direction also needs to be left-to-right.
- Use the provided Yekan Bakh weight files instead of relying on synthetic browser weights.
- Build RTL-first layouts. Prefer logical properties and direction-aware Tailwind utilities such as `start`, `end`, `ms`, `me`, `ps`, and `pe` over physical left/right equivalents.
- Add bidirectional overrides only for content that is inherently left-to-right, such as code, email addresses, and some numeric identifiers.

## Working practices

- Inspect the existing code and configuration before making changes.
- Make focused changes that match the current Next.js, React, and TypeScript conventions.
- Preserve strict type safety; do not introduce `any` or suppress errors without a documented reason.
- Prefer Server Components by default. Add `"use client"` only when browser APIs, state, effects, or event handlers require it.
- Reuse existing styles and patterns before introducing new abstractions or dependencies.
- Never expose secrets in source code or commit environment files containing credentials.
- Run the relevant checks after changes. At minimum, use `pnpm run lint` and `pnpm run format:check`; use `pnpm run build` when the change can affect compilation or production behavior.
- Do not modify generated files such as `next-env.d.ts` or files under `.next/`.
