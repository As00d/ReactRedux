import { createSlice } from "@reduxjs/toolkit";

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;

const initialState = [
  {
    id: 1,
    title: "Chapter 1 - Initial redux setup",
    content:
      "Learning redux by understanding how to configure a store and then providing store to app",
    date: currentDate,
  },

  {
    id: 2,
    title: "Chapter 2 - Understanding data flow in redux",
    content: "Creating a post blog feature ",
    date: currentDate,
  },
];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      return [...state, action.payload];
    },
  },
});
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
