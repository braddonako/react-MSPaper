import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GridState {
    rows: number;
    columns: number[];
    highlightedSection: string;
}

const initialState: GridState = {
    rows: 1,
    columns: [1],
    highlightedSection: '',
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
        clearHighlightedColor: (state) => {
            state.highlightedSection = '';
        }
    },
});

export const { setGrid, setHighlightedSection, clearHighlightedColor } = gridSlice.actions;
export default gridSlice.reducer;