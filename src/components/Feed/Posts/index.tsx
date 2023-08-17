"use client";

import { useEffect, useState } from "react";
import Post from "./Post";
import { RetreivedPost } from "@/types";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Posts = () => {
  const [posts, setPosts] = useState<RetreivedPost[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        const postsData = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as RetreivedPost)
        );
        setPosts(postsData);
      }
    );
    return unsubscribe;
  }, [db]);

  return (
    <section className="mx-2 lg:mx-0 lg:col-span-2">
      {posts &&
        posts.map((post) => post.postImg && <Post key={post.id} {...post} />)}
    </section>
  );
};

export default Posts;
