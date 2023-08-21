import uploadComment from "@/firebase/upload-comment";
import toggleLike from "@/firebase/toggle-like";
import useRetrieveData from "@/hooks/use-retrieve-data";
import { useAppDispatch } from "@/redux/hooks";
import { opening, saveLikedUsers } from "@/redux/features/likesModalSlice";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { RetrievedLike, RetrievedPost } from "@/types";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsChatDots, BsBookmark } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";

type Props = {
  children: React.ReactNode;
} & RetrievedPost;

const Post = ({ children, id, userName, userImg, postImg, caption }: Props) => {
  const { data: session } = useSession();

  const [comment, setComment] = useState<string>("");
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const { retrievedData: likes } = useRetrieveData("likes", id) as {
    retrievedData: RetrievedLike[];
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    const likeIndex = likes.findIndex((like) => like.id === session?.user.uid);
    setHasLiked(likeIndex !== -1);
  }, [likes]);

  const likeAction = () => {
    toggleLike({
      id,
      hasLiked,
      userName: session!.user.username,
      userImg: session?.user.image as string,
      userId: session!.user.uid,
    });
  };

  const sendComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredComment = comment;
    setComment("");
    uploadComment({
      id,
      userName: session?.user.username as string,
      userImg: session?.user.image as string,
      comment: enteredComment,
    });
  };

  const showLikes = () => {
    dispatch(saveLikedUsers(likes));
    dispatch(opening());
  };

  return (
    <article className="bg-white mb-7 border rounded-md">
      {/* Post header */}
      <header className="flex items-center p-5">
        <Image
          src={userImg}
          alt={userName}
          height={48}
          width={48}
          style={{ maxWidth: "48px", height: "auto" }}
          className="border rounded-full p-1 mr-3 object-cover"
        />
        <p className="font-bold flex-1">{userName}</p>
        <BiDotsHorizontalRounded className="h-8 text-2xl" />
      </header>
      {/* Post image */}
      <div className="w-full relative h-[300px] lg:h-[600px] mb-4">
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
      {/* Post buttons */}
      {session && (
        <div className="flex justify-between items-center px-4 mb-4">
          <div className="flex items-center space-x-4">
            {hasLiked ? (
              <AiFillHeart
                onClick={likeAction}
                className="user-action text-red-500"
              />
            ) : (
              <AiOutlineHeart onClick={likeAction} className="user-action" />
            )}
            <BsChatDots className="user-action" />
          </div>
          <BsBookmark className="user-action" />
        </div>
      )}
      {/* Post likes */}
      {likes.length > 0 && (
        <div className="mb-1 px-4">
          <button
            type="button"
            disabled={!session}
            onClick={showLikes}
            className="font-bold hover:underline focus:outline-none disabled:hover:no-underline disabled:cursor-not-allowed"
          >
            {likes.length} likes
          </button>
        </div>
      )}
      {/* Post caption */}
      <div className="flex space-x-2 items-center px-4 mb-4">
        <address className="not-italic indent-1">
          <a rel="author" className="font-bold cursor-default">
            {userName}
          </a>
        </address>
        <p className="truncate">{caption}</p>
      </div>
      {/* Post comments  */}
      {children}
      {/* Post comment form */}
      {session && (
        <form onSubmit={sendComment} className="flex items-center p-4">
          <HiOutlineEmojiHappy className="text-2xl" />
          <input
            type="text"
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 border-none focus:outline-none indent-2"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="text-blue-400 font-bold disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </article>
  );
};

export default Post;
