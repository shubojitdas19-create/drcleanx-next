import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "Best Sellers", href: "/#best-sellers"},
      { label: "Our Story", href: "/about" },
    ],
  },
  {
    title: "Help & Information",
    links: [
      { label: "Track Order", href: "mailto:info@drcleanx.com?subject=Order%20tracking%20request" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
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
                <a className="footer-contact-item" href="mailto:info@drcleanx.com">
                  <Mail aria-hidden="true" size={16} />
                  <span>info@drcleanx.com</span>
                </a>
              </address>
            </div>

            {footerLinks.map((group) => (
              <nav aria-label={group.title} className="footer-link-column" key={group.title}>
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
