import { footerItems } from "@/constant";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <ul className="flex gap-5">
        <li>©{new Date().getFullYear()}</li>
        {footerItems.map((v, i) => (
          <li key={i}>
            <Link href={v.link}>{v.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};
