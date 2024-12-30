import Tag from "../tag/tag";
import Button from "../button/Button";

export default function Blog() {
  return (
    <div>
      <h1 className="h-[300px] w-[250px]  bg-slate-400 border-4-border-black rounded-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores
        animi dignissimos fuga cum possimus aspernatur accusantium at
        perspiciatis officia, inventore, aperiam, quasi expedita fugit! Atque
        voluptatem maxime doloribus totam.
        <div className="mt-6 flex gap-4">
          <Tag />
          <Button Data="add" />
        </div>
      </h1>
    </div>
  );
}
