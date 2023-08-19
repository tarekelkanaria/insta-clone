"use client";

import { db } from "@/firebase";
import { setInitialData } from "@/redux/features/postsSlice";
import { useAppDispatch } from "@/redux/hooks";
import { RetrievedComment, RetrievedLike, RetrievedPost } from "@/types";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  Unsubscribe,
  limit,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const useRetrieveData = (
  collectionName: string,
  id?: string,
  limitNum?: number
) => {
  const [retrievedData, setRetrievedData] = useState<
    RetrievedPost[] | RetrievedComment[] | RetrievedLike[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let unsubscribe!: Unsubscribe;
    let data!: RetrievedComment[] | RetrievedPost[] | RetrievedLike[];

    if (collectionName === "posts" && !id) {
      unsubscribe = onSnapshot(
        query(
          collection(db, "posts"),
          orderBy("timestamp", "desc"),
          limit(limitNum as number)
        ),
        (snapshot) => {
          data = snapshot?.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as RetrievedPost[];
          setRetrievedData(data);
          dispatch(setInitialData(data as RetrievedPost[]));
        }
      );
    } else if (collectionName === "comments" && id) {
      unsubscribe = onSnapshot(
        query(
          collection(db, "posts", id as string, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          data = snapshot?.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as RetrievedComment[];
          setRetrievedData(data);
        }
      );
    } else if (collectionName === "likes" && id) {
      unsubscribe = onSnapshot(
        collection(db, "posts", id as string, "likes"),
        (snapshot) => {
          data = snapshot?.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as RetrievedLike[];
          setRetrievedData(data);
        }
      );
    }

    setLoading(false);
    return unsubscribe;
  }, [id, collectionName, limitNum]);

  return { retrievedData, loading };
};

export default useRetrieveData;
