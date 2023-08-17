"use server";

import { db, storage } from "@/lib/firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { UploadedPost } from "@/types";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

export default async function UploadPost({
  userName,
  userImg,
  caption,
  postImg,
}: UploadedPost) {
  const docRef = await addDoc(collection(db, "posts"), {
    userName,
    userImg,
    caption,
    timestamp: serverTimestamp(),
  });

  const imageRef = ref(storage, `posts/${docRef.id}/image`);

  await uploadString(imageRef, postImg, "data_url").then(async (snapshot) => {
    const downloadUrl = await getDownloadURL(imageRef);

    await updateDoc(doc(db, "posts", docRef.id), {
      postImg: downloadUrl,
    });
  });
}
