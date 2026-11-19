import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | DrCleanX",
  description: "How returns, replacements and refunds work for DrCleanX orders.",
};

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-[#102b43] md:text-4xl">Refund Policy</h1>
      <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#536d7d]">
        <p>We want you to be happy with every DrCleanX product. If something is wrong, we will make it right.</p>
        <h2 className="pt-2 text-lg font-bold text-[#102b43]">Damaged or wrong items</h2>
        <p>If you receive a damaged, leaking or incorrect item, contact us within 48 hours of delivery with a photo of the product and the order number. We will arrange a replacement or refund.</p>
        <h2 className="pt-2 text-lg font-bold text-[#102b43]">Refund timeline</h2>
        <p>Approved refunds are returned to your original payment method within 5 to 7 working days.</p>
        <h2 className="pt-2 text-lg font-bold text-[#102b43]">Opened products</h2>
        <p>For hygiene reasons, opened cleaning products cannot be returned unless they are faulty.</p>
        <h2 className="pt-2 text-lg font-bold text-[#102b43]">Contact</h2>
        <p>Email info@drcleanx.com or message us on WhatsApp at +91 9832108395.</p>
      </div>
    </main>
  );
}
