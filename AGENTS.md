# Repository guide

## Project layout

Dream is a Hugo theme. The repository root is not a standalone blog.

- `layouts/` contains Hugo templates, partials, and Markdown render hooks.
- `src/input.css` contains Tailwind CSS and daisyUI styles.
- `src/js/` contains the browser JavaScript sources.
- `assets/css/output.css` and `assets/js/` contain tracked build output used by Hugo.
- `assets/images/` contains bundled images.
- `archetypes/` contains content templates, and `i18n/` contains translations.
- `hugo.example.toml` documents the example site configuration.
- `docs/` is the separate Next.js and Nextra documentation site.
- `docs/content/` contains the user documentation.

## Make changes

Edit CSS and JavaScript in `src/`, then regenerate the matching tracked assets.
Do not edit generated CSS or JavaScript directly.
From the repository root, use `pnpm run css` for CSS and `pnpm run js` for JavaScript.
Use `pnpm run build` for both, or `pnpm run watch` during development.
Rebuild CSS when template changes introduce or remove Tailwind or daisyUI classes.
Review the generated diff alongside the source diff.

Keep configuration names and defaults consistent with `hugo.example.toml` and `docs/content/`.
Write documentation in English and link existing guides instead of copying them.
Follow `.editorconfig` and `.prettierrc` for formatting.

## GitHub release notes

Use [v3.19.0](https://github.com/g1eny0ung/hugo-theme-dream/releases/tag/v3.19.0) as an example of the opening Note and change list.

1. Start the release body with a GitHub Markdown `> [!NOTE]` alert. Acknowledge AI assistance when it contributed to the release and link to [open an issue](https://github.com/g1eny0ung/hugo-theme-dream/issues/new).
2. Use the version entry in [CHANGELOG.md](docs/content/CHANGELOG.md) for the body. Keep the applicable `### Added`, `### Changed`, and `### Fixed` headings. Group related changes and explain what users will notice or need to do when upgrading. Summarize relevant dependency upgrades in one bullet. Use absolute links to the published documentation.
3. End with `**Full Changelog**: https://github.com/g1eny0ung/hugo-theme-dream/compare/v3.18.0...v3.19.0` on its own line. Substitute the previous and new release tags for the example tags.

## Dependencies and caches

Use Node.js 24 for local development to match the documentation CI.
The root and `docs/` are separate pnpm packages, each with its own lockfile.
Run dependency commands in the package you are changing.
Use `pnpm install --frozen-lockfile` when no dependency update is intended.
Respect the `packageManager` version declared in `docs/package.json` for documentation work.

Before installing dependencies or building, inspect the configured and effective cache paths.
Reuse existing project caches or tool defaults, including the shared pnpm store and Hugo cache.
Do not create a dependency cache for each task, branch, worktree, or agent.
Do not put dependency download caches in a temporary verification directory.
If a shared cache is not writable, check for an existing writable shared cache first.
Request access to the required cache directory when needed.
Only use an exception for an unavailable or damaged shared cache, or an explicit cold-cache check.
Record the reason, path, and cleanup plan for any exception.
Pass the chosen cache paths to any delegated work.
Clean up unused task-specific outputs and exception caches when finished.
Leave shared caches, source files, and backups intact. Do not run a global Docker prune.

## Verify the affected behavior

Do not add repository tests, test fixtures, test scripts, test frameworks, or test dependencies
unless the user explicitly requests them.
Temporary verification scripts and fixtures may live outside the repository.

Choose checks that match the change. Prose-only changes need link and command checks.
For asset changes, run the matching root build command and inspect its output.
For documentation site changes, run `pnpm run build` from `docs/`.
The documentation build exports static files to `docs/out/`.

For Hugo templates, configuration, or browser behavior, use a separate Hugo site with content.
Configure that site to load this checkout as its theme and use Hugo Extended.
Run Hugo from the site directory. Use `hugo server -D` when previewing draft posts.
Check affected pages and interactions in a browser when the change affects their behavior.

Report which checks actually ran and what they verified.
Distinguish an asset build, a Hugo render, and a browser check.
Do not claim runtime validation for a documentation-only check.
