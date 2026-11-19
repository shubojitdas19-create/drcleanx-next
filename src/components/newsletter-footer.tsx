import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const WHATSAPP_URL = "https://wa.me/919832108395";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function FacebookIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg fill="currentColor" height={size} viewBox="0 0 24 24" width={size} {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg fill="none" height={size} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" width={size} {...props}>
      <rect height="18" rx="5" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg fill="currentColor" height={size} viewBox="0 0 24 24" width={size} {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h3.96V21H3V9.75zM9.24 9.75h3.8v1.54h.05c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.63 4.74 6.05V21h-3.96v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21H9.24V9.75z" />
    </svg>
  );
}

function YouTubeIcon({ size = 17, ...props }: IconProps) {
  return (
    <svg fill="currentColor" height={size} viewBox="0 0 24 24" width={size} {...props}>
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9L15.5 12l-5.8 3.1z" />
    </svg>
  );
}

const sitemapGroups = [
  {
    title: "Shop",
    links: [
      { label: "All products", href: "/shop" },
      { label: "Best sellers", href: "/#best-sellers" },
      { label: "Categories", href: "/#categories" },
      { label: "Cart", href: "/cart" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Video reviews", href: "/#video-reviews" },
      { label: "Customer reviews", href: "/#customer-reviews" },
      { label: "Where to buy", href: "/#available-on" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQs", href: "/faq" },
      { label: "Track order", href: "mailto:info@drcleanx.com?subject=Order%20tracking%20request" },
      { label: "WhatsApp support", href: WHATSAPP_URL },
      { label: "Contact us", href: "mailto:info@drcleanx.com" },
    ],
  },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const socialLinks: { label: string; href: string; icon: ComponentType<IconProps> }[] = [
  { label: "DrCleanX on Facebook", href: "https://www.facebook.com/", icon: FacebookIcon },
  { label: "DrCleanX on Instagram", href: "https://www.instagram.com/", icon: InstagramIcon },
  { label: "DrCleanX on LinkedIn", href: "https://www.linkedin.com/", icon: LinkedInIcon },
  { label: "DrCleanX on YouTube", href: "https://www.youtube.com/", icon: YouTubeIcon },
  { label: "Chat with DrCleanX on WhatsApp", href: WHATSAPP_URL, icon: MessageCircle },
];

export function NewsletterFooter() {
  return (
    <>
      <section aria-labelledby="newsletter-title" className="newsletter-section" id="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-banner">
            <div className="newsletter-copy">
              <p className="newsletter-eyebrow">A little something for your first order</p>
              <h2 className="newsletter-title" id="newsletter-title">Join the Dr Cleanx Family</h2>
              <p className="newsletter-description">
                Subscribe for cleaning tips and get 10% off your first order.
              </p>
            </div>
            <div className="newsletter-signup">
              <form
                action="mailto:info@drcleanx.com?subject=Newsletter%20subscription"
                className="newsletter-form"
                encType="text/plain"
                method="post"
              >
                <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                <input
                  autoComplete="email"
                  className="newsletter-input"
                  id="newsletter-email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  type="email"
                />
                <button className="newsletter-submit" type="submit">Subscribe</button>
              </form>
              <p className="newsletter-guarantee">
                No spam, ever. Submitting opens an email draft to our team; this site does not store your address.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="site-footer-columns">
            <div className="footer-brand-column">
              <Link aria-label="DrCleanX home" className="footer-brand" href="/">
                <Image alt="DrCleanX" className="footer-logo" height={120} src="/drcleanx-logo.png" width={180} />
              </Link>
              <p className="footer-brand-description">Thoughtful everyday care for every corner of home.</p>
              <address className="footer-contact-list">
                <span className="footer-contact-item">
                  <MapPin aria-hidden="true" size={16} />
                  <span>Tarakeswar, Hooghly, West Bengal, 712410</span>
                </span>
                <a className="footer-contact-item" href="tel:+913212458807">
                  <Phone aria-hidden="true" size={16} />
                  <span>+91 3212458807</span>
                </a>
                <a className="footer-contact-item" href={WHATSAPP_URL}>
                  <MessageCircle aria-hidden="true" size={16} />
                  <span>WhatsApp: +91 9832108395</span>
                </a>
                <a className="footer-contact-item" href="mailto:info@drcleanx.com">
                  <Mail aria-hidden="true" size={16} />
                  <span>info@drcleanx.com</span>
                </a>
              </address>
              <ul aria-label="DrCleanX on social media" className="footer-social">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a aria-label={label} href={href} rel="noopener noreferrer" target="_blank">
                      <Icon aria-hidden="true" size={17} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {sitemapGroups.map((group) => (
              <nav aria-label={`${group.title} links`} className="footer-link-column" key={group.title}>
                <h3 className="footer-column-title">{group.title}</h3>
                <ul className="footer-link-list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <nav aria-label="Legal" className="footer-legal">
            <ul className="footer-legal-list">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-bottom">
            <p className="footer-copyright">&copy; 2026 DrCleanX. All rights reserved.</p>
            <div aria-label="Accepted payment methods" className="footer-payments">
              <Image alt="UPI" className="payment-logo payment-logo-upi" height={28} src="/payment-upi.svg" unoptimized width={56} />
              <Image alt="Visa" className="payment-logo payment-logo-visa" height={28} src="/payment-visa.svg" unoptimized width={42} />
              <Image alt="Mastercard" className="payment-logo payment-logo-mastercard" height={32} src="/payment-mastercard.svg" unoptimized width={64} />
            </div>
          </div>
          <p className="footer-credit">Designed &amp; Developed by SJ Digital Studio</p>
        </div>
      </footer>
    </>
  );
}
