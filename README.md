# Jocelyne Lioe — Multi-Portfolio Site

One domain, one repo, three portfolios. This is a plain static site (HTML/CSS/JS,
no build step) — ready to push to a GitHub Pages repo as-is.

## Structure

```
index.html                  ← Hub/landing page: picks CS, Arts, or Theatre
assets/
  css/base.css               ← Shared navy/plum/Sour Gummy theme (hub, CS, Arts)
  css/theatre.css            ← Separate playbill/marquee theme (Theatre only)
  js/nav.js                  ← Navbar scroll + mobile menu + lightbox (hub, CS, Arts)
  js/theatre.js              ← Mobile menu + lightbox (Theatre)
  img/                       ← Put your photos/logos here
  files/                     ← Put your resume PDFs here (see README.txt inside)

cs/index.html                ← Computer Science portfolio (ONE page, anchor nav:
                                 Home / About Me / Experience / Projects / Skills / Resume)
                                 Organization modeled on cheryllao.me

arts/                         ← Arts portfolio (multi-page, organization modeled
  index.html                     on joedrakeford.com)
  about.html
  media.html                  ← Overview linking to the 4 sub-galleries below
  media/digital-art.html
  media/logos.html
  media/promotional-materials.html
  media/videos.html
  contact.html
  resume.html

theatre/                      ← Theatre portfolio (multi-page, organization +
  index.html                     look modeled on noahmartinez.org — deliberately
  about-me.html                  a different visual identity: charcoal/maroon/
  headshot-resume.html           marquee-gold, Playfair Display serif, "marquee
  media.html                     light" divider as the signature visual element)
  gallery.html
  contact-me.html
```

## Why this organization

- **CS** stays a single scrolling page with anchor links (`#about`, `#projects`, etc.),
  same as cheryllao.me — good for a portfolio you want a recruiter to skim top-to-bottom.
- **Arts** is broken into real separate pages, with Home doubling as a project/work
  grid (like joedrakeford.com), and Media split into its own landing page plus four
  dedicated sub-galleries so each medium (digital art, logos, promo, video) gets room
  to breathe.
- **Theatre** is the most different on purpose — its own color palette, typography,
  and nav style (a clean sticky bar instead of the navy hide-on-scroll bar), while
  still sharing the same underlying HTML patterns (cards, grids, a lightbox) so it's
  just as easy to maintain.

## What you still need to do

1. **Photos/art/headshots**: every dashed-border box that says "Add your photo here" /
   "Piece 1" / etc. is a placeholder. Replace the `<div class="img-placeholder">...</div>`
   with a real `<img src="..." alt="...">` (for gallery pages, keep `class="lightbox-img"`
   on the `<img>` so clicking it opens the full-size modal).
2. **Resume PDFs**: drop your 3 resumes into `assets/files/` using the filenames
   referenced on each Resume page (see `assets/files/README.txt`), or update the
   `src`/`href` in the HTML to match your own filenames.
3. **Text content**: every `[bracketed placeholder]` is meant to be replaced with your
   own words — bio, project descriptions, experience bullets, etc.
4. **Contact info**: swap `youremail@example.com` and the social links in each
   footer/contact page for your real accounts. The two contact forms
   (`arts/contact.html`, `theatre/contact-me.html`) point at a placeholder
   Formspree endpoint — sign up free at formspree.io and swap in your form ID so
   submissions actually reach your inbox (GitHub Pages can't run server code).
5. **Favicon**: add a real `favicon.ico` to `assets/img/`.

## Deploying to GitHub Pages

1. Create a repo (e.g. `yourusername.github.io` for a root domain, or any name for
   a project site).
2. Push everything in this folder to the repo root.
3. In the repo's Settings → Pages, set the source to the `main` branch, root folder.
4. If you buy a custom domain, add a `CNAME` file at the repo root containing just
   your domain (e.g. `jocelynelioe.com`) and point your domain's DNS at GitHub Pages —
   no other changes needed since all links in this site are relative.
