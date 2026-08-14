# AI Development Instructions

## Package management

- Use **pnpm** for all dependency and script commands.
- Respect the version declared in `package.json` under `packageManager`.
- Use `pnpm install`, `pnpm add`, `pnpm remove`, and `pnpm run <script>`.
- Do not use npm, Yarn, or Bun, and do not create their lockfiles.
- Keep `pnpm-lock.yaml` in sync whenever dependencies change.
- Prefer existing package scripts over invoking tools directly.

## Working practices

- Inspect the existing code and configuration before making changes.
- Make focused changes that match the current Next.js, React, and TypeScript conventions.
- Preserve strict type safety; do not introduce `any` or suppress errors without a documented reason.
- Prefer Server Components by default. Add `"use client"` only when browser APIs, state, effects, or event handlers require it.
- Reuse existing styles and patterns before introducing new abstractions or dependencies.
- Never expose secrets in source code or commit environment files containing credentials.
- Run the relevant checks after changes. At minimum, use `pnpm run lint` and `pnpm run format:check`; use `pnpm run build` when the change can affect compilation or production behavior.
- Do not modify generated files such as `next-env.d.ts` or files under `.next/`.
