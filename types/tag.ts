// Tag
enum Colors {
  pink = 'pink',
  blue = 'blue',
  purple = 'purple',
}
type ColorsKeys = keyof typeof Colors;
interface Tag {
  name: string;
  color: ColorsKeys;
}
type Tags = Array<Tag>;
type TagModels = {
  single: Tag;
  list: Tags;
};
export type TagProps<T extends keyof TagModels> = {
  data: TagModels[T];
};
