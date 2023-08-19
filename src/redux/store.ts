import { configureStore } from "@reduxjs/toolkit";
import uploadModalReducer from "./features/uploadModalSlice";
import likesModalReducer from "./features/likesModalSlice";
import postsReducer from "./features/postsSlice";

const store = configureStore({
  reducer: {
    uploadModal: uploadModalReducer,
    likesModal: likesModalReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "posts/getLastPostSoFar",
          "posts/all/fulfilled",
          "posts/updatedPosts",
        ],
        // Ignore these paths in the state
        ignoredPaths: ["posts.lastPostSoFar", "posts.loadedPosts"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
