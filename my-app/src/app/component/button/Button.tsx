import { ButtonType } from "@/types/componentTypes";

export default function Button(props: ButtonType) {
  return (
    <div>
      <button className="bg-yellow-400 h-12 w-16 rounded-3xl">
        {props.Data}
      </button>
    </div>
  );
}
