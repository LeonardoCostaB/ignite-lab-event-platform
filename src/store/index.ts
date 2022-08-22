import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./module/users";

export const store = configureStore({
  reducer: { userReduce }
})

export type RootStore = ReturnType<typeof store.getState>;