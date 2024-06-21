import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24">
        <span className="text-5xl">Hola mundo...</span>
        {children}
      </main>
    </>
  );
}
