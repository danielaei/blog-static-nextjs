import React from "react";
import { Article } from "@/components/article";
import { HeaderSection } from "../other/headerSection";
import { articles3 } from "@/constant";
import Link from "next/link";
import { linkGenerator } from "@/utils/linkGenerator";

export const Sidebar = () => {
  return (
    <aside>
      <HeaderSection header="Recent blog posts">
        <ul className="grid grid-cols-1 gap-5">
          {articles3.data.map((item, index) => (
            <li key={index}>
              <Link href={`/posts/${linkGenerator(item.title)}`}>
                <Article data={item} />
              </Link>
            </li>
          ))}
        </ul>
      </HeaderSection>
    </aside>
  );
};
