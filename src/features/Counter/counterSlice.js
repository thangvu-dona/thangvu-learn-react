const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    inscrease(state, action) {
      return state + 1;
    },

    decrease(state, action) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { inscrease, decrease } = actions; // named export
export default reducer; // default export
