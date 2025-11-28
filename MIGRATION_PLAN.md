# Migration Guide: rumrivermn.com to rumriverweddingbarn.com

This document outlines the steps to redirect traffic from the legacy site (`rumrivermn.com`) to the new site (`rumriverweddingbarn.com`) while preserving SEO value.

## Strategy
We will use **301 (Permanent) Redirects**. This tells Google that the content has permanently moved to the new domain, passing the ranking authority to the new pages.

## Mapping Table

| Legacy Path (rumrivermn.com) | New Path (rumriverweddingbarn.com) | Content |
| :--- | :--- | :--- |
| `/` | `/` | Homepage |
| `/contact-us/` | `/contact` | Contact Page |
| `/location/` | `/location` | Location/Map |
| `/history/` | `/history` | History |
| `/photo-gallery/` | `/gallery` | Photo Gallery |
| `/videos/` | `/gallery` | Videos (Merged into Gallery) |
| `/testimonials/` | `/testimonials` | Testimonials |
| `/leave-a-review/` | `/testimonials` | Leave Review (Merged) |
| `/the-property/` | `/property` | Property Overview |
| `/rental-info/` | `/contact` | Pricing/Info (Merged into Contact) |
| `/featured-weddings/` | `/real-weddings` | Blog/Real Weddings |
| `/wedding-event-venue/` | `/events` | Weddings |
| `/engagement-party-venue/` | `/events` | Engagement Parties |
| `/birthday-party-venue/` | `/events` | Birthday Parties |
| `/graduation-event-venue/` | `/events` | Graduations |
| `/holiday-party-event-venue/` | `/events` | Holiday Parties |

## Implementation Instructions

### Option 1: If the old site is on Netlify (netlify.toml)
Add the following block to the `netlify.toml` file of the **OLD** site (`rumrivermn.com`):

```toml
# 301 Redirects to New Domain

[[redirects]]
  from = "/contact-us/*"
  to = "https://rumriverweddingbarn.com/contact"
  status = 301
  force = true

[[redirects]]
  from = "/location/*"
  to = "https://rumriverweddingbarn.com/location"
  status = 301
  force = true

[[redirects]]
  from = "/history/*"
  to = "https://rumriverweddingbarn.com/history"
  status = 301
  force = true

[[redirects]]
  from = "/photo-gallery/*"
  to = "https://rumriverweddingbarn.com/gallery"
  status = 301
  force = true

[[redirects]]
  from = "/videos/*"
  to = "https://rumriverweddingbarn.com/gallery"
  status = 301
  force = true

[[redirects]]
  from = "/testimonials/*"
  to = "https://rumriverweddingbarn.com/testimonials"
  status = 301
  force = true

[[redirects]]
  from = "/leave-a-review/*"
  to = "https://rumriverweddingbarn.com/testimonials"
  status = 301
  force = true

[[redirects]]
  from = "/the-property/*"
  to = "https://rumriverweddingbarn.com/property"
  status = 301
  force = true

[[redirects]]
  from = "/rental-info/*"
  to = "https://rumriverweddingbarn.com/contact"
  status = 301
  force = true

[[redirects]]
  from = "/featured-weddings/*"
  to = "https://rumriverweddingbarn.com/real-weddings"
  status = 301
  force = true

[[redirects]]
  from = "/wedding-event-venue/*"
  to = "https://rumriverweddingbarn.com/events"
  status = 301
  force = true

[[redirects]]
  from = "/engagement-party-venue/*"
  to = "https://rumriverweddingbarn.com/events"
  status = 301
  force = true

[[redirects]]
  from = "/birthday-party-venue/*"
  to = "https://rumriverweddingbarn.com/events"
  status = 301
  force = true

[[redirects]]
  from = "/graduation-event-venue/*"
  to = "https://rumriverweddingbarn.com/events"
  status = 301
  force = true

[[redirects]]
  from = "/holiday-party-event-venue/*"
  to = "https://rumriverweddingbarn.com/events"
  status = 301
  force = true

# Real Wedding Blog Redirects (Root HTML pages)
[[redirects]]
  from = "/anthony-and-linnea.html"
  to = "https://rumriverweddingbarn.com/real-weddings/anthony-and-linnea"
  status = 301
  force = true

[[redirects]]
  from = "/loria-and-jason-rolstad-agape.html"
  to = "https://rumriverweddingbarn.com/real-weddings/loria-and-jason-rolstad-agape"
  status = 301
  force = true

[[redirects]]
  from = "/mattea-courtney.html"
  to = "https://rumriverweddingbarn.com/real-weddings/mattea-courtney-photo-gallery"
  status = 301
  force = true

[[redirects]]
  from = "/kyle-carrie.html"
  to = "https://rumriverweddingbarn.com/real-weddings/kyle-carrie"
  status = 301
  force = true

[[redirects]]
  from = "/emily-and-barron-nixon.html"
  to = "https://rumriverweddingbarn.com/real-weddings/emily-and-barron-nixon"
  status = 301
  force = true

[[redirects]]
  from = "/joshua-and-teri.html"
  to = "https://rumriverweddingbarn.com/real-weddings/joshua-and-teri"
  status = 301
  force = true

[[redirects]]
  from = "/reins-wedding.html"
  to = "https://rumriverweddingbarn.com/real-weddings/reins-wedding"
  status = 301
  force = true

[[redirects]]
  from = "/kerry-dominic.html"
  to = "https://rumriverweddingbarn.com/real-weddings/kerry-dominic"
  status = 301
  force = true

[[redirects]]
  from = "/rachel-and-vince.html"
  to = "https://rumriverweddingbarn.com/real-weddings/rachel-and-vince"
  status = 301
  force = true

[[redirects]]
  from = "/erin-kate.html"
  to = "https://rumriverweddingbarn.com/real-weddings/erin-kate"
  status = 301
  force = true

[[redirects]]
  from = "/kage.html"
  to = "https://rumriverweddingbarn.com/real-weddings/kage"
  status = 301
  force = true

[[redirects]]
  from = "/dave-kayla.html"
  to = "https://rumriverweddingbarn.com/real-weddings/dave-kayla"
  status = 301
  force = true

[[redirects]]
  from = "/jenna-and-steven-tschirgi.html"
  to = "https://rumriverweddingbarn.com/real-weddings/jenna-and-steven-tschirgi"
  status = 301
  force = true

[[redirects]]
  from = "/nick-and-kayla.html"
  to = "https://rumriverweddingbarn.com/real-weddings/nick-and-kayla"
  status = 301
  force = true

[[redirects]]
  from = "/allison-and-will.html"
  to = "https://rumriverweddingbarn.com/real-weddings/allison-and-will"
  status = 301
  force = true

[[redirects]]
  from = "/james-and-denise-allen.html"
  to = "https://rumriverweddingbarn.com/real-weddings/james-and-denise-allen"
  status = 301
  force = true

[[redirects]]
  from = "/casey-garret.html"
  to = "https://rumriverweddingbarn.com/real-weddings/casey-garret"
  status = 301
  force = true

[[redirects]]
  from = "/kristine-leuze.html"
  to = "https://rumriverweddingbarn.com/real-weddings/kristine-leuze"
  status = 301
  force = true

# Catch-all Redirect (Must be last)
[[redirects]]
  from = "/*"
  to = "https://rumriverweddingbarn.com/:splat"
  status = 301
  force = true
```

### Option 2: If the old site is WordPress (Apache/htaccess)
Add this to the `.htaccess` file in the root directory:

```apache
RewriteEngine On
RewriteBase /

# Specific Page Redirects
RewriteRule ^contact-us/?$ https://rumriverweddingbarn.com/contact [L,R=301]
RewriteRule ^location/?$ https://rumriverweddingbarn.com/location [L,R=301]
RewriteRule ^history/?$ https://rumriverweddingbarn.com/history [L,R=301]
RewriteRule ^photo-gallery/?$ https://rumriverweddingbarn.com/gallery [L,R=301]
RewriteRule ^videos/?$ https://rumriverweddingbarn.com/gallery [L,R=301]
RewriteRule ^testimonials/?$ https://rumriverweddingbarn.com/testimonials [L,R=301]
RewriteRule ^leave-a-review/?$ https://rumriverweddingbarn.com/testimonials [L,R=301]
RewriteRule ^the-property/?$ https://rumriverweddingbarn.com/property [L,R=301]
RewriteRule ^rental-info/?$ https://rumriverweddingbarn.com/contact [L,R=301]
RewriteRule ^featured-weddings/?$ https://rumriverweddingbarn.com/real-weddings [L,R=301]
RewriteRule ^wedding-event-venue/?$ https://rumriverweddingbarn.com/events [L,R=301]
RewriteRule ^engagement-party-venue/?$ https://rumriverweddingbarn.com/events [L,R=301]
RewriteRule ^birthday-party-venue/?$ https://rumriverweddingbarn.com/events [L,R=301]
RewriteRule ^graduation-event-venue/?$ https://rumriverweddingbarn.com/events [L,R=301]
RewriteRule ^holiday-party-event-venue/?$ https://rumriverweddingbarn.com/events [L,R=301]

# Redirect everything else to the new homepage
RewriteRule ^(.*)$ https://rumriverweddingbarn.com/ [L,R=301]
```

### Option 3: If the old site is WordPress (Plugin)
1. Install the "Redirection" plugin.
2. Go to Tools > Redirection.
3. Add new redirects mapping the "Source URL" (from the table) to the "Target URL" (full https path).

## Final Step
Once redirects are active, use **Google Search Console** to:
1. Verify the new domain (`rumriverweddingbarn.com`).
2. Use the "Change of Address" tool to tell Google about the move.
