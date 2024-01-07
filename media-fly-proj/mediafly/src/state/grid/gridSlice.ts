import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GridState {
    rows: number;
    columns: number[];
    highlightedSection: string;
    squareColors: Record<string, string>;
    squareImages: Record<string, string>;
    squareTexts: Record<string, string>;
}

const initialState: GridState = {
    rows: 1,
    columns: [1],
    highlightedSection: '',
    squareColors: {},
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
        setSquareProperty: (
            state,
            action: PayloadAction<{ squareId: string; property: 'color' | 'image' | 'text'; value: string }>
        ) => {
            const { squareId, property, value } = action.payload;
            state[property === 'color' ? 'squareColors' : property === 'image' ? 'squareImages' : 'squareTexts'][squareId] = value;
        },
        clearSquareProperty: (state, action: PayloadAction<{ squareId: string; property: 'color' | 'image' | 'text' }>) => {
            const { squareId, property } = action.payload;
            delete state[property === 'color' ? 'squareColors' : property === 'image' ? 'squareImages' : 'squareTexts'][squareId];
        },
        clearAllSquareProperties: (state) => {
            state.squareColors = {};
            state.squareImages = {};
            state.squareTexts = {};
        },
        clearHighlightedColor: (state) => {
            state.highlightedSection = '';
        },
    },
});

export const {
    setGrid,
    setHighlightedSection,
    setSquareProperty,
    clearSquareProperty,
    clearAllSquareProperties,
    clearHighlightedColor,
} = gridSlice.actions;

export default gridSlice.reducer;