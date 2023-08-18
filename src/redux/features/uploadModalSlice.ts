import { createSlice } from "@reduxjs/toolkit";

type UploadModal = {
  isVisible: boolean;
};

const initialState: UploadModal = {
  isVisible: false,
};

const uploadModalSlice = createSlice({
  name: "upload-modal",
  initialState,
  reducers: {
    opening: (state) => {
      state.isVisible = true;
    },
    closing: (state) => {
      state.isVisible = false;
    },
  },
});

export const { opening, closing } = uploadModalSlice.actions;

export default uploadModalSlice.reducer;
