import {
  Timestamp,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from ".";
import { RetrievedPost } from "@/types";

export default async function getMorePosts(
  startKey: Timestamp,
  limitNum: number
) {
  const nextPage = query(
    collection(db, "posts"),
    orderBy("timestamp", "desc"),
    limit(limitNum),
    startAfter(startKey)
  );
  const morePosts = (await getDocs(nextPage)).docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as RetrievedPost[];

  return morePosts;
}
