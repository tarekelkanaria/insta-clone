"use server";

import { db } from "./firebase";
import { UploadedComment } from "@/types";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default async function UploadComment({
  id,
  userName,
  userImg,
  comment,
}: UploadedComment & { id: string }) {
  await addDoc(collection(db, "posts", id, "comments"), {
    userName,
    userImg,
    comment,
    timestamp: serverTimestamp(),
  });
}
