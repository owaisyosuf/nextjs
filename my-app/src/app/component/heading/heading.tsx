import { HeadingType } from "@/types/Heading";

export default function Heading(props: HeadingType) {
  return (
    <div>
      <h1 className="text-4xl bg-red-300 inline-block">{props.title} </h1>
    </div>
  );
}
