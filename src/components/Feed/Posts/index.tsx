"use client";

import useRetrieveData from "@/hooks/use-retrieve-data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getLastPostSoFar, updatePosts } from "@/redux/features/postsSlice";
import getMorePosts from "@/firebase/get-more-posts";
import { useState } from "react";
import { RetrievedPost } from "@/types";
import { Timestamp } from "firebase/firestore";
import ClipLoader from "react-spinners/ClipLoader";
import Post from "./Post";
import Comments from "./Comments";
import PostsPlaceholders from "@/components/UI/LoadingPlaceholders/PostsPlaceholders";
import CommentsPlaceholders from "@/components/UI/LoadingPlaceholders/CommentsPlaceholders";

const Posts = () => {
  const dispatch = useAppDispatch();
  const [pendingNewPosts, setPendingNewPosts] = useState<boolean>(false);

  const { loading: initialLoading } = useRetrieveData(
    "posts",
    undefined,
    4
  ) as {
    retrievedData: RetrievedPost[];
    loading: boolean;
  };

  const lastPostSoFar = useAppSelector(
    (state) => state.posts.lastPostSoFar
  ) as Timestamp;
  const loadedPosts = useAppSelector((state) => state.posts.loadedPosts);
  const totalPosts = useAppSelector((state) => state.posts.total);

  const loadMore = async () => {
    setPendingNewPosts(true);
    const newPosts = await getMorePosts(lastPostSoFar, 4);
    dispatch(updatePosts(newPosts));
    dispatch(getLastPostSoFar(newPosts[newPosts.length - 1]?.timestamp));
    setPendingNewPosts(false);
  };

  return (
    <section className="mx-2 lg:mx-0 lg:col-span-2">
      {initialLoading && (
        <>
          <PostsPlaceholders>
            <CommentsPlaceholders />
          </PostsPlaceholders>
          <PostsPlaceholders>
            <CommentsPlaceholders />
          </PostsPlaceholders>
          <PostsPlaceholders>
            <CommentsPlaceholders />
          </PostsPlaceholders>
        </>
      )}
      {loadedPosts.length > 0 &&
        loadedPosts.map(
          (post) =>
            post?.postImg && (
              <Post key={post.id} {...post}>
                <Comments id={post.id} />
              </Post>
            )
        )}

      {loadedPosts.length < totalPosts && (
        <button
          onClick={loadMore}
          className="py-2 px-5 w-full rounded-lg bg-white text-center text-slate-900 hover:bg-gray-200 transition-colors duration-200 mb-10"
        >
          <ClipLoader color="#dc2626" loading={pendingNewPosts} size={30} />
          {!pendingNewPosts && "Load More"}
        </button>
      )}
    </section>
  );
};

export default Posts;
