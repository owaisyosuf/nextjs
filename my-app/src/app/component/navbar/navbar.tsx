import Link from "next/link";
// import Home from "@/app/page";
// import About from "@/app/About/page";
// import Contact from "@/app/Contact/page";
// import Services from "@/app/services/page";
export default function Navbar() {
  return (
    <div className="flex justify-end bg-amber-200 text-blue-500 gap-8 h-9 p-1">
      <Link href={"./"}> Home</Link>
      <Link href={"./About"}>About</Link>
      <Link href={"./Contact"}> Contact</Link>
      <Link href={"./services"}> Services</Link>
    </div>
  );
}
