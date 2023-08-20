import { createReducer } from "@reduxjs/toolkit";
import { Post } from "../../types/blog.type";
import { initialPostlist } from "../../constants/blog";

interface BlogState {
  postList: Post[];
}

const initialState: BlogState = {
  postList: initialPostlist,
};

const blogReducer = createReducer(initialState, (builder) => {});

export default blogReducer;
