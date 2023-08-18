"use client";

import { RetrievedPost } from "@/types";
import useRetrieveData from "@/hooks/use-retrieve-data";
import Post from "./Post";
import Comments from "./Comments";
import PostsPlaceholders from "@/components/UI/LoadingPlaceholders/PostsPlaceholders";
import CommentsPlaceholders from "@/components/UI/LoadingPlaceholders/CommentsPlaceholders";

const Posts = () => {
  const { retrievedData: posts, loading } = useRetrieveData("posts") as {
    retrievedData: RetrievedPost[];
    loading: boolean;
  };

  return (
    <section className="mx-2 lg:mx-0 lg:col-span-2">
      {loading && (
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
      {posts.map(
        (post) =>
          post?.postImg && (
            <Post key={post.id} {...post}>
              <Comments id={post.id} />
            </Post>
          )
      )}
    </section>
  );
};

export default Posts;
