import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isVisible: boolean;
};

const initialState: ModalState = {
  isVisible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    opening: (state) => {
      state.isVisible = true;
    },
  },
});

export const { opening } = modalSlice.actions;

export default modalSlice.reducer;
