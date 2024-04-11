// Tag
enum Colors {
  pink = "pink",
  blue = "blue",
  purple = "purple",
}
type ColorsKeys = keyof typeof Colors;
interface Tag {
  name: string;
  color: ColorsKeys;
}
type Tags = Array<Tag>;
// End Tag

export type {
    Tags
}