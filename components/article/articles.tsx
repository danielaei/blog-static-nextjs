import { articleMock } from "@/constant";
import React from "react";
import { Article } from "./article";

export const Articles = () => {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {articleMock.data.map((item, index) => (
        <li key={index}>
          <Article data={item} />
        </li>
      ))}
    </ul>
  );
};
