import React from "react";
import { Article } from "./article";
import { Article2 } from "./articleV2";
import { ArticleProps } from "@/types";
import Link from "next/link";

const ArticlesV1 = ({ data }: ArticleProps<"list">) => {
  return (
    <ul className="grid laptop:grid-cols-3 mobileS:grid-cols-1 gap-5">
      {data.map((item, index) => (
        <li key={index}>
          <Link href={`/posts/${index}`}>
            <Article data={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
const ArticlesV2 = ({ data }: ArticleProps<"list">) => {
  return (
    <ul className="grid laptop:grid-cols-12 mobileS:grid-cols-1 gap-8">
      <li className="laptop:col-span-6 mobileS:col-span-1 row-span-2 h-full">
        <Link href={`/posts/${1}`}>
          <Article data={data[0]} />
        </Link>
      </li>
      <li className="laptop:col-start-7 mobileS:col-span-1 laptop:col-end-13">
        <Link href={`/posts/${2}`}>
          <Article2 data={data[1]} />
        </Link>
      </li>
      <li className="laptop:col-start-7 mobileS:col-span-1 laptop:col-end-13">
        <Link href={`/posts/${3}`}>
          <Article2 data={data[2]} />
        </Link>
      </li>
      <li className="laptop:col-span-12 mobileS:col-span-1 row-start-3 row-end-4">
        <Link href={`/posts/${4}`}>
          <Article2 data={data[3]} />
        </Link>
      </li>
    </ul>
  );
};
const ArticlesV3 = ({ data }: ArticleProps<"list">) => {
  return (
    <ul className="grid grid-cols-1 gap-5">
      {data.map((item, index) => (
        <li key={index}>
          <Link href={`/posts/${index}`}>
          <Article data={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
export const Articles = ({ data, options }: ArticleProps<"list">) => {
  const Articles = {
    V1: ArticlesV1,
    V2: ArticlesV2,
    V3: ArticlesV3,
  }[options?.ui || "V1"]({ data });
  return Articles;
};
