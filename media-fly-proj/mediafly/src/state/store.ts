import { configureStore } from '@reduxjs/toolkit';
import containersReducer from './selectLayout/selectLayoutSlice';
import backgroundReducer from './imagePicker/backgroundImageSlice';
import highlightReducer from './editLayout/highlightSlice';

export const store = configureStore({
    reducer: {
        containers: containersReducer,
        background: backgroundReducer,
        highlight: highlightReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;