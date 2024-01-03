import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HighlightState {
    highlightedSection: string | null;
}

const initialState: HighlightState = {
    highlightedSection: null,
};

const highlightSlice = createSlice({
    name: 'highlight',
    initialState,
    reducers: {
        setHighlightedSection: (state, action: PayloadAction<string>) => {
            state.highlightedSection = action.payload;
        },
        clearHighlightedSection: (state) => {
            state.highlightedSection = null;
        }
    },
});

export const { setHighlightedSection, clearHighlightedSection } = highlightSlice.actions;
export default highlightSlice.reducer;