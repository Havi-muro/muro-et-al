# Muro et al. Papers

An Academic Pages site for sharing research papers and preprints. The website is configured for the `Havi-muro/muro-et-al` GitHub Pages project site.

## Add a paper

Create a Markdown file in `_publications/`, for example `_publications/2026-01-01-example-paper.md`:

```yaml
---
title: "Paper title"
collection: publications
category: manuscripts
date: 2026-01-01
venue: "Journal or conference"
paperurl: "/muro-et-al/files/paper.pdf"
citation: "Author(s). (Year). Paper title. Journal or conference."
excerpt: "A short summary of the paper."
---

Add an abstract or other details here.
```

Add the linked PDF and any supplementary materials to `files/`. Use `books`, `manuscripts`, or `conferences` for the publication category.

## Preview locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000/muro-et-al/> to preview the site.

## Publish

In the repository's GitHub Pages settings, select **GitHub Actions** as the deployment source. The site URL and project path are configured in `_config.yml`.
