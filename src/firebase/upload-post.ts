import {
  addDoc,
  collection,
  doc,
  getCountFromServer,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { db, storage } from ".";
import { UploadedPost } from "@/types";

export const getAllPosts = async () => {
  const snapshot = await getCountFromServer(collection(db, "posts"));
  const postsCount = snapshot.data().count;
  return postsCount;
};

export default async function uploadPost({
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
  return await getAllPosts();
}
