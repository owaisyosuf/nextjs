import Image from "next/image";
import Heading from "./component/heading/heading";
import Blog from "./component/blog/blog";
import Button from "./component/button/Button";

export default function Home() {
  return (
    <div>
      <Heading />
      <Blog />
      <div>
        <Button Data="apply" />
      </div>
    </div>
  );
}
