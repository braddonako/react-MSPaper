import { createSlice } from '@reduxjs/toolkit';

const containersSlice = createSlice({
    name: 'containers',
    initialState: {
        selectedContainerId: null,
    },
    reducers: {
        selectContainer: (state, action) => {
            state.selectedContainerId = action.payload;
        },
    },
});

export const { selectContainer } = containersSlice.actions;
export default containersSlice.reducer;