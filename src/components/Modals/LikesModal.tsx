"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closing } from "@/redux/features/likesModalSlice";
import { useEffect } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

const LikesModal = () => {
  const isModalOpened = useAppSelector((state) => state.likesModal.isVisible);
  const likes = useAppSelector((state) => state.likesModal.likedUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Modal.setAppElement("#modals");
  }, []);

  return (
    <>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={() => dispatch(closing())}
        className="modal"
        contentLabel="Likes modal"
      >
        <GrClose
          onClick={() => dispatch(closing())}
          className="h-8 w-fit cursor-pointer mb-2 ml-auto"
        />
        {likes.map((like) => (
          <article
            key={like.id}
            className="flex items-center space-x-4 border rounded-lg px-5 py-2 mb-4"
          >
            <Image
              src={like.userImg}
              alt={like.userName}
              width={28}
              height={28}
              style={{ maxWidth: "28px", height: "auto" }}
              className="p-0.5 rounded-full border border-red-500 object-cover"
            />
            <p className="font-bold text-sm">{like.userName}</p>
          </article>
        ))}
      </Modal>
    </>
  );
};

export default LikesModal;
