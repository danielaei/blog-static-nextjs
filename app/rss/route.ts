import { articlesAll } from '@/constant';
import { linkGenerator } from '@/utils/linkGenerator';
import { Feed } from 'feed';
export async function GET() {
  const URL = `${process.env.URL}/posts/`;
  const feed = new Feed({
    title: 'Blog Article Feed',
    description: 'This is a website created by Next.js, MDX(Markdown), Tailwind',
    id: `${URL}`,
    link: `${URL}`,
    language: 'en',
    copyright: 'All rights reserved 2024, Daniel Agha Babaei',
    author: {
      name: 'Bard (AI Assistant)',
      link: 'https://gemini.google.com',
    },
  });
  articlesAll.data.forEach((article) => {
    article.tags.forEach((tag) => {
      feed.addCategory(tag.name);
    });
  });
  articlesAll.data.forEach((article, index) => {
    feed.addItem({
      title: article.title,
      id: `${URL}${index + 1}`,
      link: `${URL}${linkGenerator(article.title)}`,
      description: article.description,
      content: article.content,
      author: [
        {
          name: article.writer,
          link: 'https://gemini.google.com',
        },
      ],
      date: article.date,
    });
  });
  return new Response(feed.rss2(), {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  });
}
