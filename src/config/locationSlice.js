import { createSlice } from "@reduxjs/toolkit";
import { LANGUAGE } from "../lang";

const locationSlice = createSlice({
  name: "location",
  initialState: { value: LANGUAGE.DEFAULT },
  reducers: {
    setEnglish(state) {
      state.value = LANGUAGE.EN_US;
    },
    setPortuguese(state) {
      state.value = LANGUAGE.PT_BR;
    },
  },
});

export const { setEnglish, setPortuguese } = locationSlice.actions;

export default locationSlice.reducer;
