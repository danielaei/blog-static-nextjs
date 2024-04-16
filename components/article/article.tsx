import { ArticleProps } from "@/types";
import Image from "next/image";
import React from "react";
import { Tags } from "@/components/tag";

export const Article = ({ data }: ArticleProps<"single">) => {
  return (
    <article className="h-full">
      <figure className="articleV1WrapperOne">
        <Image
          src={`/${data.image.src}`}
          width={1200}
          height={1200}
          alt={data.image.alt}
          className="articleV1Image"
        />
        <div className="articleWrapperTwoDefault">
          <p className="writer">
            <span data-cy="writer">
              {data.writer}
            </span>
            •
            <span data-cy="date">{data.date.getDay()}/{data.date.getMonth()}/{data.date.getFullYear()}</span>
          </p>
          <h2>{data.title}</h2>
          <figcaption>{data.description}</figcaption>
          <Tags data={data.tags} />
        </div>
      </figure>
    </article>
  );
};
