import { FaPlus } from "react-icons/fa";
import { ProfileStory } from "@/types";
import Image from "next/image";

type Props = {
  isUser: boolean;
} & ProfileStory;

export default function Story({ profileName, profileImg, isUser }: Props) {
  return (
    <article className="cursor-pointer group relative">
      <Image
        alt={profileName}
        src={profileImg}
        width={56}
        height={56}
        placeholder="blur"
        blurDataURL={profileImg}
        style={{ width: "auto" }}
        className="rounded-full p-[1.5px] border-2 border-red-500 group-hover:scale-110 transition-transform duration-200"
      />
      {isUser && (
        <FaPlus className="h-6 w-6 absolute top-4 left-[16px] text-white" />
      )}
      <p className="text-xs w-14 truncate">{profileName}</p>
    </article>
  );
}
