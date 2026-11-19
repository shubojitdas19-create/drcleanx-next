import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | DrCleanX",
  description: "The terms that apply when you use the DrCleanX website and place orders.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-[#102b43] md:text-4xl">Terms &amp; Conditions</h1>
      <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#536d7d]">
        <p>By using this website and placing an order with DrCleanX, you agree to these terms. Please read them carefully.</p>
        <h2 className="pt-2 text-lg font-bold text-[#102b43]">Orders and pricing</h2>
        <p>All prices are shown in Indian Rupees and include applicable taxes unless stated otherwise. We may correct pricing errors and cancel affected orders, with a full refund.</p>
        <h2 className="pt-2 text-lg font-bold text-[#102b43]">Offers</h2>
        <p>Offer codes such as FIRST10 are valid for one first order per customer, unless the offer states otherwise. We may withdraw offers at any time.</p>
        <h2 className="pt-2 text-lg font-bold text-[#102b43]">Product use</h2>
        <p>Use cleaning products as directed on the label. Keep them out of reach of children and pets.</p>
        <h2 className="pt-2 text-lg font-bold text-[#102b43]">Contact</h2>
        <p>For questions about these terms, email info@drcleanx.com.</p>
      </div>
    </main>
  );
}
