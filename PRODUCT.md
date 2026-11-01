# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People in or near TP. Hồ Chí Minh who want a seasonal, hand-tied bouquet for a gift or home. They browse the catalog, optionally build a list, then place an order by inquiry form, Zalo, phone, or email — not by online checkout.

## Product Purpose

PML Flower is a Vietnamese marketing site for a small Saigon flower atelier. It showcases seasonal bouquets, the workshop’s point of view, and care guidance, then converts interest into a confirmed order through human follow-up. Success is a clear, trustworthy path from browsing to an inquiry the shop can fulfill.

## Positioning

A small-batch atelier that works with the season rather than against it: stems chosen for movement, color, and natural irregularity, tied by hand in limited weekly batches. The website introduces and collects requests; payment and fulfillment are confirmed offline (cash on delivery or bank transfer). Neighboring florists that sell standardized, always-available SKUs with cart checkout cannot truthfully claim this model.

## Operating Context

- Storefront routes: home, catalog with occasion filters (`/cua-hang`), bouquet detail (`/hoa/[slug]`), workshop story (`/xuong-hoa`), care (`/cham-soc`), contact/inquiry (`/lien-he`), and order list (`/danh-sach`).
- Content is managed in Sanity Studio (`/studio`); without a Sanity project id the site serves seed content from `sanity/lib/fallback.ts`.
- Inquiry is the conversion ritual: list → form / Zalo / phone / email → shop confirms stock, delivery day, and payment method.
- Delivery focus: inner-city TP.HCM same-day when ordered before 14:00; outer areas arranged case by case.

## Capabilities and Constraints

- Catalog of bouquets with seasons, occasions, stems, care tips, and availability.
- Site settings (brand, contact, hours, delivery note) and editable home / studio / care content via Sanity.
- No online payments or cart checkout on the website.
- UI copy is Vietnamese.
- Open: whether production contact details and catalog will replace the seed fallback when Sanity is connected (seed values must not be treated as verified public claims until replaced).

## Brand Commitments

- Name: **PML Flower**
- Tagline in seed content: “Hoa theo mùa, buộc tay từng bó”
- Voice: warm, seasonal, craft-led Vietnamese; favors natural irregularity over factory uniformity
- Personality: small atelier, not mass florist

## Evidence on Hand

- Seed catalog, care notes, home and studio copy in `sanity/lib/fallback.ts`
- Marketing imagery under `public/` (e.g. banner and floral still-life assets)
- README documents the inquiry-only commerce model and Sanity wiring
- No real customer testimonials, press, or verified production contact details in the repo; do not invent them

## Product Principles

1. Season leads the offer — catalog and copy follow what is beautiful now, not a fixed year-round SKU list.
2. Human confirmation closes the sale — the site persuades and collects intent; the atelier confirms.
3. Craft over uniformity — irregular stems and small batches are features, not defects to hide.
4. Vietnamese-first clarity — every primary visitor path stays readable and actionable in Vietnamese.
5. Honest claims only — prices, contact, delivery, and social proof come from real CMS or confirmed assets, never fabricated filler.
