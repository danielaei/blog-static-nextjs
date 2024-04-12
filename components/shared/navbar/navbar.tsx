import { navbarMock } from "@/constant";
import React from "react";

export const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between">
        <div>Logo</div>
        <ul className="flex gap-5">
          {navbarMock.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
