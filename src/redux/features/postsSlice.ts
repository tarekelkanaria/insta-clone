import { getAllPosts } from "@/firebase/upload-post";
import { RetrievedPost } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Timestamp } from "firebase/firestore";

type Posts = {
  total: number;
  lastPostSoFar: Timestamp | null;
  loadedPosts: RetrievedPost[];
};

const initialState: Posts = {
  total: 0,
  lastPostSoFar: null,
  loadedPosts: [],
};

export const setInitialData = createAsyncThunk(
  "posts/all",
  async (posts: RetrievedPost[]) => ({
    initialTotal: await getAllPosts(),
    initialPosts: posts,
    initialLastPostSoFar: posts[posts.length - 1]?.timestamp,
  })
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsCount: (state, action: { payload: number; type: string }) => {
      state.total = action.payload;
    },
    getLastPostSoFar: (state, action: { payload: Timestamp; type: string }) => {
      state.lastPostSoFar = action.payload;
    },
    updatePosts: (
      state,
      action: { payload: RetrievedPost[]; type: string }
    ) => {
      state.loadedPosts = [...state.loadedPosts, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setInitialData.fulfilled, (state, action) => {
      state.total = action.payload.initialTotal;
      state.lastPostSoFar = action.payload.initialLastPostSoFar;
      state.loadedPosts = action.payload.initialPosts;
    });
  },
});

export const { setPostsCount, getLastPostSoFar, updatePosts } =
  postsSlice.actions;

export default postsSlice.reducer;
