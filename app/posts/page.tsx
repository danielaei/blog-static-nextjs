import { Article } from "@/components/article";
import { HeaderSection } from "@/components/shared";
import { articles1 } from "@/constant";
import { linkGenerator } from "@/utils/linkGenerator";
import Link from "next/link";
import React from "react";
export default function PostsPage() {
  return (
    <HeaderSection header="Top Posts">
      <ul className="grid laptop:grid-cols-12 mobileS:grid-cols-1 gap-8">
        <li className="laptop:col-span-6 mobileS:col-span-1 row-span-2 h-full">
          <Link href={`/posts/${linkGenerator(articles1.data[0].title)}`}>
            <Article data={articles1.data[0]} />
          </Link>
        </li>
        <li className="laptop:col-start-7 mobileS:col-span-1 laptop:col-end-13">
          <Link href={`/posts/${linkGenerator(articles1.data[1].title)}`}>
            <Article data={articles1.data[1]} />
          </Link>
        </li>
        <li className="laptop:col-start-7 mobileS:col-span-1 laptop:col-end-13">
          <Link href={`/posts/${linkGenerator(articles1.data[2].title)}`}>
            <Article data={articles1.data[2]} />
          </Link>
        </li>
        <li className="laptop:col-span-12 mobileS:col-span-1 row-start-3 row-end-4">
          <Link href={`/posts/${linkGenerator(articles1.data[3].title)}`}>
            <Article data={articles1.data[3]} />
          </Link>
        </li>
      </ul>
    </HeaderSection>
  );
}
