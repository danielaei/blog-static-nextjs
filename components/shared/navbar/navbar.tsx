import { navbarItems } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            className="bg-white rounded-full"
            src="/logo.png"
            width={60}
            height={60}
            alt="Logo"
          />
        </Link>
        <ul className="flex gap-5">
          {navbarItems.map((v, i) => (
            <li key={i}>
              <Link href={v.link}>{v.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
