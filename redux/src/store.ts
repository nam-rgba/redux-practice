import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./pages/blog/blog.reducer";

export const store = configureStore({
  reducer: { blog: blogReducer },
});

// get RootState and AppDispatch from store
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
