import Image from "next/image";
import Heading from "./component/heading/heading";
import Blog from "./component/blog/blog";
import Button from "./component/button/Button";
import Card from "./component/card/card";
import Tag from "./component/tag/tag";

export default function Home() {
  return (
    <div>
      <Heading title="BURGER" />
      <Blog data="this is my blog" />
      <Tag title="ali" />
      <div>
        <Button Data="apply" />
        <Card title="colddrink" blog="this is blog" button="apply" tag="tag" />
      </div>
    </div>
  );
}
