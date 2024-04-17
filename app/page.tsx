import { Article } from "@/components/article";
import { Newsletter } from "@/components/newsletter";
import { HeaderSection, TitleSection } from "@/components/shared";
import { articles1, articles2 } from "@/constant";
import { linkGenerator } from "@/utils/linkGenerator";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TitleSection title="the blog" />
      <Newsletter />
      <HeaderSection header="Recent blog posts">
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
      <HeaderSection header="All blog posts">
        <ul className="grid laptop:grid-cols-3 mobileS:grid-cols-1 gap-5">
          {articles2.data.map((item, index) => (
            <li key={index}>
              <Link href={`/posts/${linkGenerator(item.title)}`}>
                <Article data={item} />
              </Link>
            </li>
          ))}
        </ul>
      </HeaderSection>
    </>
  );
}
