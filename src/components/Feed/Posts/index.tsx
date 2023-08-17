"use client";

import { RetrievedPost } from "@/types";
import useRetrieveData from "@/hooks/use-retrieve-data";
import Post from "./Post";
import Comments from "./Comments";

const Posts = () => {
  const { retrievedData: posts } = useRetrieveData("posts") as {
    retrievedData: RetrievedPost[];
  };

  return (
    <section className="mx-2 lg:mx-0 lg:col-span-2">
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
