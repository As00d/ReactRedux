import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { reset, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
