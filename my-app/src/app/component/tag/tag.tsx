import { tagType } from "@/types/componentTypes";

export default function Tag(props: tagType) {
  return (
    <div>
      <h3 className="text-3xl bg-green-300 inline-block">{props.title}</h3>
    </div>
  );
}
