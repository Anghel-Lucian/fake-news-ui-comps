import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLoggedIn: false,
  userSearchHistory: [],
  tweetSent: "",
  tweetVerdict: {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    userLogIn(state, action) {
      // send req to backend, log user in, update state, components update themselves accordingly
    },
    sendTweet(state, action) {
      // send req to backend with ID or URL, await verdict, components update themselves accordingly
      // NOTE: this needs to be an async thunk
    },
  },
});

export const { userLogIn, sendTweet } = appSlice.actions;

export default appSlice.reducer;
