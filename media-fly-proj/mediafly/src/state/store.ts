import { configureStore } from '@reduxjs/toolkit';
import containersReducer from './selectLayout/selectLayoutSlice';
import backgroundReducer from './imagePicker/backgroundImageSlice';
import gridReducer from './grid/gridSlice';

export const store = configureStore({
    reducer: {
        containers: containersReducer,
        background: backgroundReducer,
        grid: gridReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;