import { ArticleProps } from "@/types";
import Image from "next/image";
import React from "react";
import { Tags } from "../tag";

export const Article2 = ({ data }: ArticleProps<"single">) => {
  return (
    <article className="h-full">
      <figure className="articleV2WrapperOne">
        <Image
          src={`/${data.image.src}`}
          width={320}
          height={200}
          alt={data.image.alt}
          className="articleV2Image"
        />
        <div className="articleWrapperTwoDefault">
          <p className="writer">
            <span data-cy="writer">{data.writer}</span>•
            <span data-cy="date">
              {data.date.getDay()}/{data.date.getMonth()}/
              {data.date.getFullYear()}
            </span>
          </p>
          <h2>{data.title}</h2>
          <figcaption>{data.description}</figcaption>
          <Tags data={data.tags} />
        </div>
      </figure>
    </article>
  );
};
