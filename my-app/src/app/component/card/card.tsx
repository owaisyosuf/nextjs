import { Cardtype } from "@/types/componentTypes";
import Heading from "../heading/heading";
import Blog from "../blog/blog";
import Button from "../button/Button";
import Tag from "../tag/tag";

export default function Card(props: Cardtype) {
  let car = false;
  return (
    <div className="bg-blue-300 shadow-md rounded-lg p-6 w-52 h-auto m-2">
      {/* {props.heading} */}
      <Heading title={props.title} />
      <Blog data={props.blog} />
      <Button Data={props.button} />
      <Tag title={props.tag} />
      {car ? <Tag title={props.tag} /> : "no tag"}
    </div>
  );
}
