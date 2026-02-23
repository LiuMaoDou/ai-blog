# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

- This repository is a content-first static site built with **Zensical**.
- Markdown source content lives in `docs/`.
- `zensical.toml` is the central configuration file (site metadata, navigation, theme/features, extra assets).
- Static build output is generated into `site/`.
- GitHub Pages deployment is defined in `.github/workflows/docs.yml` and runs `zensical build --clean`, then publishes `site/`.
- `docs/CNAME` sets the custom domain (`ai-ip.xyz`) for GitHub Pages.
- `main.py` is a minimal placeholder script and is not part of the docs build pipeline.

## Architecture and structure

- **Content layer**: `docs/*.md`
  - Pages are authored as Markdown files with frontmatter (for icons and page metadata).
  - Navigation is explicitly defined in `zensical.toml` under `[project].nav`, so filenames and paths must stay aligned with that config.
  - The nav includes files with spaces and non-ASCII names (for example `Context Engineering.md`, `OpenClaw(龙虾).md`), so exact filename matching matters.
  - `docs/markdown.md` exists but is not currently included in nav.
- **Presentation layer**: `zensical.toml`
  - Controls site identity (name, URL, author, copyright), nav hierarchy, theme palette, and feature toggles.
  - Loads custom CSS via `extra_css = ["extra.css"]`.
  - `docs/icon-randomizer.js` exists, but extra JavaScript is currently commented out in config (not active unless enabled).
- **Build/deploy layer**:
  - Local development and build use Zensical CLI (typically via `uv run`).
  - CI deploy via GitHub Actions (`.github/workflows/docs.yml`) on pushes to `main`/`master`.
  - CI installs `zensical` with `pip` and deploys the generated `site/` artifact.

## Common commands

### Setup

- Install/sync dependencies from `pyproject.toml` / `uv.lock`:
  - `uv sync`

### Develop and preview

- Show CLI help:
  - `uv run zensical --help`
- Start local docs server:
  - `uv run zensical serve`
- Start local docs server on a specific address/port:
  - `uv run zensical serve -a 127.0.0.1:8000`

### Build

- Build site output into `site/`:
  - `uv run zensical build`
- Clean rebuild (same style used in CI):
  - `uv run zensical build --clean`

### Python entrypoint (placeholder)

- Run the root Python script:
  - `uv run python main.py`

## Testing and linting

- There is currently **no test suite or lint/format tool configuration** in this repository (only `zensical` is declared in `pyproject.toml`).
- If pytest is added later:
  - Run all tests: `uv run pytest`
  - Run a single test: `uv run pytest path/to/test_file.py::test_name`

## Working conventions for this repo

- Treat `docs/` as source of truth and `site/` as generated output.
- Keep `zensical.toml` navigation entries in sync with Markdown file renames/moves.
- Be careful with filenames containing spaces and non-ASCII characters; they are referenced explicitly in nav config.
- Preserve `docs/CNAME` when making deployment/domain changes unless the domain itself is intentionally changed.
