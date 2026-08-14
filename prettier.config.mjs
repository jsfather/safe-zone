/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
const config = {
  // Keep formatting deterministic across editors and operating systems.
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
  proseWrap: "preserve",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false,

  // Use the Tailwind v4 entry stylesheet for project-aware class sorting.
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./app/globals.css",
  tailwindFunctions: ["clsx", "cn", "cva", "twMerge"],
};

export default config;
