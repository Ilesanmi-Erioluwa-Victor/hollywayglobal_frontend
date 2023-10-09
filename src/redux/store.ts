import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";
import address from "./slices/address";
import product from "./slices/product";

export const store = configureStore({
  reducer: {
    user,
    address,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
