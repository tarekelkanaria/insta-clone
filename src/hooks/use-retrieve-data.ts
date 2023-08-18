"use client";

import { db } from "@/firebase";
import { RetrievedComment, RetrievedLike, RetrievedPost } from "@/types";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  Unsubscribe,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const useRetrieveData = (collectionName: string, id?: string) => {
  const [retrievedData, setRetrievedData] = useState<
    RetrievedPost[] | RetrievedComment[] | RetrievedLike[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let unsubscribe!: Unsubscribe;
    let data: RetrievedComment[] | RetrievedPost[] | RetrievedLike[] = [];

    if (collectionName === "posts" && !id) {
      unsubscribe = onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          data = snapshot?.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as RetrievedPost[];
          setRetrievedData(data);
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
  }, [db, id, collectionName]);

  return { retrievedData, loading };
};

export default useRetrieveData;
