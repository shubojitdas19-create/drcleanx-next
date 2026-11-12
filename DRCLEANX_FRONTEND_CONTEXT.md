# DRCLEANX - FRONTEND ARCHITECTURE & AI CONTEXT

> **For the AI:** This document outlines the frontend architecture for "Dr Cleanx", a premium B2C e-commerce brand selling household cleaning products and hygiene solutions based in West Bengal. 

## Business Context & Contact
- **Brand Name:** DrcleanX
- **Website:** Drcleanx.com
- **Products:** Premium home cleaning solutions, liquid detergents, dishwashers, floor cleaners, and hygiene products.
- **Audience:** Everyday consumers, families, and homemakers looking for safe, effective, and premium cleaning products.
- **Contact:** 
  - Phone: +91 3212458807
  - WhatsApp: +91 9832108395
  - Email: info@drcleanx.com
  - Location: Tarakeswar, Hooghly, West Bengal, 712410

## Design System Rules
- **Theme Vibe:** "Aqua & Crisp White". Bright, refreshing, premium, and trustworthy. DO NOT use dark, industrial, or moody aesthetics. 
- **UI Elements:** Use ample whitespace, soft elevated drop shadows on product cards, and large, friendly typography.
- **Corners:** Use `--radius` (0.75rem) for soft, friendly edges.
- **Product Display:** E-commerce cards must highlight product imagery prominently. Use bright, contrasting buttons (Aqua/Teal) for "Add to Cart".

## Proposed Directory Structure
```text
drcleanx-next
├── src
│   ├── app
│   │   ├── cart
│   │   ├── checkout
│   │   ├── shop
│   │   │   ├── [slug]       # Product details with vibrant image galleries
│   │   │   └── page.tsx     # Product listing with category filters
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx         # Bright Homepage (Hero, Best Sellers, Why Choose Us, Testimonials)
│   ├── components
│   │   ├── drcleanx         # Store-specific components (e.g., FloatingWhatsApp, TrustBadges)
│   │   └── ui               # Reusable Radix UI components