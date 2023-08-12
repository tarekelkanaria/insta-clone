import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";

export default function Menu() {
  return (
    <li className="flex items-center space-x-4">
      <AiFillHome className="hidden md:inline-flex text-2xl cursor-pointer hover:scale-125 transition-transform duration-200" />
      <FiPlusCircle className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-200" />
      <Image
        alt="User profile image"
        src="https://i1.sndcdn.com/avatars-EgQrcnU0I9hGOzXB-Xw1bHA-t500x500.jpg"
        width={40}
        height={40}
        className="rounded-full cursor-pointer"
      />
    </li>
  );
}
