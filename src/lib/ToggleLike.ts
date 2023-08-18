"use server";

import { UploadedLike } from "@/types";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export default async function ToggleLike({
  id,
  hasLiked,
  userName,
  userImg,
  userId,
}: UploadedLike & { id: string; hasLiked: boolean }) {
  if (hasLiked) {
    await deleteDoc(doc(db, "posts", id, "likes", userId));
  } else {
    await setDoc(doc(db, "posts", id, "likes", userId), {
      userName,
      userImg,
    });
  }
}
