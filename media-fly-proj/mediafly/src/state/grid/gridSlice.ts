import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum SquareProperty {
    Color = 'color',
    Image = 'image',
    Text = 'text',
}

interface GridState {
    rows: number;
    columns: number[];
    highlightedSection: string;
    squareColors: Record<string, string>;
    squareImages: Record<string, string>;
    squareTexts: Record<string, string>;
    squareStyles: Record<string, { italic?: boolean; bold?: boolean; underlined?: boolean }>;
}

const initialState: GridState = {
    rows: 1,
    columns: [1],
    highlightedSection: '',
    squareColors: {},
    squareImages: {},
    squareTexts: {},
    squareStyles: {},

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
            action: PayloadAction<{ squareId: string; property: SquareProperty; value: string }>
        ) => {
            const { squareId, property, value } = action.payload;
            state[property === SquareProperty.Color ? 'squareColors' : property === SquareProperty.Image ? 'squareImages' : 'squareTexts'][squareId] = value;
        },
        clearSquareProperty: (state, action: PayloadAction<{ squareId: string; property: SquareProperty }>) => {
            const { squareId, property } = action.payload;
            delete state[property === SquareProperty.Color ? 'squareColors' : property === SquareProperty.Image ? 'squareImages' : 'squareTexts'][squareId];
        },
        clearAllSquareProperties: (state) => {
            state.squareColors = {};
            state.squareImages = {};
            state.squareTexts = {};
        },
        clearHighlightedColor: (state) => {
            state.highlightedSection = '';
        },
        setSquareStyle: (
            state,
            action: PayloadAction<{ squareId: string; italic?: boolean; bold?: boolean; underlined?: boolean }>
        ) => {
            const { squareId, italic, bold, underlined } = action.payload;

            const existingStyle = state.squareStyles[squareId] || {};
            state.squareStyles[squareId] = { ...existingStyle, italic, bold, underlined };
        },
        clearSquareStyle: (state, action: PayloadAction<{ squareId: string }>) => {
            const { squareId } = action.payload;
            delete state.squareStyles[squareId];
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
    setSquareStyle,
    clearSquareStyle,
} = gridSlice.actions;

export default gridSlice.reducer;
