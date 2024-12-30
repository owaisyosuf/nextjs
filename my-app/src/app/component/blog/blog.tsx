import Tag from "../tag/tag";
import Button from "../button/Button";
import { blog } from "@/types/blog";

export default function Blog(props: blog) {
  return <div className="bg-red-300">{props.title}</div>;
}
