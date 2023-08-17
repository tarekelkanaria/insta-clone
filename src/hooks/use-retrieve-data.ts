"use client";

import { db } from "@/lib/firebase";
import { RetrievedComment, RetrievedPost } from "@/types";
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
    RetrievedPost[] | RetrievedComment[]
  >([]);

  useEffect(() => {
    let unsubscribe!: Unsubscribe;
    let data: RetrievedComment[] | RetrievedPost[] = [];

    if (collectionName === "posts" && !id) {
      unsubscribe = onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          data = snapshot?.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as RetrievedPost[] | RetrievedComment[];
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
          })) as RetrievedPost[] | RetrievedComment[];
          setRetrievedData(data);
        }
      );
    }

    return unsubscribe;
  }, [db, id, collectionName]);

  return { retrievedData };
};

export default useRetrieveData;
