import { ArticleProps } from "@/types";
import Image from "next/image";
import React from "react";

export const Article2 = ({ data }: ArticleProps<"single">) => {
  return (
    <article className="h-[inherit]">
      <figure className="articleV2WrapperOne">
        <Image
          src={`/${data.image.src}`}
          width={320}
          height={200}
          alt={data.image.alt}
          className="articleV2Image"
        />
        <div className="articleWrapperTwoDefault">
          <span className="writer">
            {data.writer} • {data.date.getDay()}/{data.date.getMonth()}/
            {data.date.getFullYear()}
          </span>
          <h2>{data.title}</h2>
          <figcaption>{data.description}</figcaption>
          <ul>
            {data.tags.map((item, index) => (
              <li key={index} className={`tag-${item.color}`}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </figure>
    </article>
  );
};
