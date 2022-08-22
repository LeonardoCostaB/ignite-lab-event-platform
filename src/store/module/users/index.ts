import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
}

const userReduce = createSlice({
  name: "user",

  initialState: {
    name: "",
    email: ""
  } as UserState,
  
  reducers: {
    setUser(state, action) {
      Object.assign(state, {
        name: action.payload.name,
        email: action.payload.email
      })
    },

    removeUser(state, action) {
      Object.assign(state, {
        name: "",
        email: ""
      })
    }
  }
});

export const { setUser, removeUser } = userReduce.actions;
export default userReduce.reducer;