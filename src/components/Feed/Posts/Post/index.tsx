import Image from "next/image";
import { UploadedPost } from "@/types";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChatDots, BsBookmark } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";

export default function Post({
  userName,
  userImg,
  postImg,
  caption,
}: UploadedPost) {
  return (
    <article className="bg-white mb-7 border rounded-md">
      <header className="flex items-center p-5">
        <Image
          src={userImg}
          alt={userName}
          height={48}
          width={48}
          style={{ width: "auto" }}
          className="border rounded-full p-1 mr-3 object-cover"
        />
        <p className="font-bold flex-1">{userName}</p>
        <BiDotsHorizontalRounded className="h-8 text-2xl" />
      </header>
      <div className="w-full relative h-[800px] mb-4">
        <Image
          src={postImg}
          alt={caption}
          fill
          placeholder="blur"
          blurDataURL={postImg}
          sizes="(max-width: 639px) 98%, (min-width: 640px) 100%"
          className="object-cover object-center"
        />
      </div>
      <div className="flex justify-between items-center px-4 mb-4">
        <div className="flex items-center space-x-4">
          <AiOutlineHeart className="user-action" />
          <BsChatDots className="user-action" />
        </div>
        <BsBookmark className="user-action" />
      </div>
      <div className="flex space-x-2 items-center px-4 mb-4">
        <address className="not-italic indent-1">
          <a rel="author" className="font-bold cursor-default">
            {userName}
          </a>
        </address>
        <p className="truncate">{caption}</p>
      </div>
      <form className="flex items-center p-4">
        <HiOutlineEmojiHappy className="text-2xl" />
        <input
          type="text"
          placeholder="Enter your comment"
          className="flex-1 border-none focus:outline-none indent-2"
        />
        <button type="submit" className="text-blue-400 font-bold">
          Post
        </button>
      </form>
    </article>
  );
}
