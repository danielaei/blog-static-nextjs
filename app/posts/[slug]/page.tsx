import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { articlesAll } from '@/constant';
import { linkGenerator } from '@/utils/linkGenerator';

export async function generateStaticParams() {
  return articlesAll.data.map((post) => ({
    slug: linkGenerator(post.title),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = articlesAll.data.find(
    (article) => linkGenerator(article.title) == params.slug
  );
  return <MDXRemote source={post?.content as string} />;
}
