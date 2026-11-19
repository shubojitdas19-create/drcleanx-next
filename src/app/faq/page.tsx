import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs | DrCleanX",
  description: "Answers to common questions about DrCleanX orders, delivery, payments and products.",
};

const faqs = [
  {
    question: "How do I get 10% off my first order?",
    answer: "Use code FIRST10 at checkout on your first order. The discount applies automatically once the code is entered.",
  },
  {
    question: "Where can I buy DrCleanX products?",
    answer: "You can order on our website, or on Amazon, Flipkart, Meesho, Snapdeal and JioMart.",
  },
  {
    question: "Is delivery free?",
    answer: "Delivery is free on orders above ₹499. Smaller orders have a standard delivery charge shown at checkout.",
  },
  {
    question: "Are DrCleanX products safe for pets and children?",
    answer: "Our range is formulated to be effective and safe for family homes. Keep all cleaners out of reach of children and pets, and rinse surfaces where pets or children play.",
  },
  {
    question: "How do I track my order?",
    answer: "Email info@drcleanx.com with your order number, or message us on WhatsApp at +91 9832108395.",
  },
  {
    question: "Can I return or get a refund?",
    answer: "Yes. Please read our Refund Policy for eligibility and timelines.",
  },
];

export default function FaqPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12 md:py-16">
      <p className="text-xs font-bold uppercase tracking-widest text-[#0759c7]">Help</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#102b43] md:text-4xl">Frequently asked questions</h1>
      <div className="mt-8 divide-y divide-[#e5edf7] border-y border-[#e5edf7]">
        {faqs.map((faq) => (
          <details className="group py-4" key={faq.question}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#102b43]">
              {faq.question}
              <span aria-hidden="true" className="text-xl text-[#0759c7] group-open:hidden">+</span>
              <span aria-hidden="true" className="hidden text-xl text-[#0759c7] group-open:inline">−</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[#536d7d]">{faq.answer}</p>
          </details>
        ))}
      </div>
      <p className="mt-8 text-sm text-[#536d7d]">
        Still need help? <Link className="font-semibold text-[#0759c7]" href="https://wa.me/919832108395">Chat with us on WhatsApp</Link>.
      </p>
    </main>
  );
}
