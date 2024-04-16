import { TagProps } from "./tag";

// Options
interface Options {
  ui: "V1" | "V2" | "V3";
}
// Options
// Article
interface Article {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  tags: TagProps<"list">["data"];
  writer: string;
  date: Date;
  content: string;
}
type Articles = Array<Article>;
export type ArticleModels = {
  single: Article;
  list: Articles;
};
// End Article
export type ArticleProps<T extends keyof ArticleModels> = {
  data: ArticleModels[T];
  options?: Options;
};
