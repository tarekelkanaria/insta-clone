import { ProfileStory } from "@/types";
import Image from "next/image";

export default function Story({ profileName, profileImg }: ProfileStory) {
  return (
    <article className="cursor-pointer group">
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
      <p className="text-xs w-14 truncate">{profileName}</p>
    </article>
  );
}
