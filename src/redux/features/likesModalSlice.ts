import { RetrievedLike } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type LikesModal = {
  isVisible: boolean;
  likedUsers: RetrievedLike[];
};

const initialState: LikesModal = {
  isVisible: false,
  likedUsers: [],
};

const likesModalSlice = createSlice({
  name: "likes-modal",
  initialState,
  reducers: {
    opening: (state) => {
      state.isVisible = true;
    },
    closing: (state) => {
      state.isVisible = false;
    },
    saveLikedUsers: (state, action) => {
      state.likedUsers = action.payload;
    },
  },
});

export const { opening, closing, saveLikedUsers } = likesModalSlice.actions;

export default likesModalSlice.reducer;
