"use client";

import { opening } from "@/redux/features/uploadModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FiPlusCircle } from "react-icons/fi";

const AddPost = () => {
  const dispatch = useAppDispatch();
  return (
    <FiPlusCircle
      onClick={() => dispatch(opening())}
      className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-200"
    />
  );
};

export default AddPost;
