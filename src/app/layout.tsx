import type { Metadata } from "next";
import { CartProvider } from "@/components/cart-provider";
import { Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import "./product-showcase.css";
import "./about/story.css";
import "./shop/shop.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DrCleanX | Clean Today. Fresh Tomorrow.",
  description:
    "Shop DrCleanX home care and cleaning essentials for everyday freshness across your home.",
  metadataBase: new URL("https://drcleanx.com"),
  openGraph: {
    title: "DrCleanX | Clean Today. Fresh Tomorrow.",
    description: "Explore everyday home care and cleaning essentials from DrCleanX.",
    url: "https://drcleanx.com",
    siteName: "DrCleanx",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
