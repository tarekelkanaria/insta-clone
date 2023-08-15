"use client";

import { useAppSelector } from "@/redux/hooks";

const UploadModal = () => {
  const isModalOpened = useAppSelector((state) => state.modal.isVisible);
  return <section>{isModalOpened && <h1>Upload Modal</h1>}</section>;
};

export default UploadModal;
