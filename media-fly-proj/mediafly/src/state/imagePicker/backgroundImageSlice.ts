import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BackgroundState {
  backgroundImage: string | null;
}

const initialState: BackgroundState = {
  backgroundImage: null,
};

const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    setBackgroundImage: (state, action: PayloadAction<string>) => {
      state.backgroundImage = action.payload;
    },
    clearBackgroundImage: (state) => {
      state.backgroundImage = null;
    },
  },
});

export const { setBackgroundImage, clearBackgroundImage } = backgroundSlice.actions;
export const selectBackgroundImage = (state: { background: BackgroundState }) =>
  state.background.backgroundImage;

export default backgroundSlice.reducer;