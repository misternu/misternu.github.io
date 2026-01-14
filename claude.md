# Personal Website - timothymeixell.com

## Overview

Single-page personal website with 80s synthwave aesthetic combined with nature
elements (mountain silhouettes). Built with Jekyll, deployed via GitHub Pages.

## Technical Stack

- **Static Site Generator**: Jekyll
- **Styling**: Plain CSS (`_includes/styles.css`, inlined in HTML for performance)
- **Fonts**: Audiowide (name), Orbitron (headings/about text)
  with `font-display: swap` for optimal loading
- **Deployment**: GitHub Pages (main branch) + Cloudflare (SSL/CDN proxy)

## Design

### Aesthetic

- 80s synthwave color palette: neon pink (#ff006e), cyan (#00f5ff), purple (#a855f7)
- Animated gradient text on name
- Pulsing glow effects on profile image and contact box
- Neon pink mountain silhouette at bottom (dims on scroll)
- Tron-style perspective grid overlay
- CRT scanline effect
- Scroll-reveal animations for content

### Key Features

- Profile image with animated cyan glow
- Scroll indicator (animated down arrow)
- Content fades in on scroll
- Mountains dim gradually as user scrolls
- Contact box with pulsing cyan border

## Content Structure

### Main Page Sections

1. **Header**: Profile image, name, scroll indicator
2. **About**: Full-stack developer description (cyan Orbitron text, justified)
3. **Contact**: Email + call to action + social links (GitHub, LinkedIn)

### Professional Positioning

- Decade of experience
- Python and Ruby on Rails specialization
- Focus: backend architecture, API design
- Available for contract work and projects for the public good

### Portfolio Section

- Currently commented out in HTML
- Placeholder projects are in the code for when real projects are ready to showcase

## File Structure

### Active Files

- `index.html` - main page content
- `_includes/styles.css` - all styles (inlined in head for performance)
- `_layouts/site-default.html` - page layout + scroll JavaScript
- `_includes/site-head.html` - head section with inlined CSS
- `_includes/site-footer.html` - footer copyright
- `fonts/` - audiowide.woff2, orbitron.woff2 (locally hosted)
- `imgs/` - profile image, social icons, background assets

### Preserved Content

- `blog/_posts/` - 6 blog posts (2015-2017)
- `portfolio/_posts/` - 2 portfolio items (sudoku solver, survey widget)
- These are kept in repo but not linked/displayed on site

## Notes

- No navigation - single page site
- Blog/portfolio posts preserved but not displayed
- Clean, minimal structure with no unused dependencies
- Responsive design with mobile breakpoint at 768px

## Performance Optimizations

- CSS inlined in HTML to eliminate render-blocking requests
- Fonts use `font-display: swap` to show fallback text immediately
- Fonts loaded from local files (not external CDN)
- Cloudflare CDN/SSL for fast global delivery and HTTPS
- Minimal dependency chain: HTML → fonts in parallel
