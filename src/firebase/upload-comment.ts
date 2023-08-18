import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from ".";
import { UploadedComment } from "@/types";

export default async function uploadComment({
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
