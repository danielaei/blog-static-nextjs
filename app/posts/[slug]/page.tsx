import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { articlesAll } from "@/constant";
import { linkGenerator } from "@/utils/linkGenerator";
export default function Page(props: { params: { slug: string } }) {
  const post = articlesAll.data.find(
    (article) => linkGenerator(article.title) == props.params.slug
  );
  return <MDXRemote source={post?.content as string} />;
}
export async function getStaticPaths() {
  const paths = articlesAll.data.map((post, i) => {
    return {
      params: {
        slug: linkGenerator(post.title),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
