"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./ActiveLink.module.css";

interface ActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: ActiveLinkProps) => {
  const pathName = usePathname();
  console.log(pathName, path, pathName === path);
  return (
    <Link
      key={text}
      href={path}
      className={`${style.link} ${
        pathName === path ? style["active-link"] : ""
      }`}
    >
      {text}
    </Link>
  );
};
