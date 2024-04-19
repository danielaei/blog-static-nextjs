import { ImageProps } from 'next/image';
import { TagProps } from './tag';

// Article
interface Article {
  image: ImageProps;
  title: string;
  description: string;
  tags: TagProps<'list'>['data'];
  writer: string;
  date: Date;
  content: string;
  ui: 'V1' | 'V2';
}
type Articles = Array<Article>;
export type ArticleModels = {
  single: Article;
  list: Articles;
};
// End Article
export type ArticleProps<T extends keyof ArticleModels> = {
  data: ArticleModels[T];
};
