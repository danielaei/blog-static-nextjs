import React from "react";
import { Article } from "./article";
import { Article2 } from "./articleV2";
import { ArticleProps } from "@/types";

const ArticlesV1 = ({ data }: ArticleProps<"list">) => {
  return (
    <ul className="grid grid-cols-3 gap-5">
      {data.map((item, index) => (
        <li key={index}>
          <Article data={item} />
        </li>
      ))}
    </ul>
  );
};
const ArticlesV2 = ({ data }: ArticleProps<"list">) => {
  return (
    <ul className="grid grid-cols-12 gap-8">
      <li className="col-span-6 row-span-2 h-full">
        <Article data={data[0]} />
      </li>
      <li className="col-start-7 col-end-13">
        <Article2 data={data[1]} />
      </li>
      <li className="col-start-7 col-end-13">
        <Article2 data={data[2]} />
      </li>
      <li className="col-span-12 row-start-3 row-end-4">
        <Article2 data={data[3]} />
      </li>
    </ul>
  );
};

export const Articles = ({ data, options }: ArticleProps<"list">) => {
  const Articles = {
    V1: ArticlesV1,
    V2: ArticlesV2,
  }[options?.ui || "V1"]({ data });
  return Articles;
};
