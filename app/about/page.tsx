import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Description",
  keywords: ["About page", "Next.js"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">This is the about page</span>
    </>
  );
}
