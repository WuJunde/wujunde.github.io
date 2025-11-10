# Junde Wu's Personal Website

A modern personal website built with Next.js, TypeScript, and Tailwind CSS. This site is based on [Elijah Kurien's personal website template](https://github.com/elijah0528/personal-website).

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Build

```bash
npm run build
npm start
```

## 📝 Customization

### Personal Information

Update your personal information in the following files:

1. **lib/data.ts** - Edit experience and projects
2. **app/page.tsx** - Update introduction text and social links
3. **app/layout.tsx** - Update metadata and SEO information

### Blog Posts

Add new blog posts in `app/blog/content/` as `.mdx` files with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: "Jan 1, 2025"
description: "Brief description"
slug: "your-post-slug"
---

Your content here...
```

### Avatar

Replace `public/avatar.png` with your own avatar image.

## 📦 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** MDX with gray-matter
- **Font:** DM Sans

## 🙏 Credits

Website design and template by [Elijah Kurien](https://github.com/elijah0528/personal-website)
