import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "SEO Description",
  keywords: ["Pricing page", "Next.js"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">This is the pricing page</span>
    </>
  );
}
