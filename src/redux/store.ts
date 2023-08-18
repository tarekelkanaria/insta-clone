import { configureStore } from "@reduxjs/toolkit";
import uploadModalReducer from "./features/uploadModalSlice";
import likesModalReducer from "./features/likesModalSlice";

const store = configureStore({
  reducer: {
    uploadModal: uploadModalReducer,
    likesModal: likesModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
