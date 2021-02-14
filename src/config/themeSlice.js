import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: 1 },
  reducers: {
    setLightTheme(state) {
      state.value = 1;
    },
    setDarkTheme(state) {
      state.value = 0;
    },
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
