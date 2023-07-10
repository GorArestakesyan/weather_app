import { createSlice } from "@reduxjs/toolkit";
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    loader: false,
    modalOpen: false,
  },
  reducers: {
    setLoader: (state, action) => {
      return {
        ...state,
        loader: action.payload,
      };
    },
    setModalOpen: (state, action) => {
      return {
        ...state,
        modalOpen: action.payload,
      };
    },
  },
});

export const { setLoader, setModalOpen } = weatherSlice.actions;
export default weatherSlice.reducer;
