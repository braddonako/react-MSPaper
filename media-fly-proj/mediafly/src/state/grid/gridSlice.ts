import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GridState {
    rows: number;
    columns: number[];
    highlightedSection: string;
    squareColors: Record<string, string>; // Mapping of square identifiers to colors
    squareImages: Record<string, string>;
    squareTexts: Record<string, string>;
}

const initialState: GridState = {
    rows: 1,
    columns: [1],
    highlightedSection: '',
    squareColors: {}, // New property to store square colors
    squareImages: {},
    squareTexts: {},
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
        setSquareColor: (state, action: PayloadAction<{ squareId: string; color: string }>) => {
            const { squareId, color } = action.payload;
            state.squareColors[squareId] = color;
        },
        setSquareImage: (state, action: PayloadAction<{ squareId: string; imageUrl: string }>) => {
            const { squareId, imageUrl } = action.payload;
            state.squareImages[squareId] = imageUrl;
        },
        setSquareText: (state, action: PayloadAction<{ squareId: string; text: string }>) => {
            const { squareId, text } = action.payload;
            state.squareTexts[squareId] = text;
        },
        clearSquareImage: (state) => {
            state.squareImages = {};
        },
        clearSquareText: (state) => {
            state.squareTexts = {};
        },
        clearSquareColor: (state) => {
            state.squareColors = {};
        },
        clearHighlightedColor: (state) => {
            state.highlightedSection = '';
        },
    },
});

export const {
    setGrid,
    setHighlightedSection,
    setSquareColor,
    setSquareImage,
    setSquareText,
    clearSquareColor,
    clearSquareImage,
    clearSquareText,
    clearHighlightedColor,
} = gridSlice.actions;

export default gridSlice.reducer;