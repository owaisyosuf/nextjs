import Tag from "../tag/tag";
import Button from "../button/Button";
import { blog } from "@/types/componentTypes";

export default function Blog(props: blog) {
  return <div className="bg-red-300">{props.data}</div>;
}
