import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "ankisood" },
  { id: 2, name: "bnisood" },
  { id: 3, name: "namya" },
];

const users = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default users.reducer;
