import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

const navItems = [
  { path: "About", text: "/about" },
  { path: "Pricing", text: "/pricing" },
  { path: "Contact", text: "/contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon size={24} className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <Link key={item.path} href={item.text} className="mr-2">
          {item.path}
        </Link>
      ))}

    </nav>
  );
};
