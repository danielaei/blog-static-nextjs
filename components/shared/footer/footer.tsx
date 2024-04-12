import { footerMock } from "@/constant";
import React from "react";

export const Footer = () => {
  return (
    <footer>
      <ul className="flex gap-5">
        {footerMock.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </footer>
  );
};
