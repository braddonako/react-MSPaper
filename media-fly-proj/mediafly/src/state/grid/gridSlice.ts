import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GridState {
    rows: number;
    columns: number[];
    highlightedSection: string;
    squareImages: Record<string, string>; // Mapping of square identifiers to image URLs
}

const initialState: GridState = {
    rows: 1,
    columns: [1],
    highlightedSection: '',
    squareImages: {},
};

const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        setGrid: (state, action: PayloadAction<{ rows: number; columns: number[] }>) => {
            state.rows = action.payload.rows;
            state.columns = action.payload.columns;
        },
        setHighlightedSection: (state, action: PayloadAction<string>) => {
            state.highlightedSection = action.payload;
        },
        setSquareImage: (state, action: PayloadAction<{ squareId: string; imageUrl: string }>) => {
            const { squareId, imageUrl } = action.payload;
            state.squareImages[squareId] = imageUrl;
        },
        clearSquareImage: (state, action: PayloadAction<string>) => {
            const squareId = action.payload;
            delete state.squareImages[squareId];
        },
        clearHighlightedColor: (state) => {
            state.highlightedSection = '';
        },
    },
});

export const { setGrid, setHighlightedSection, setSquareImage, clearHighlightedColor, clearSquareImage } = gridSlice.actions;
export default gridSlice.reducer;