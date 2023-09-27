import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className=" text-white font-bold" href={"/"}>
        Home Page
      </Link>
      <div className="text-white">
      <DarkModeToggle/>
      </div>
      <Link className="text-white p-2 ml-2" href={"/addTopic"}>
        Add Topic
      </Link>
      <Link className="text-white p-2 ml-2" href={"/viewMany"}>
        View Many
      </Link>
      
    </nav>
  );
}