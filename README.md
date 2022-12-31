# Astro Starter Kit

```
npm create astro@latest -- --template jmblog/astro-starter-kit
```

## Features

The following tools and integrations are included in this starter kit:

- ESLint, [`eslint-plugin-astro`](https://github.com/ota-meshi/eslint-plugin-astro) and [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) for linting your Astro code
- Prettier and [`prettier-plugin-astro`](https://github.com/withastro/prettier-plugin-astro) for formatting your Astro code
- Markuplint and [`@markuplint/astro-parser`](https://github.com/markuplint/markuplint/tree/dev/packages/@markuplint/astro-parser) for linting your markup
- Stylelint and [`stylelint-config-html`](https://www.npmjs.com/package/stylelint-config-html) for linting your CSS in Astro components
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) for generating a sitemap file
- [`astro-compress`](https://github.com/astro-community/astro-compress) for compressing HTML, CSS, JavaScript output
- [`astro-seo`](https://github.com/jonasmerlin/astro-seo) for making it easy to add SEO relevant tags
- [`astro-purgecss`](https://github.com/codiume/orbit/tree/main/packages/astro-purgecss) for removing unused CSS

## 🚀 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── *.astro
│   ├── layouts/
│   │   └── *.astro
│   └── pages/
│       └── *.astro
└── package.json
```

Check [the official documentation](https://docs.astro.build/en/core-concepts/project-structure/) for more details.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run lint`         | Run linters                                      |
| `npm run fix`          | Fix problems reported by linters                 |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
