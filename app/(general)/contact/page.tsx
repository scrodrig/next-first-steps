import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "SEO Description",
  keywords: ["Contact page", "Next.js"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">This is the Contact page</span>
    </>
  );
}
