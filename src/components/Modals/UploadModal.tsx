"use client";

// Redux state
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { closing } from "@/redux/features/uploadModalSlice";
// Hooks
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
// Server actions
import UploadPost from "@/lib/UploadPost";
// Types
import { UploadedPost } from "@/types";
// UI components
import Modal from "react-modal";
import ClipLoader from "react-spinners/ClipLoader";
import { FaCamera } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const UploadModal = () => {
  const isModalOpened = useAppSelector((state) => state.uploadModal.isVisible);
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const imagePickerRef = useRef<HTMLInputElement>(null);
  const captionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    Modal.setAppElement("#modals");
  }, []);

  const addImageToModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedImage(readerEvent.target?.result as string);
    };
  };

  const sendPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pending) return;

    setPending(true);

    const newPost: UploadedPost = {
      userName: session?.user.username as string,
      userImg: session?.user.image as string,
      caption: captionRef.current!.value,
      postImg: selectedImage as string,
    };

    await UploadPost(newPost).then(() => {
      dispatch(closing());
      setPending(false);
      setSelectedImage(null);
    });
  };

  return (
    <>
      {isModalOpened && (
        <Modal
          className="modal"
          isOpen={isModalOpened}
          onRequestClose={() => {
            dispatch(closing());
            setSelectedImage(null);
          }}
          contentLabel="Upload modal"
        >
          <form
            onSubmit={sendPost}
            className="flex flex-col justify-center items-center h-full"
          >
            <div className="self-end">
              <GrClose
                onClick={() => {
                  if (selectedImage) setSelectedImage(null);
                  else dispatch(closing());
                }}
                className="h-8 w-fit cursor-pointer mb-2"
              />
            </div>
            {selectedImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={selectedImage}
                alt="post image"
                className="w-full max-h-80 object-contain cursor-pointer mb-2"
              />
            ) : (
              <FaCamera
                onClick={() => imagePickerRef.current!.click()}
                className="h-14 w-fit bg-red-200 p-2 rounded-full text-red-500 cursor-pointer mb-2"
              />
            )}
            <input
              type="file"
              hidden
              ref={imagePickerRef}
              onChange={addImageToModal}
            />
            <input
              type="text"
              maxLength={150}
              className="w-full m-2 border-none focus:outline-none mb-2 text-center"
              placeholder="Enter your caption here"
              ref={captionRef}
            />
            <button
              type="submit"
              disabled={!selectedImage || pending}
              className="bg-red-500 text-white font-semibold p-2 rounded-md w-full hover:brightness-125 transition-colors duration-200 disabled:bg-gray-300 disabled:hover:brightness-100 disabled:cursor-not-allowed disabled:text-slate-800 mb-2"
            >
              <ClipLoader color="#dc2626" loading={pending} size={30} />
              {!pending && "Upload"}
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default UploadModal;
